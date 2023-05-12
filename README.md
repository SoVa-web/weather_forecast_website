# Sova Forecast API
You can use GET request for getting weather forecast 
on one day and one week by follow link: 

https://weathersovaappp.herokuapp.com/weather


You should send parameters as query string.

In this weather API are using only one type parametrs: name city.

Example: https://weathersovaappp.herokuapp.com/weather?city=London

And by this request you wiil get next info in format JSON:

{
    "city": "",
    "weather_today": {
        "03:00:00": {
            "img": "moon_cloudy",
            "air_temp": "21.1 °C",
            "speed_wind": "0.9 m/s",
            "humidity": "66.4 %",
            "prob": ""
        },
        "06:00:00": {
            "img": "cloudy",
            "air_temp": "19.9 °C",
            "speed_wind": "1.9 m/s",
            "humidity": "88.8 %",
            "prob": ""
        },
        "09:00:00": {
            "img": "cloudy",
            "air_temp": "23.8 °C",
            "speed_wind": "3.5 m/s",
            "humidity": "70.4 %",
            "prob": ""
        },
        "12:00:00": {
            "img": "rain",
            "air_temp": "27.2 °C",
            "speed_wind": "3.6 m/s",
            "humidity": "51.4 %",
            "prob": ""
        },
        "15:00:00": {
            "img": "rain",
            "air_temp": "28.0 °C",
            "speed_wind": "3.9 m/s",
            "humidity": "45.4 %",
            "prob": ""
        },
        "18:00:00": {
            "img": "rain",
            "air_temp": "28.1 °C",
            "speed_wind": "3.8 m/s",
            "humidity": "39.9 %",
            "prob": ""
        },
        "21:00:00": {
            "img": "rain",
            "air_temp": "25.4 °C",
            "speed_wind": "1.5 m/s",
            "humidity": "40.2 %",
            "prob": ""
        },
        "00:00:00": {
            "img": "moon_cloudy",
            "air_temp": "24.0 °C",
            "speed_wind": "0.7 m/s",
            "humidity": "46.7 %",
            "prob": ""
        },
        "today_advice": "It's a nice day! It's time for big things to do!"
    },
    "weather_week": {
        "first_day": {
            "data": "06.12",
            "img": "clear",
            "air_temp": "24.4 °C",
            "speed_wind": "3.2 m/s",
            "humidity": "56.8 %",
            "prob": "60.0 %"
        },
        "second_day": {
            "data": "06.13",
            "img": "cloudy",
            "air_temp": "23.9 °C",
            "speed_wind": "2.7 m/s",
            "humidity": "47.8 %",
            "prob": "2.4 %"
        },
        "three_day": {
            "data": "06.14",
            "img": "cloudy",
            "air_temp": "20.7 °C",
            "speed_wind": "4.3 m/s",
            "humidity": "51.5 %",
            "prob": "19.4 %"
        },
        "four_day": {
            "data": "06.15",
            "img": "cloudy",
            "air_temp": "18.0 °C",
            "speed_wind": "3.3 m/s",
            "humidity": "47.8 %",
            "prob": "2.4 %"
        },
        "five_day": {
            "data": "06.16",
            "img": "cloudy",
            "air_temp": "19.4 °C",
            "speed_wind": "2.4 m/s",
            "humidity": "46.9 %",
            "prob": "4.8 %"
        },
        "six_day": {
            "data": "06.17",
            "img": "cloudy",
            "air_temp": "19.6 °C",
            "speed_wind": "3.4 m/s",
            "humidity": "55.9 %",
            "prob": "26.6 %"
        },
        "seven_day": {
            "data": "06.18",
            "img": "cloudy",
            "air_temp": "18.6 °C",
            "speed_wind": "3.8 m/s",
            "humidity": "64.7 %",
            "prob": "19.3 %"
        }
    }
}
# weather_forecast_website
Weather forecast website by aggregating Hydrometeorological Center data

Page: https://frontendweathersova.herokuapp.com


The APIs of these sites are used to extract and aggregate data:
- https://weather.visualcrossing.com (for day and for week forecast weather)
- http://api.weatherapi.com (for day forecast)
- https://api.weatherbit.io



Author of weather pack icons: https://www.flaticon.com/ru/authors/linector , https://www.flaticon.com/ru/packs/weather-forecast
https://www.freepik.com
