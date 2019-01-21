from django.urls import path
from . import views

urlpatterns = [
    path('', views.yelp),
    path('<arg1>/<arg2>', views.arg_two),
    path('<arg1>', views.arg_one),
]