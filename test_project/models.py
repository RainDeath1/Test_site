from django.db import models

class ResourceLinks(models.Model):
    name = models.CharField(max_length=100, verbose_name="Название ресурса")
    url = models.URLField(verbose_name="Ссылка")
    description = models.TextField(verbose_name="Описание", blank=True, null=True)

    def __str__(self):
        return self.name
