# Generated by Django 3.1.7 on 2021-03-25 09:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomm', '0012_product_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='LEDproduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('description', models.CharField(max_length=300)),
                ('price', models.FloatField()),
                ('led_ON_img', models.ImageField(upload_to='ledImages')),
                ('led_OFF_img', models.ImageField(upload_to='ledImages')),
            ],
        ),
        migrations.CreateModel(
            name='UpcomingProduct',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('description', models.CharField(max_length=300)),
                ('category', models.CharField(max_length=50)),
                ('thumbnail', models.ImageField(upload_to='coming_prod_thumbnails')),
                ('main_video', models.FileField(upload_to='coming_prodMainVideos')),
            ],
        ),
        migrations.CreateModel(
            name='LEDimage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='ledImages')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Ecomm.ledproduct')),
            ],
        ),
    ]
