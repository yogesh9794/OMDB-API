from importlib.resources import path
from django.contrib import admin
from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='index'),
    # path('output/', output, name='output'),
    # path(''),
    # path('', views.hi),
]
