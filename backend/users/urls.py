from django.urls import include
from .views import RegisterView

urlpatterns = [
    include('register/', RegisterView.as_view(), name='register')
]
