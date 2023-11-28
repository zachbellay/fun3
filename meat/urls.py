from django.shortcuts import render
from django.views.generic.base import TemplateView
from django.urls import path

# Create your views here.
urlpatterns = [
    path("", TemplateView.as_view(template_name="meat/index.html")),
]
