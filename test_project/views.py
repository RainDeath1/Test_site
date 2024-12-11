from django.shortcuts import render
from .models import ResourceLinks

def index(request):
    links=ResourceLinks.objects.all()
    return render(request,'index.html',{'links':links})
# Create your views here.
