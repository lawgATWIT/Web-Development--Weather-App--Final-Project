document.addEventListener('DOMContentLoaded', () => {
    const todayCard = document.querySelector('.forecast-card.today');
    if (todayCard) {
        todayCard.addEventListener('click', () => {
            window.location.href = '/hourly';
        });
    }

    const emergencyButton = document.querySelector('.emergency-button');
    if (emergencyButton) {
        emergencyButton.addEventListener('click', () => {
            if (confirm('Are you sure you want to request emergency services?')) {
                alert('Emergency services requested.');
            }
        });
    }

    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    const themeIcon = document.querySelector('.theme-icon');
    themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';

    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
        document.body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    const radarImg = document.querySelector('.radar-image');
    let scale = 1;
    document.querySelector('.zoom-in')?.addEventListener('click', () => {
        scale = Math.min(scale + 0.2, 2);
        radarImg.style.transform = `scale(${scale})`;
    });
    document.querySelector('.zoom-out')?.addEventListener('click', () => {
        scale = Math.max(scale - 0.2, 0.5);
        radarImg.style.transform = `scale(${scale})`;
    });

    const timeElement = document.getElementById('current-time');
    const updateTime = () => {
        timeElement.textContent = new Date().toLocaleString();
    };
    updateTime();
    setInterval(updateTime, 1000);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log('Latitude:', position.coords.latitude);
                console.log('Longitude:', position.coords.longitude);
            },
            (error) => {
                console.error('Geolocation error:', error.message);
            }
        );
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.forecast-card, .hourly-card, .info-card').forEach(el => {
        observer.observe(el);
    });

    const exitButton = document.getElementById('exit-button');
    if (exitButton) {
        exitButton.addEventListener('click', () => {
            window.close();
        });
    }
});