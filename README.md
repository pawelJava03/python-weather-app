
# Weather App

A simple and beautiful web application that displays the current weather for your location or a specified city.

## Features

*   **Automatic Geolocation:** Automatically fetches and displays the weather for your current location on page load.
*   **City Search:** Manually search for the weather in any city worldwide.
*   **Modern UI:** A clean, modern, and responsive user interface.
*   **Dynamic Icons:** Weather conditions are represented with dynamic icons.

## Installation

Follow these steps to set up the project locally:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/open-weather.git
    cd open-weather
    ```

2.  **Install dependencies:**
    Make sure you have Python 3 installed. Then, install the required packages using pip:
    ```bash
    pip install -r requirements.txt
    ```

## Configuration

This application requires an API key from [weatherapi.com](https://www.weatherapi.com/) to fetch weather data.

1.  **Get your API Key:**
    *   Go to [weatherapi.com](https://www.weatherapi.com/) and sign up for a free account.
    *   You will find your API key in your dashboard.

2.  **Set up the `.env` file:**
    *   In the root directory of the project, create a file named `.env`.
    *   Add your API key to the `.env` file as follows:
        ```
        API_KEY='YOUR_API_KEY'
        ```
    Replace `'YOUR_API_KEY'` with the API key you obtained from weatherapi.com.

## Usage

To run the application, execute the following command in the project's root directory:

```bash
python app.py
```

This will start a local development server. Open your web browser and navigate to:

[http://127.0.0.1:5000](http://127.0.0.1:5000)

The application will ask for your location to display the local weather. You can also use the search bar to find the weather for a different city.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.
