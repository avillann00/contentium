from django.urls import path
from .views import CreateCheckoutSessionView
from .webhooks import stripe_webhook

urlpatterns = [
    path('stripe/create-checkout-session/', CreateCheckoutSessionView.as_view(), name='checkout'),
    path('stripe/webhook/', stripe_webhook, name='stripe-webhook')
]
