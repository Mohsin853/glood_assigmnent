from rest_framework import serializers
from nlApp.models import Subscribers

class SubscriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscribers
        fields = ('SubscriberId','SubscriberEmail')