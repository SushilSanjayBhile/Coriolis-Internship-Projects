# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-11 06:45
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0004_patient_age'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='age',
            field=models.IntegerField(),
        ),
    ]
