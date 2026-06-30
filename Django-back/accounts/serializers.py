from django.contrib.auth.models import User # importing default User model from django.contrib.auth.models
from rest_framework import serializers # importing serializers from rest_framework

class UserSerializer(serializers.ModelSerializer): # creating a serializer class for User model
    password = serializers.CharField(write_only=True, style={'input_type': 'password'}, min_length=8) # making password field write-only and enforcing a minimum length of 8

    class Meta:
        model = User # specifying the model to be serialized
        fields = ['username', 'email', 'password'] # specifying the fields to be included in the serialized output

    def create(self, validated_data): # overriding the create method to handle password hashing
        user = User.objects.create_user(**validated_data) # creating a new user using the create_user method which handles password hashing
        return user 