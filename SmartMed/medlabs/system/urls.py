from django.conf.urls import url,include
from . import views
from .views import PatientViewSet, SpecificRecordViewSet, AllRecordViewSet, index

from rest_framework import routers

router = routers.SimpleRouter()
router.register(r'clinic/patients', PatientViewSet)
router.register(r'clinic/visits', AllRecordViewSet)
router.register(r'clinic/patients/(?P<id>.+)/visits', SpecificRecordViewSet, base_name='SpecificRecordViewSet')
urlpatterns = router.urls

urlpatterns += [ 
        url('^$', index, name='index')
        ]
