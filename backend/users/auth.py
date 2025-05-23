from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import AuthenticationFailed
from django.contrib.auth import get_user_model
import jwt
import os
from django.utils.crypto import get_random_string

class NextAuthJWTAuthentication(BaseAuthentication):
    def authenticate(self, request):
        auth_header = request.headers.get('Authorization')
        if not auth_header or not auth_header.startswith('Bearer '):
            return None

        token = auth_header.split(' ')[1]
        try:
            payload = jwt.decode(token, os.environ.get('NEXTAUTH_SECRET'), algorithms=["HS256"])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Token expired')
        except jwt.InvalidTokenError:
            raise AuthenticationFailed('Invalid token')

        User = get_user_model()
        email = payload.get("email")

        if not email:
            raise AuthenticationFailed('Email not provided in token')

        user, created = User.objects.get_or_create(
            email=email,
            defaults={
                "username": email.split("@")[0],
                "first_name": payload.get("name", "").split(" ")[0],
                "last_name": " ".join(payload.get("name", "").split(" ")[1:]),
                "password": get_random_string(32),
            }
        )

        return (user, None)

