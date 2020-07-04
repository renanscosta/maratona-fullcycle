from django.db import models

class Curso(models.Model):
    """Model representing an author."""
    name = models.CharField(max_length=8000)
    url = models.CharField(max_length=8000)
    

    class Meta:
        ordering = ['name']
    
    def get_absolute_url(self):
        """Returns the url to access a particular author instance."""
        return reverse('curso-datail', args=[str(self.id)])

    def __str__(self):
        """String for representing the Model object."""
        return f'{self.name}'
