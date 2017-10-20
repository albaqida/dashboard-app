# -*- coding: utf-8 -*-
# Generated by Django 1.11.5 on 2017-10-20 18:15
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('food', '0007_merge_20171006_1739'),
    ]

    operations = [
        migrations.AddField(
            model_name='fooditem',
            name='users',
            field=models.ManyToManyField(related_name='food_items', to=settings.AUTH_USER_MODEL),
        ),
    ]