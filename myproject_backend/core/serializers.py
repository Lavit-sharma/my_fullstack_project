from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Task


# User data print karne ke liye
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Register karne ke liye serializer
class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)  # Password client ko na dikhe

    class Meta:
        model = User
        fields = ['username', 'email', 'password']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email'],
            password=validated_data['password']
        )
        return user

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'
        read_only_fields = ('user', 'created_at')
