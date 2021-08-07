from django.db import models

# Create your models here.
class Subscribers(models.Model):
    SubscriberId = models.AutoField(primary_key=True)
    SubscriberEmail = models.CharField(max_length=500)