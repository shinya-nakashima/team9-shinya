from django.urls import include, path
from . import views

urlpatterns = [
    path('api/search_by_tags/', views.search_by_tags),
]