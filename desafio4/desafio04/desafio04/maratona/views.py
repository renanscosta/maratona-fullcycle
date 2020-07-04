from django.shortcuts import render
from django.http import HttpResponse
from maratona.models import Curso

def index(request):
    """View function for home page of site."""
        
    # # The 'all()' is implied by default.    
    # num_authors = Curso.objects.count()
    
    # context = {
    #     'num_authors': num_authors,
    # }

    # # Render the HTML template index.html with the data in the context variable
    # return render(request, 'index.html', context=context)
    aulas = Curso.objects.all()
    context = {
        'aulas': aulas,
    }
    return render(request, 'index.html', context=context)




    