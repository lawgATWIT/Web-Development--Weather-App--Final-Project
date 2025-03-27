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

    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    const body = document.body;
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark');
        body.classList.toggle('light');
        const newTheme = body.classList.contains('dark') ? 'dark' : 'light';
        themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        window.location.href = `${window.location.pathname}?theme=${newTheme}`;
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
});