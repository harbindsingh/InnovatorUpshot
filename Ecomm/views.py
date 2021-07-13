from django.shortcuts import render
from django.http import HttpResponse
from .models import *
from django.views.generic import ListView

# Create your views here.
def Index(request):
    newProduct = Product.objects.get(new_product=True)
    primaryFeatures = Feature.objects.filter(product_name=newProduct, primary_feature=True)
    secondaryFeatures = Feature.objects.filter(product_name=newProduct, primary_feature=False)
    allProducts = Product.objects.all()[0:7]
    categories = Product.objects.values_list('category')

    context={'newProduct':newProduct,
        'primaryFeatures':primaryFeatures,
        'secondaryFeatures':secondaryFeatures,
        'allProducts':allProducts,
        'categories': categories       
        }
    return render(request, 'Ecomm/index.html', context)

def ProductPage(request, id, name):
    product = Product.objects.get(id = id, name=name)
    recommended_prods = Product.objects.all().exclude(id=id, name=name)
    features = Feature.objects.filter(product_name=product)
    videos = ProdVideo.objects.filter(product_name=product)
    images = ProdImage.objects.filter(product_name=product)
    categories = Product.objects.values_list('category')

    context = {'product':product,
    'allProducts':recommended_prods,
    'features':features,
    'videos':videos,
    'images':images,
    'categories': categories, 
    }

    return render(request, 'Ecomm/product.html', context)

def AllCategoryPage(request):
    categories = Product.objects.values_list('category')
    category_product={}
    for category in categories:
        category_product[category[0]] = Product.objects.filter(category=category[0])
    print(category_product['Music'])
    context = {
        'category_product': category_product,
        'categories':categories
    }
    return render(request, 'Ecomm/allCategories.html',context)

class SingleCategoryPage(ListView):
    model = Product
    context_object_name = 'Products'
    template_name = 'Ecomm/singleCategory.html'
    
    def get_queryset(self, *args, **kwargs):
        queryset = super().get_queryset(*args, **kwargs)
        queryset = Product.objects.filter(category=self.kwargs['category'])
        return queryset

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)        
        context['category'] = self.kwargs['category']
        categories = Product.objects.values_list('category')
        context['categories'] = categories
        return context