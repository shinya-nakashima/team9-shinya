from rest_framework import serializers
from .models import Lecture, Tag

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ['id', 'name']

class LectureSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)

    class Meta:
        model = Lecture
        fields = [
            'id', 'title', 'course_name', 'theme', 'target',
            'format', 'price', 'image_url', 'url',
            'created_at', 'updated_at', 'tags'
        ]
