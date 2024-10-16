
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import CategoryViewSet, PeceptViewSet

router = DefaultRouter()
router.register(r'categories', CategoryViewSet)
router.register(r'pecepti', PeceptiViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
