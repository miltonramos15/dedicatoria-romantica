document.addEventListener('DOMContentLoaded', function() {
    // Animación de la flor
    const petals = document.querySelectorAll('.petal');
    
    // Añadir animación adicional a los pétalos
    petals.forEach((petal, index) => {
        // Pequeña animación aleatoria para cada pétalo
        setInterval(() => {
            const randomRotate = Math.random() * 3 - 1.5;
            petal.style.transform = `rotate(${randomRotate}deg)`;
        }, 2000 + (index * 300));
    });
    
    // Efecto de brillo para la flor
    const flower = document.getElementById('yellow-flower');
    setInterval(() => {
        flower.style.filter = 'brightness(1.1)';
        setTimeout(() => {
            flower.style.filter = 'brightness(1)';
        }, 500);
    }, 3000);
    
    // Animación del texto
    const messages = document.querySelectorAll('.romantic-text');
    messages.forEach((message, index) => {
        message.style.opacity = '0';
        message.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            message.style.transition = 'all 1.5s ease';
            message.style.opacity = '1';
            message.style.transform = 'translateY(0)';
        }, 1000 + (index * 800));
    });
    
    // Control de música
    const playPauseBtn = document.getElementById('play-pause-btn');
    const audio = document.getElementById('background-music');
    
    playPauseBtn.addEventListener('click', function() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = '⏸️ Pausar Música';
        } else {
            audio.pause();
            playPauseBtn.textContent = '▶️ Reproducir Música';
        }
    });
});