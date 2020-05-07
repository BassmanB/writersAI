from rest_framework import viewsets
from makeStory.models import Article
from .serializers import ArticleSerializer
from makeStory import views
from rest_framework.decorators import action
from rest_framework.response import Response

class ArticleTest(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    #def create(self,request):
        #print("hwdp")
     #   pass

    def create(self, request):

        data = request.data
        data2 = "piec"
        story = views.WriterAnswer.create_story(data)
        return Response({'story':story})
    
    def list(self, request):

        return Response({'Tobi':'super pies'})

    @action(detail=True, methods=['post','get'], name="great")
    def great_story(self, request, pk=None):
        return Response({'jebac': 'policje'})
