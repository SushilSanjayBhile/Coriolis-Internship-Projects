# -*- coding: utf-8 -*-
# Generated by Django 1.11.13 on 2018-06-12 09:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('system', '0006_auto_20180612_0954'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patient',
            name='gender',
            field=models.CharField(choices=[(b'Male', b'Male'), (b'Female', b'Female')], max_length=1),
        ),
    ]
