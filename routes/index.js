const express = require('express');
const router = express.Router();

const forecastData = [
    { date: "04/01/2024", day: "Sunday", temperature: 57, description: "Storm", icon: "/images/storm.png" },
    { date: "04/02/2024", day: "Monday", temperature: 62, description: "Cloud", icon: "/images/cloud.png" },
    { date: "04/03/2024", day: "Tuesday", temperature: 60, description: "Sun", icon: "/images/sun.png" },
    { date: "04/04/2024", day: "Wednesday", temperature: 58, description: "Rain", icon: "/images/rain.png" },
    { date: "04/05/2024", day: "Thursday", temperature: 59, description: "Storm", icon: "/images/storm.png" },
    { date: "04/06/2024", day: "Friday", temperature: 61, description: "Sun", icon: "/images/sun.png" },
    { date: "04/07/2024", day: "Saturday", temperature: 63, description: "Cloud", icon: "/images/cloud.png" }
];

const hourlyData = Array.from({ length: 24 }, (_, i) => ({
    hour: `${i.toString().padStart(2, '0')}:00`,
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

module.exports = router;