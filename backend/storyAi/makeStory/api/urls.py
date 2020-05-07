from django.urls import path
from makeStory.api.views import ArticleTest
from rest_framework.routers import DefaultRouter

from .views import ArticleTest
from makeStory import views

router = DefaultRouter()
router.register(r'', ArticleTest)
urlpatterns = router.urls

"""
urlpatterns = [
    path('', ArticleTest.as_view({'get': 'list'})),
    path('story', views.testView)
]
"""