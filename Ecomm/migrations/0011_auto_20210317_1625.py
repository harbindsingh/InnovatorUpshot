# Generated by Django 3.1.7 on 2021-03-17 10:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomm', '0010_auto_20210317_1300'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='prodvideo',
            name='main_video',
        ),
        migrations.AddField(
            model_name='product',
            name='main_video',
            field=models.FileField(default='null', upload_to='prodMainVideos'),
        ),
    ]