from rest_framework import generics, permissions
from django.contrib.auth.models import User
from .serializers import UserSerializer, RegisterSerializer

from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# Register karne ke liye API view
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]  # Sab log register kar sakte hain
    serializer_class = RegisterSerializer

# Logged-in user ke details dene ke liye API view
class UserView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
from rest_framework import viewsets, permissions
from .models import Task
from .serializers import TaskSerializer

class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TaskSerializer

    def get_queryset(self):
        return Task.objects.filter(user=self.request.user)  # Sirf apne tasks dikhao

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)  # Task create karte time user set kar do
