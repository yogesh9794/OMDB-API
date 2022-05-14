from django.shortcuts import render
from django.http import HttpResponse
import requests
import json
# Create your views here.


def index(request):
    print('test1')
    # if request.method == 'get':

    #     print("sdjhbjx")
    #     test1 = request.GET.get('the_movie')
    #     print(test1)
    # resp = requests.get(
    #     'https://www.omdbapi.com/?apikey=5e04ff80&i=tt3896198').json()
    # return render(request, 'index.html')
    # return render(request, 'index.html', {'resp': resp})
    return render(request, 'index.html')


# def output(request):
#     print('output')
#     if request.method == 'GET':
#         a1 = int(request.GET.get['#t1'])
#         a3 = int(request.GET.get['#t2'])
#         print(a1)
#         a2 = "sdgd"
#     return render(request, 'output.html', {'a1': a1, 'a2': a2, 'a3': a3})
