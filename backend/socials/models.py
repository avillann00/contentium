from django.db import models
from users.models import CustomUser

class Connection(models.Model):
    PLATFORM_CHOICES = [
        ('instagram', 'Instagram'),
        ('facebook', 'Facebook'),
        ('tiktok', 'TikTok'),
        ('youtube', 'Youtube'),
        ('x', 'X'),
        ('twitter', 'Twitter')
    ]

    id = models.BigAutoField(primary_key=True)
    user = models.ForeignKey(CustomUser, null=True, on_delete=models.SET_NULL, related_name='user')
    external_user_id = models.CharField(max_length=225)
    platform = models.CharField(max_length=225, choices=PLATFORM_CHOICES)
    username = models.CharField(max_length=225, blank=True, null=True)
    profile_url = models.URLField(blank=True, null=True)
    avatar_url = models.URLField(blank=True, null=True)

    access_token = models.TextField()
    refresh_token = models.TextField(blank=True, null=True)
    token_expiration = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        unique_together = ('platform', 'external_user_id')

    def __str__(self):
        return f'{self.user} - {self.platform}'

class Post(models.Model):
    id = models.BigAutoField(primary_key=True)
    post_id = models.CharField(max_length=225)
    connection = models.ForeignKey(Connection, on_delete=models.SET_NULL, related_name='connection', null=True)
    post_type = models.CharField(max_length=225)
    caption = models.TextField(blank=True, null=True)
    media_url = models.URLField(blank=True, null=True)
    permalink = models.URLField(blank=True, null=True)
    created_at = models.DateTimeField()
    raw_data = models.JSONField(blank=True, null=True)
    fetched_at = models.DateTimeField(auto_now_add=True)

    class Meta: 
        unique_together = ('connection', 'post_id')

    def __str__(self):
        return f'Post {self.post_id} from {self.connection.platform}'

class Insight(models.Model):
    id = models.BigAutoField(primary_key=True)
    post = models.ForeignKey(Post, null=True, on_delete=models.SET_NULL, related_name='post')
    likes = models.IntegerField(default=0)
    comments = models.IntegerField(default=0)
    shares = models.IntegerField(default=0)
    views = models.IntegerField(default=0)
    reach = models.IntegerField(default=0, null=True, blank=True)
    impressions = models.IntegerField(default=0, null=True, blank=True)
    saved = models.IntegerField(default=0, null=True, blank=True)

    fetched_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'insights for {self.post}'
