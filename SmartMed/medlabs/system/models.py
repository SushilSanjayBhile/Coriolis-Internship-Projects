# Python imports

# Django imports
from django.contrib.auth.models import User
from django.db import models
from django.core.files.storage import FileSystemStorage

# 3rd party imports

# App imports

GENDER_CHOICES = (
    ('Male', 'Male'),
    ('Female', 'Female'),
)
class OverwriteStorage(FileSystemStorage):
    '''
    Photo files to be overwritten on re-upload
    Keep only one photo and one idcard image of employee
    '''
    def _save(self, name, content):
        self.delete(name)
        return super(OverwriteStorage, self)._save(name, content)

    def get_available_name(self, name, max_length):
        return name

def idcard_directory_path(instance, filename):
    '''
    '''
    return 'user_{0}/{1}'.format(instance.name, 'photo.jpg')

class Patient(models.Model):
    '''
    Patient model
    '''
    name = models.CharField(max_length=200)

    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)

    phone = models.IntegerField()
    address = models.TextField(null=True, blank=True)
    photo = models.ImageField(storage=OverwriteStorage(),
        upload_to=idcard_directory_path)
    dob = models.DateField(null=True, blank=True)
    age = models.IntegerField()
    relations = models.CharField(max_length=50, null=True, blank=True)
    aadhar_number = models.CharField(max_length=16, default="0")
    file_no = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return str(self.name)

class MedicalRecord(models.Model):
    '''
    Medical Record per patient
    '''
    timestamp = models.DateTimeField(auto_now_add=True,db_index=True)
    blob = models.FileField(blank=True)
    diagnosis = models.CharField(max_length=256)
    patient = models.ForeignKey('Patient', on_delete=models.CASCADE,)
