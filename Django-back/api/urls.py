from django.urls import path
from accounts import views as UserViews

urlpatterns = [
    path('register/', UserViews.RegisterView.as_view() ), # This code defines a URL pattern for the user registration endpoint. When a POST request is made to 'register/', it will be handled by the RegisterView class-based view defined in accounts/views.py. The name 'register' can be used to refer to this URL pattern elsewhere in the code, such as in templates or when reversing URLs.
]