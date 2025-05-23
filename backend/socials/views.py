from rest_framework.views import APIView, Response
from .models import Connection, Post, Insight
from .serializers import ConnectionSerializer, PostSerializer, InsightSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status

class ConnectionView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        connections = Connection.objects.filter(user=user)

        serializer = ConnectionSerializer(connections, many=True)

        return Response(serializer.data, status=status.HTTP_200_OK)
