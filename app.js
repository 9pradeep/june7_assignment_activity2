$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    var x = canvas.width;
    var apiKey = "127f07d9ab28af26ce50b9fd1460d02b";
    var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Toronto,ca&units=metric&appid=" + apiKey;
    var weatherInfo = ""; // Initialize an empty string for weather information

    setInterval(function() {
        $.ajax({
            url: apiUrl,
            type: "GET",
            success: function(data) {
                weatherInfo = "Temperature: " + data.main.temp + "°C, Humidity: " + data.main.humidity + "%";
            },
            error: function(error) {
                console.log(error);
            }
        });
    }, 2000);

    function animate() {
        x--;
        if (x < -canvas.width) {
            x = canvas.width;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "20px Arial";
        ctx.fillText(weatherInfo, x, 50);
        requestAnimationFrame(animate);
    }
    animate();
});
