
from django.db import models

class Write(models.Model):
    write_id = models.CharField(max_length=32)
    title = models.CharField(max_length=256)
    sentences = models.TextField()

    def __str__(self):
        return self.title