from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from nlApp.models import Subscribers
from nlApp.serializers import SubscriberSerializer
# Create your views here.

@csrf_exempt
def subscriberApi(request,id=0):
    if request.method=='GET':
        subscribers = Subscribers.objects.all()
        subscribers_serializer = SubscriberSerializer(subscribers,many=True)
        return JsonResponse(subscribers_serializer.data, safe = False)
    elif request.method=='POST':
        subscriber_data = JSONParser().parse(request)
        subscribers_serializer = SubscriberSerializer(data=subscriber_data)
        if subscribers_serializer.is_valid():
            subscribers_serializer.save()
            return JsonResponse("Added Successfully",safe=False)
        return JsonResponse("Failed to Add", safe=False)
    elif request.method=='PUT':
        subscriber_data=JSONParser().parse(request)
        subscriber=Subscribers.objects.get(SubscriberId=subscriber_data['SubscriberId'])
        subscribers_serializer=SubscriberSerializer(subscriber,data=subscriber_data)
        if subscribers_serializer.is_valid():
            subscribers_serializer.save()
            return JsonResponse("Update Succesfully",safe=False)
        return JsonResponse("Failed to Update")
    elif request.method=='DELETE':
        subscriber=Subscribers.objects.get(SubscriberId=id)
        subscriber.delete()
        return JsonResponse("Deleted Successfully",safe=False)