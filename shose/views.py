from django.shortcuts import render ,redirect
from django.http import HttpResponse
from . import models
from . import forms
# Create your views here.
lk = []




def home(request) :
    return render (request , 'shose/collection.html',{
    } )
    


def catagories(request , catag):

    obj = models.Shose.objects.filter( collection = catag )
    if obj:
        return render (request , 'shose/shoes.html' , {
            'shoses' : obj
            })
    elif catag == 'collections': 
        obj = models.Shose.objects.all()
        return render (request , 'shose/shoes.html' , {
        'shoses' : obj,
          })
    else:
        obj = models.Shose.objects.filter( brand = catag )
        return render (request , 'shose/shoes.html' , {
        'shoses' : obj,
          })
   


def chart(request , chart ):

    obj = models.Shose.objects.filter( id = chart )
    if request.method == 'POST':
        d = {
            'name': obj[0].name,
            'brand': obj[0].brand,
            'price': obj[0].price,
            'photo': obj[0].photo.url ,
            'id' : obj[0].id,
        }
        lk.append(d)


    return render (request , 'shose/chart.html' , {
        'data' : obj[0],
          })

def buy(request ):
    if  request.method == 'POST':
        lk.clear()
    return render (request , 'shose/buy.html' , {
        
        'lk' : lk,
          })

 