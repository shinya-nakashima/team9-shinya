from django.shortcuts import render, HttpResponse
from django.conf import settings
from django.http import HttpResponseRedirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count
from .models import Lecture, Tag
from .serializers import LectureSerializer
from .services.lecture_service import search_lectures_by_tags


@api_view(['POST'])
def search_by_tags(request):
    tag_names = [request.data.get('tag1'), request.data.get('tag2'), request.data.get('tag3')]
    tag_names = [tag for tag in tag_names if tag]  # 空文字と None を除去

    if tag_names:
        result = search_lectures_by_tags(tag_names)  
        # エラーの場合（dictで返る ここもっとスマートに書けるかも）
        if isinstance(result, dict) and "error" in result:
            return Response(result, status=status.HTTP_400_BAD_REQUEST)
        elif isinstance(result, str) and "error" in result:
            return Response(result, status=status.HTTP_400_BAD_REQUEST)
            
        # 成功した場合
        serializer = LectureSerializer(result, many=True)
        return Response(serializer.data)

    return Response({"error": "タグが指定されていません"}, status=status.HTTP_400_BAD_REQUEST)