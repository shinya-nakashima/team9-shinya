from django.db.models import Count
from mainpage.models import Tag, Lecture

def search_lectures_by_tags(tag_names):
    tags = Tag.objects.filter(name__in=tag_names)
    if tags.count() != len(tag_names):
        return {"error": "該当するタグが存在しません"}

    lectures = Lecture.objects.all()
    for tag in tags:
        lectures = lectures.filter(tags=tag)  # AND 条件で絞る

    if not lectures.exists():
        return {"error": "該当する講座が見つかりません"}

    return lectures