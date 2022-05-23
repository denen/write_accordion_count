from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_write, name='list_write'),
    path('<str:write_id>', views.detail_write, name='detail_write'),
    path('<str:write_id>/edit', views.edit_write, name='edit_write'),
]