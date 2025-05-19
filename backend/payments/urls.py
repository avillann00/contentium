from django.urls import path
from .views import CreateCheckoutSessionView

urlpatterns = [
    path('stripe/create-checkout-session/', CreateCheckoutSessionView.as_view(), name='checkout')
]
