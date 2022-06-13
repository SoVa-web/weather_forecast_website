const html = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <title>API Documentation</title>
</head>

<body>
    <header
        style="height: auto; background-color: orange; padding-top: 20px; padding-bottom: 20px; padding-left: 10px;">
        <div>
            <section id="logotype">
                <div id="left" style="width: calc(calc(100%/2) - 25px);
                    height: 3px;
                     background-color: black">
                </div>
                <div>
                     <h1 id="leftName" 
                    style="z-index: 2;
                       font-size: 25px;
                       font-family: Verdana, Geneva, Tahoma, sans-serif;
                       ">Sova Forecast API Documentation</h1>
                </div>
               
                <div id="right" 
                    style="width: calc(calc(100%/2) - 25px);
                    height: 3px;
                     background-color: black;">
                </div>
            </section>
        </div>
    </header>
    <main id="base">
        <div id="devide1" style="width: 100%;
            height: 5px; margin-top: 35px;
            background-color: black;"></div>

        <section id="describe">
            <div id="headline">
                <h3 style="font-size: 25px;">
                    Web service browser client:
                </h3>
            </div>
            <div id="about" style="font-size: 14px;">
                <a href="https://frontendweathersova.herokuapp.com">
                    frontendweathersova.herokuapp.com
                </a>
            </div>
        </section>

        <div id="devide2" style="width: 100%;
            height: 5px;
            margin-top: 10px;
            background-color: black;"></div>
        <div id="devide3"></div>
        <section id="describe">
            <div id="headline">
                <h3 style="font-size: 25px;">
                    How you can use this API?
                </h3>
            </div>
            <div id="headline">
                <p style="font-size: 18px;">
                    You can use GET request for getting weather forecast on one day and one week by follow link:
                </p>
            </div>
            <div id="about" style="font-size: 14px; color: blue;">
                weathersovaappp.herokuapp.com/weather
            </div>

            <p style="font-size: 18px;">
                You should send parameters as query string.
            </p>
            <p style="font-size: 18px;">
                In this weather API are using only one type parametrs: name city.
            </p>
            <p style="font-size: 18px;">
                Example: 
            </p>
            <p style="font-size: 14px; color: blue;">
                <a href="https://weathersovaappp.herokuapp.com/weather?city=London">
                    weathersovaappp.herokuapp.com/weather?city=London
                </a>
            </p>

            <p style="font-size: 18px;">
                And by this request you will get next info in format JSON:
            </p>

            <p style="font-size: 18px;">
                { "city": "", "weather_today": { "03:00:00": { "img": "moon_cloudy", "air_temp": "21.1 °C",
                "speed_wind": "0.9 m/s", "humidity": "66.4 %", "prob": "" }, "06:00:00": { "img": "cloudy", "air_temp":
                "19.9 °C", "speed_wind": "1.9 m/s", "humidity": "88.8 %", "prob": "" }, "09:00:00": { "img": "cloudy",
                "air_temp": "23.8 °C", "speed_wind": "3.5 m/s", "humidity": "70.4 %", "prob": "" }, "12:00:00": { "img":
                "rain", "air_temp": "27.2 °C", "speed_wind": "3.6 m/s", "humidity": "51.4 %", "prob": "" }, "15:00:00":
                { "img": "rain", "air_temp": "28.0 °C", "speed_wind": "3.9 m/s", "humidity": "45.4 %", "prob": "" },
                "18:00:00": { "img": "rain", "air_temp": "28.1 °C", "speed_wind": "3.8 m/s", "humidity": "39.9 %",
                "prob": "" }, "21:00:00": { "img": "rain", "air_temp": "25.4 °C", "speed_wind": "1.5 m/s", "humidity":
                "40.2 %", "prob": "" }, "00:00:00": { "img": "moon_cloudy", "air_temp": "24.0 °C", "speed_wind": "0.7
                m/s", "humidity": "46.7 %", "prob": "" }, "today_advice": "It's a nice day! It's time for big things to
                do!" }, "weather_week": { "first_day": { "data": "06.12", "img": "clear", "air_temp": "24.4 °C",
                "speed_wind": "3.2 m/s", "humidity": "56.8 %", "prob": "60.0 %" }, "second_day": { "data": "06.13",
                "img": "cloudy", "air_temp": "23.9 °C", "speed_wind": "2.7 m/s", "humidity": "47.8 %", "prob": "2.4 %"
                }, "three_day": { "data": "06.14", "img": "cloudy", "air_temp": "20.7 °C", "speed_wind": "4.3 m/s",
                "humidity": "51.5 %", "prob": "19.4 %" }, "four_day": { "data": "06.15", "img": "cloudy", "air_temp":
                "18.0 °C", "speed_wind": "3.3 m/s", "humidity": "47.8 %", "prob": "2.4 %" }, "five_day": { "data":
                "06.16", "img": "cloudy", "air_temp": "19.4 °C", "speed_wind": "2.4 m/s", "humidity": "46.9 %", "prob":
                "4.8 %" }, "six_day": { "data": "06.17", "img": "cloudy", "air_temp": "19.6 °C", "speed_wind": "3.4
                m/s", "humidity": "55.9 %", "prob": "26.6 %" }, "seven_day": { "data": "06.18", "img": "cloudy",
                "air_temp": "18.6 °C", "speed_wind": "3.8 m/s", "humidity": "64.7 %", "prob": "19.3 %" } } }
            </p>


        </section>

        <div id="devide3" style="width: 100%;
                height: 5px;
                margin-top: 10px;
                background-color: black;"></div>
        <div id="devide3"></div>
    </main>

    <footer style="background-color: orange; padding-top: 25px; ">
        <p style="margin-left: 5%;
                font-size: 20px"> Created by:
        <p>
        <div id="ref" style="text-align: center">
            <form action="https://www.linkedin.com/in/olga-suprun-816886195/" target="_blank"><button
                    style="background: none; border: none; touch-action: none;"> <img
                        src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Bug.svg.original.svg"
                        alt="linkedin" style="width: 50px; height: 50px;"></button></form>
        </div>
        <div id="email" style="text-align: center;
                align-items: center;
                margin-left: 20%;
                margin-right: 20%;
                ">
            <p style="font-size: 20px;">oolga200000001@ukr.net</p>
        <div>
                <a href="https://www.freepnglogos.com/pics/email" title="Image from freepnglogos.com"><img
                        src="https://www.freepnglogos.com/uploads/email-png/blue-email-box-circle-png-transparent-icon-2.png"
                        style="width: 50px; height: 50px;" alt="blue email box circle png transparent icon" /></a>
            </div>
        </div>
        </div>

    </footer>
</body>

</html>
`
export default html;