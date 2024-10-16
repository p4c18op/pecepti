from rest_framework import serializers
from .models import Category, Pecept


class PeceptSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pecept
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
    pecepti = PeceptSerializer(many=True, read_only=True)

    class Meta:
        model = Category
        fields = '__all__'
