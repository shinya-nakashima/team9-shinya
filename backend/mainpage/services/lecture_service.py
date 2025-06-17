def search_lectures_by_tags(tag_names):
    tags = Tag.objects.filter(name__in=tag_names)
    tag_ids = list(tags.values_list('id', flat=True))
    return Lecture.objects.annotate(
        matched_tags=Count('tags', filter=Q(tags__id__in=tag_ids), distinct=True)
    ).filter(matched_tags=len(tag_ids))