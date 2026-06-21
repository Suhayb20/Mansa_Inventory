from django.shortcuts import render
from .serializers import UserSerializer # importing the UserSerializer from serializers.py
from rest_framework import generics # importing generics are used to create class-based views for handling HTTP requests
from django.contrib.auth.models import User # importing the default User model from django.contrib.auth.models
from rest_framework.permissions import AllowAny 

class RegisterView(generics.CreateAPIView): # creating a class-based view for user registration that inherits from CreateAPIView
    queryset = User.objects.all() # specifying the queryset to be used for this view, which is all User objects
    serializer_class = UserSerializer # specifying the serializer class to be used for this view, which is UserSerializer
    permission_classes = [AllowAny]
    