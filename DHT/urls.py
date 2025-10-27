from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.dashboard, name='dashboard'),
    path('send/', views.receive_data, name='receive_data'),
    path('latest/', views.latest_reading, name='latest_reading'),
    path('all/', views.all_readings, name='all_readings'),
]
