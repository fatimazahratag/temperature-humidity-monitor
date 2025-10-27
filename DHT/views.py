from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Reading
from .serializers import ReadingSerializer

@api_view(['POST'])
def receive_data(request):
    serializer = ReadingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Data received successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def latest_reading(request):
    latest = Reading.objects.last()
    if latest:
        serializer = ReadingSerializer(latest)
        return Response(serializer.data)
    return Response({"message": "No data available"}, status=status.HTTP_404_NOT_FOUND)



# views.py
@api_view(['GET'])
def all_readings(request):
    readings = Reading.objects.all().order_by('-timestamp')[:20]  # last 20
    serializer = ReadingSerializer(readings, many=True)
    return Response(serializer.data)


def home(request):
    return HttpResponse("Welcome to the Temperature & Humidity Dashboard API")

def dashboard(request):
    return render(request, 'DHT/dashboard.html')