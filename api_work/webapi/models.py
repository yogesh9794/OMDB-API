from django.db import models

# Create your models here.


class Movie(models.Model):
    Title = models.CharField(max_length=200)
    Year = models.CharField(max_length=25, blank=True)
    Rated = models.CharField(max_length=10, blank=True)
    Released = models.CharField(max_length=25, blank=True)
    Runtime = models.CharField(max_length=25, blank=True)
    Director = models.CharField(max_length=100, blank=True)
    Writer = models.CharField(max_length=300, blank=True)
    Plot = models.CharField(max_length=900, blank=True)
    Language = models.CharField(max_length=300, blank=True)
    Country = models.CharField(max_length=100, blank=True)
    Awards = models.CharField(max_length=250, blank=True)
    Poster = models.ImageField(upload_to='movies', blank=True)
    Poster_url = models.URLField(blank=True)
    Metascore = models.CharField(max_length=5, blank=True)
    imdbRating = models.CharField(max_length=5, blank=True)
    imdbVotes = models.CharField(max_length=100, blank=True)
    imdbID = models.CharField(max_length=100, blank=True)
    Type = models.CharField(max_length=10, blank=True)
    DVD = models.CharField(max_length=25, blank=True)
    BoxOffice = models.CharField(max_length=25, blank=True)
    Production = models.CharField(max_length=100, blank=True)
    Website = models.CharField(max_length=150, blank=True)
    totalSeasons = models.CharField(max_length=3, blank=True)
