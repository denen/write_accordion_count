from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader
from .models import Write

def list_write(request):
    writes = Write.objects.all()
    context = {
        'title': 'List Writes',
        'writes': writes,
    }
    template = loader.get_template('list_write.html')
    return HttpResponse(template.render(context, request))

def detail_write(request, write_id):
    try:
        write = Write.objects.get(write_id=write_id)
    except Write.DoesNotExist:
        write = None

    context = {
        'title': 'Detail Write',
        'write': write,
    }
    template = loader.get_template('detail_write.html')
    return HttpResponse(template.render(context, request))

def edit_write_input(request, write_id):
    try:
        write = Write.objects.get(write_id=write_id)
    except Write.DoesNotExist:
        write = None

    context = {
        'title': 'Edit Write(input)',
        'mode': 'input',
        'write': write,
    }
    template = loader.get_template('edit_write.html')
    return HttpResponse(template.render(context, request))

def edit_write_confirm(request, write_id):
    write = Write()
    write.write_id = request.POST['write_id']
    write.title = request.POST['title']
    write.sentences= request.POST['sentences']

    context = {
        'title': 'Edit Write(confirm)',
        'mode': 'confirm',
        'warning_message': 'Are you sure you want to save?',
        'write': write,
    }
    template = loader.get_template('edit_Write.html')
    return HttpResponse(template.render(context, request))

def edit_write_result(request, write_id):
    try:
        write = Write.objects.get(write_id=write_id)
        write.write_id = request.POST['write_id']
        write.title = request.POST['title']
        write.sentences= request.POST['sentences']
        write.save()
    except Write.DoesNotExist:
        write = None

    context = {
        'title': 'Edit Write(result)',
        'mode': 'result',
        'success_message': 'Success!',
        'write': write,
    }
    template = loader.get_template('edit_write.html')
    return HttpResponse(template.render(context, request))

def edit_write(request, write_id):
    if request.method == 'GET':
        return edit_write_input(request, write_id)
    elif request.method == 'POST':
        if request.POST['mode'] == 'input':
            return edit_write_confirm(request, write_id)
        if request.POST['mode'] == 'confirm':
            return edit_write_result(request, write_id)