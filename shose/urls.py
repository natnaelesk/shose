from django.urls import path 
from . import views

app_name = 'shose'

urlpatterns = [
    path('' , views.home ,name='home' ),
        path('buy' , views.buy , name='buy' ),
    path("<str:catag>" , views.catagories , name = "chatagories"),
    path('chart/<str:chart>' , views.chart , name='chart'),   

]