from django.urls import path
from . import views

urlpatterns=[
    path('', views.indexView, name="home"),
    path('product/<int:id>/<str:name>/', views.ProductPage, name='product' ),
    path('categories/', views.AllCategoryPage, name='allCategories' ),
    path('<str:category>/',views.SingleCategoryPage.as_view(), name='category'),
]
