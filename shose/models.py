from django.db import models

# Create your models here.
class Shose(models.Model):
    photo = models.ImageField(upload_to='shose/static/shose/images')
    name = models.CharField( max_length = 100 )
    brand = models.CharField( max_length = 50 )
    trend = models.BooleanField()
    price = models.IntegerField()
    det = models.CharField( max_length = 500 )
    like = models.BooleanField()
    collection = models.CharField( max_length = 50)
    photo_extra_1 = models.ImageField(upload_to='shose/static/shose/images')
    photo_extra_2 = models.ImageField(upload_to='shose/static/shose/images')
    photo_extra_3 = models.ImageField(upload_to='shose/static/shose/images')
    photo_extra_4 = models.ImageField(upload_to='shose/static/shose/images')

    def __name__(self):
        return self.name 
    


