from django.urls import path
from . import views

urlspath = [
    path("/download", views.index, name="index"),
    path("/support", views.index, name="index"),
    path("", views.index, name="index"),
    path("", views.index, name="index"),
]
