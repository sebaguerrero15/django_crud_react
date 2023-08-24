from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    model = Task
    class Meta:
        #fields = ('id', 'title', 'description', 'done')
        fields = '__all__'