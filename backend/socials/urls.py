from django.urls import path
from .views import ConnectionView

urlpatterns = [
    path('connections/', ConnectionView.as_view(), name='connections')
]
