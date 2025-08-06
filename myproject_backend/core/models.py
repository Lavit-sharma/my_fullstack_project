from django.db import models
from django.contrib.auth.models import User

class Task(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tasks')  # Task kis user ka hai
    title = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    completed = models.BooleanField(default=False)  # Kya task complete hua
    created_at = models.DateTimeField(auto_now_add=True)  # Kab bana

    def __str__(self):
        return self.title  # Task ka title print hoga
