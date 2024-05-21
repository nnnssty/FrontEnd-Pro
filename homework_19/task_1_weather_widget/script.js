document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '19c61eafec88724371753c1bc95af0a4';
    const city = 'London';
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp');
    const weatherDesc = document.getElementById('weather-desc');
    const refreshButton = document.getElementById('refresh-button');

    async function fetchWeather() {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=uk`);
            if (!response.ok) {
                throw new Error('Error fetching weather data');
            }
            const data = await response.json();
            cityName.textContent = data.name;
            temp.textContent = data.main.temp.toFixed(1);
            weatherDesc.textContent = data.weather[0].description;
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    }

    refreshButton.addEventListener('click', fetchWeather);

    fetchWeather();
});
