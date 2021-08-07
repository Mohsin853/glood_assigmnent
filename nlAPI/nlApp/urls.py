from django.conf.urls import url
from nlApp import views

urlpatterns=[
    url(r'^subscriber$',views.subscriberApi),
    url(r'^subscriber/([0-9]+)$',views.subscriberApi)
]