from django.shortcuts import render
import random
import requests
import json

#bing_key = 'AlQbAewbI0bIGV8Doq5Byi0P--YD5N6hvoUHDMvY5IsjrGtF1_yv8UoDuk5eig2K'
jam, random_pub, lat, lon, name, address, pubaddress = 'blank','blank','blank','blank','blank','blank','blank'
error = 0;

def yelp(request):
     return render(request, 'drinkboiii/drinkboii.html')

def arg_two(request, arg1, arg2):
    lat = '';

    url = 'https://api.yelp.com/v3/businesses/search'
    api_key = 'Fw1un3l-8wRhZNh-UvSZrfr9TmyXmA7RSvG7hN1dt7sXaQ_dwOp8whsLOK7QNLKrMX4-rIoSVjSODm9z2HDN5KPfHZo5kr0HP3m1tZkxOT6c99oJAiPxblBAWumwW3Yx'
    headers = {
        'Authorization': 'Bearer {}'.format(api_key),
    }
    url_params = {'location': arg1,
            'categories': 'bars',
              'limit': '10',
              'price': arg2,
              'open_now': 'True',
              'radius': '800',
              'sort_by': 'rating'}
    try:
        req = requests.get(url, headers=headers, params=url_params)
        response = req.json()
        if (response):
            jam = response['businesses']
            random_pub = random.choice(jam)
            lat = random_pub['coordinates']['latitude']
            lon = random_pub['coordinates']['longitude']
            name = random_pub['name']
            address = arg1
            pubaddress = random_pub['location']['address1']
            error = 0
            pub_info = {'lat': lat, 'lon': lon, 'name': name, 'address': address, 'pubaddress': pubaddress, 'arg2': arg2, 'error': error, 'jam': jam}

            return render (request, 'drinkboiii/arg_test.html', {'pub_info': json.dumps(pub_info)})
    except:
        lat, lon, name, address, pubaddress, arg2, error = '', '', '','','','', True
        pub_info = {'lat': lat, 'lon': lon, 'name': name, 'address': address, 'pubaddress': pubaddress, 'arg2': arg2, 'error': error}
        return render (request, 'drinkboiii/arg_test.html', {'pub_info': json.dumps(pub_info)})

def arg_one(request, arg1):
    jam, random_pub, lat, lon, name, address, pubaddress = 'blank','blank','blank','blank','blank','blank','blank'
    url = 'https://api.yelp.com/v3/businesses/search'
    api_key = 'Fw1un3l-8wRhZNh-UvSZrfr9TmyXmA7RSvG7hN1dt7sXaQ_dwOp8whsLOK7QNLKrMX4-rIoSVjSODm9z2HDN5KPfHZo5kr0HP3m1tZkxOT6c99oJAiPxblBAWumwW3Yx'
    headers = {
        'Authorization': 'Bearer {}'.format(api_key),
    }
    url_params = {'location': arg1,
            'categories': 'bars',
              'limit': '10',
              'price': "1, 2, 3",
              'open_now': 'True',
              'radius': '800',
              'sort_by': 'rating'}
    try:
        req = requests.get(url, headers=headers, params=url_params)
        response = req.json()
        if (response):
            jam = response['businesses']
            random_pub = random.choice(jam)
            lat = random_pub['coordinates']['latitude']
            lon = random_pub['coordinates']['longitude']
            name = random_pub['name']
            address = arg1
            pubaddress = random_pub['location']['address1']
            pub_info = {'lat': lat, 'lon': lon, 'name': name, 'address': address, 'pubaddress': pubaddress, 'jam': jam, 'error': error}

            return render (request, 'drinkboiii/arg_test.html', {'pub_info': json.dumps(pub_info)})
    except:
        jam, random_pub, lat, lon, name, address, pubaddress = 'blank','blank','blank','blank','blank','blank','blank'
        pub_info = {'lat': 'blank', 'lon': lon, 'name': name, 'address': address, 'pubaddress': pubaddress}
        return render (request, 'drinkboiii/arg_test.html', {'pub_info': json.dumps(pub_info)})

##    return render (request, 'drinkboiii/arg_test.html', {'arg_1': arg1, 'arg_2': arg2})