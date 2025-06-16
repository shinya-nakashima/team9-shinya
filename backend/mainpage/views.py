from django.shortcuts import render, HttpResponse
from django.conf import settings
from django.http import HttpResponseRedirect

def index(request):
    if settings.DEBUG:
        return HttpResponseRedirect("http://localhost:3000/")
    else:
        return render(request, "build/index.html")
