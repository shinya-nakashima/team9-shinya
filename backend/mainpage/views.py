from django.shortcuts import render, HttpResponse
from django.conf import settings
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
from .models import Lecture, Tag
from .serializers import LectureSerializer
# from search_lectures_by_tags import ../services/lectures_service


@api_view(['POST'])
def search_by_tags(request):
    tag_names = [request.data.get('tag1'), request.data.get('tag2'), request.data.get('tag3')]

    tags = Tag.objects.filter(name__in=tag_names)
    print(tags)
    if tags.count() != len(tag_names):
        return Response({"error": "存在しないタグが含まれています"}, status=status.HTTP_400_BAD_REQUEST)

    lectures = search_lectures_by_tags(tag_names)
    serializer = LectureSerializer(lectures, many=True)
    return Response(serializer.data)