from rest_framework import viewsets
from .models import Category, Pecept
from .serializers import CategorySerializer, PeceptSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django_filters.rest_framework import DjangoFilterBackend

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class PeceptViewSet(viewsets.ModelViewSet):
    queryset = Pecept.objects.all()
    serializer_class = PeceptSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category']


@api_view(['GET'])
def dishes_view(request):
    if request.method == 'GET':
        pecepti = Pecept.objects.filter(
            categoryType=request.query_params['category'])
        serializer = PeceptSerializer(pecepti, many=True)
        return Response(serializer.data)
