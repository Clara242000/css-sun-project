// script.js

// Funcție pentru a actualiza ora curentă
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    document.getElementById('time').textContent = `Ora curentă: ${hours}:${minutes}`;
}

// Funcție pentru a schimba tema între zi și noapte
function toggleTheme() {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    const stars = document.querySelector('.stars');
    const body = document.body;

    if (body.style.backgroundColor === 'rgb(33, 33, 49)') { // Noapte
        body.style.backgroundColor = '#87CEFA'; // Schimbă fundalul la zi
        sun.style.display = 'none'; // Ascunde soarele
        moon.style.display = 'none'; // Ascunde luna
        stars.style.display = 'none'; // Ascunde stelele
    } else {
        body.style.backgroundColor = '#212131'; // Schimbă fundalul la noapte
        sun.style.display = 'block'; // Afișează soarele
        moon.style.display = 'block'; // Afișează luna
        stars.style.display = 'block'; // Afișează stelele
    }
}

// Actualizează ora la încărcare pagină și la fiecare minut
updateTime();
setInterval(updateTime, 60000);
