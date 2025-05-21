from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from django.conf import settings
import stripe
import os
from dotenv import load_dotenv

stripe.api_key = settings.STRIPE_SECRET_KEY

load_dotenv()

class CreateCheckoutSessionView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        try:
            session = stripe.checkout.Session.create(
                payment_method_types=['card'],
                mode='subscription',
                line_items=[{
                    'price': os.getenv('STRIPE_PRICE_ID'),
                    'quantity': 1,
                }],
                customer_email=request.user.email,
                success_url=os.getenv('STRIPE_SUCCESS_URL'),
                cancel_url=os.getenv('STRIPE_CANCEL_URL'),
                metadata={'user_id': request.user.id},
            )
            return Response({'sessionId': session.id})
        except Exception as e:
            print('Full error: ', e)
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

