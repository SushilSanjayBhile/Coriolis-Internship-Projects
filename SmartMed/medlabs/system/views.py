
# Python imports

# Django imports

# 3rd party imports
from rest_framework import viewsets, filters, permissions

# App imports
from .models import Patient, MedicalRecord
from .serializers import PatientSerializer, MedicalRecordSerializer
from django.views.decorators.csrf import csrf_exempt

from django.http import HttpResponse
from django.template import Context, loader
from django.views.decorators.csrf import csrf_exempt                                          

@csrf_exempt
def index(request):
    template = loader.get_template("index.html")
    return HttpResponse(template.render())

class PatientViewSet(viewsets.ModelViewSet):
    '''
    For Patient related CRUD operations
    '''
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer
    search_fields = ('name',)
    filter_backends = (filters.SearchFilter,)


class AllRecordViewSet(viewsets.ModelViewSet):
    '''
    For Patient's visits related CRUD operations
    '''
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer
    search_fields = ('name',)
    filter_backends = (filters.SearchFilter,)



class SpecificRecordViewSet(viewsets.ModelViewSet):
    '''
    For Specific Patient related CRUD operations
    '''
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    queryset = MedicalRecord.objects.all()
    serializer_class = MedicalRecordSerializer
    #search_fields = ('name',)
    filter_backends = (filters.SearchFilter,)

    def get_queryset(self):
        userid = self.kwargs['id']
        return MedicalRecord.objects.filter(patient=userid)
