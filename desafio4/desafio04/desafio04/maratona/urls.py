from django.urls import path
from maratona import views


urlpatterns = [
    path('', views.index, name='index'),

]