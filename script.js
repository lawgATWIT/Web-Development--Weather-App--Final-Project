const currentWeekDates = [
    "04/01/2024", // Sunday
    "04/02/2024", // Monday
    "04/03/2024", // Tuesday
    "04/04/2024", // Wednesday
    "04/05/2024", // Thursday
    "04/06/2024", // Friday
    "04/07/2024"  // Saturday
];

const forecast = [
    { date: currentWeekDates[0], day: "Sunday", temperature: 57, description: "Stormy", icon: "icons/storm.png" },
    { date: currentWeekDates[1], day: "Monday", temperature: 62, description: "Partly cloudy", icon: "icons/cloud.png" },
    { date: currentWeekDates[2], day: "Tuesday", temperature: 60, description: "Sunny", icon: "icons/sun.png" },
    { date: currentWeekDates[3], day: "Wednesday", temperature: 58, description: "Rainy", icon: "icons/rain.png" },
    { date: currentWeekDates[4], day: "Thursday", temperature: 59, description: "Stormy", icon: "icons/storm.png" },
    { date: currentWeekDates[5], day: "Friday", temperature: 61, description: "Sunny", icon: "icons/sun.png" },
    { date: currentWeekDates[6], day: "Saturday", temperature: 63, description: "Partly cloudy", icon: "icons/cloud.png" }
];

const currentDate = new Date(); // Current date
const outlineDayOfWeek = currentDate.getDay(); // Current day
const forecastElement = document.getElementById("forecast");

// Render the forecast
forecastElement.innerHTML = forecast.map(day => `
    <div class="forecast-card${day.date === currentWeekDates[outlineDayOfWeek] ? ' today' : ''}" data-date="${day.date}">
        <div>${day.date}</div>
        <div>${day.day}</div>
        <div>${day.temperature}&deg;F</div>
        <div>${day.description}</div>
        <img src="${day.icon}" class="weather-icon" alt="Weather Icon">
    </div>
`).join('');

const outlinedDay = document.querySelector('.forecast-card.today');
outlinedDay.addEventListener('click', () => {
    window.location.href = 'hourly_forecast.html'; // Redirect to hourly forecast page
});

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        // Do something with the geolocation data
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
    }, (error) => {
        console.error('Geolocation error:', error.message);
    });
} else {
    console.error('Geolocation is not supported by this browser.');
}

const emergencyButton = document.querySelector('.emergency-button');
emergencyButton.addEventListener('click', () => {
    const confirmation = confirm("Are you sure you want to request emergency services?");
    if (confirmation) {
        alert('Emergency services requested.');
    }
});
