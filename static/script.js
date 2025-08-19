
document.addEventListener('DOMContentLoaded', () => {
    const weatherInfo = document.getElementById('weather-info');
    const cityInput = document.getElementById('city-input');
    const searchIcon = document.getElementById('search-icon');

    const updateWeatherInfo = (data) => {
        if (data.error) {
            weatherInfo.innerHTML = `<p>Error: ${data.error.message || data.error}</p>`;
        } else {
            const location = data.location;
            const current = data.current;
            weatherInfo.innerHTML = `
                <h2>${location.name}, ${location.region}</h2>
                <img src="https:${current.condition.icon}" alt="${current.condition.text}">
                <p>${current.condition.text}</p>
                <p>Temperature: ${current.temp_c}°C</p>
                <p>Feels like: ${current.feelslike_c}°C</p>
                <p>Humidity: ${current.humidity}%</p>
                <p>Wind: ${current.wind_kph} kph</p>
            `;
        }
    };

    const fetchWeather = (url) => {
        fetch(url)
            .then(response => response.json())
            .then(data => updateWeatherInfo(data))
            .catch(error => {
                weatherInfo.innerHTML = `<p>Error fetching weather data.</p>`;
            });
    };

    const performSearch = () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(`/weather?city=${city}`);
        }
    };

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(`/weather?lat=${lat}&lon=${lon}`);
        }, () => {
            weatherInfo.innerHTML = '<p>Unable to retrieve your location.</p>';
        });
    } else {
        weatherInfo.innerHTML = '<p>Geolocation is not supported by your browser.</p>';
    }

    searchIcon.addEventListener('click', performSearch);

    cityInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
});
