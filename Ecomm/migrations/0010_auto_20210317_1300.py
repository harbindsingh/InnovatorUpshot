# Generated by Django 3.1.7 on 2021-03-17 07:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Ecomm', '0009_auto_20210317_1257'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='googleplay_url',
            field=models.CharField(default='null', max_length=200),
        ),
    ]
