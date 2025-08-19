
import os
from flask import Flask, jsonify, render_template, request
import requests
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv('API_KEY')
API_URL = 'https://api.weatherapi.com/v1/current.json'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/weather')
def weather():
    city = request.args.get('city')
    lat = request.args.get('lat')
    lon = request.args.get('lon')

    if city:
        query = city
    elif lat and lon:
        query = f'{lat},{lon}'
    else:
        return jsonify({'error': 'City or latitude and longitude are required'}), 400

    params = {
        'key': API_KEY,
        'q': query
    }
    try:
        response = requests.get(API_URL, params=params)
        response.raise_for_status()  # Raise an exception for bad status codes
        data = response.json()
        return jsonify(data)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
