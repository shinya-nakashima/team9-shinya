from django.contrib import admin
from .models import Lecture, Tag

admin.site.register(Lecture)
admin.site.register(Tag)