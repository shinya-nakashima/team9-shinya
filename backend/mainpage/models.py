from django.db import models

# Create your models here.
class Tag(models.Model):
    name = models.CharField(max_length=50, unique=True)

class Lecture(models.Model):
    title = models.TextField()
    course_name = models.CharField(max_length=255)
    theme = models.CharField(max_length=100)
    target = models.CharField(max_length=100)
    format = models.CharField(max_length=50)
    price = models.IntegerField()
    image_url = models.URLField()
    url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    tags = models.ManyToManyField('Tag')  # ← タグ機能
