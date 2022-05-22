from django.urls import path
from . import views

urlpatterns = [
    path('', views.list_writes, name='list_writes'),
    path('<int:write_id>', views.detail_write, name='detail_write'),
    path('<int:write_id>/edit', views.edit_write, name='edit_write'),
]