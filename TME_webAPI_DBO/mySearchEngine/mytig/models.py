from django.db import models

class ProduitEnPromotion(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    tigID = models.IntegerField(default=-1)

    class Meta:
        ordering = ('tigID',)

    def __str__(self):
        return f"Produit en Promotion {self.tigID}"

class AvailableProduct(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    tigID = models.IntegerField(default=-1)

    class Meta:
        ordering = ('tigID',)

    def __str__(self):
        return f"Produit Disponible {self.tigID}"

class InfoProduct(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    tig_id = models.IntegerField(default=-1)
    name = models.CharField(max_length=100, blank=True, default='')
    category = models.IntegerField(default=-1)
    price = models.FloatField(default=0)
    unit = models.CharField(max_length=20, blank=True, default='')
    availability = models.BooleanField(default=True)
    sale = models.BooleanField(default=False)
    discount = models.FloatField(default=0)
    comments = models.CharField(max_length=100, blank=True, default='')
    owner = models.CharField(max_length=20, blank=True, default='tig_orig')
    quantityInStock = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ('name',)

    def __str__(self):
        return f"{self.name} (ID: {self.tig_id})"

class Sale(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(InfoProduct, on_delete=models.CASCADE, related_name='sales')
    quantity = models.PositiveIntegerField(default=1)
    price = models.FloatField(default=0)

    def __str__(self):
        return f"Vente de {self.product.name} (ID: {self.product.tig_id})"

class Invoice(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    amount = models.FloatField(default=0)

    def __str__(self):
        return f"Facture #{self.id}"

class Lot(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    info_product = models.ForeignKey(InfoProduct, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=0)
    invoice = models.ForeignKey(Invoice, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Lot de {self.info_product.name} (ID: {self.info_product.tig_id})"
