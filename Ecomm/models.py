from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    price = models.FloatField()
    category = models.CharField(max_length = 50, default='null')
    new_product = models.BooleanField(default=False)
    thumbnail = models.ImageField(upload_to='prod_thumbnails', default="null")
    main_video = models.FileField(upload_to='prodMainVideos', default='null')
    googleplay_url = models.CharField(max_length=200, default="null")

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        try:
            if self.new_product:
                temp = Product.objects.get(new_product=True)
                if self != temp:
                    temp.new_product = False
                    temp.save()
        except Product.DoesNotExist:
            pass
        super(Product, self).save(*args, **kwargs)


class UpcomingProduct(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    category = models.CharField(max_length=50)
    thumbnail = models.ImageField(upload_to='coming_prod_thumbnails')
    main_video = models.FileField(upload_to='coming_prodMainVideos')

    def __str__(self):
        return self.name


class Feature(models.Model):
    product_name = models.ForeignKey(Product, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=300)
    primary_feature = models.BooleanField(default=False)

    def __str__(self):
        return (str(self.product_name)+self.name)


def get_image_path(instance, filename):
    return 'images/{0}/{1}'.format(instance.product_name.name,filename)

def get_video_path(instance, filename):
    return 'video/{0}/{1}'.format(instance.product_name.name,filename)


class ProdImage(models.Model):
    product_name = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField(upload_to=get_image_path)

    def __str__(self):
        return (str(self.product_name) + ' image')


class ProdVideo(models.Model):
    product_name = models.ForeignKey(Product, on_delete=models.CASCADE)
    video = models.FileField(upload_to=get_video_path)

    def __str__(self):
        return (str(self.product_name) + ' video' + str(self.id))


class Ledproduct(models.Model):
    name = models.CharField(max_length=150)
    description = models.CharField(max_length=300)
    price = models.FloatField()
    led_ON_img = models.ImageField(upload_to='ledImages/')
    led_OFF_img = models.ImageField(upload_to='ledImages/')

    def __str__(self):
        return self.name

class Ledimage(models.Model):
    product = models.ForeignKey(Ledproduct, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='ledImages/')

    def __str__(self):
        return 'Image'+str(self.product)

class Category(models.Model):
    name = models.CharField(max_length=50, help_text='Careful!! : Should be same as provided in the Products model.')
    banner = models.ImageField(upload_to='categoryBanners/')

    def __str__(self):
        return self.name
