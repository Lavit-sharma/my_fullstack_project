from django.urls import path
from .views import RegisterView, UserView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),     # Register API
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),  # Login API
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'), # Refresh token API
    path('me/', UserView.as_view(), name='user_detail'),             # Get logged-in user
]
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

router = DefaultRouter()
router.register('tasks', TaskViewSet, basename='task')

urlpatterns += router.urls
