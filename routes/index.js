const express = require('express');
const router = express.Router();

const forecastData = [
    { date: "04/06/2025", day: "Sunday", temperature: 57, description: "Storm", icon: "/images/storm.png" },
    { date: "04/07/2025", day: "Monday", temperature: 62, description: "Cloud", icon: "/images/cloud.png" },
    { date: "04/08/2025", day: "Tuesday", temperature: 60, description: "Sun", icon: "/images/sun.png" },
    { date: "04/09/2025", day: "Wednesday", temperature: 58, description: "Rain", icon: "/images/rain.png" },
    { date: "04/10/2025", day: "Thursday", temperature: 59, description: "Storm", icon: "/images/storm.png" },
    { date: "04/11/2025", day: "Friday", temperature: 61, description: "Sun", icon: "/images/sun.png" },
    { date: "04/12/2025", day: "Saturday", temperature: 63, description: "Cloud", icon: "/images/cloud.png" }
];

// Helper function to convert military time to AM/PM
function formatTimeToAMPM(hour) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const formattedHour = hour % 12 || 12; // Convert 0 to 12 for midnight
    return `${formattedHour}:00 ${period}`;
}

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    hour: formatTimeToAMPM(i),
    temperature: Math.floor(Math.random() * 20) + 50,
    condition: ['clear', 'cloud', 'rain', 'sun'][Math.floor(Math.random() * 4)]
}));

router.get('/', (req, res) => {
    res.render('index', {
        forecast: forecastData,
        currentDate: new Date(),
        theme: req.query.theme,
        currentRoute: '/'
    });
});

router.get('/hourly', (req, res) => {
    res.render('hourly', {
        hourlyForecast: hourlyData,
        theme: req.query.theme,
        currentRoute: '/hourly'
    });
});

router.get('/exit', (req, res) => {
    res.send('Shutting down server...');
    process.exit(0);
});

module.exports = router;