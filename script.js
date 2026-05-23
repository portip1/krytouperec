document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('bgMusic');
    const playBtn = document.getElementById('playBtn');
    const playerContainer = document.getElementById('player');
    const fill = document.querySelector('.progress-fill');
    const currentTimeEl = document.querySelector('.current-time');
    const totalTimeEl = document.querySelector('.total-time');
    const volumeBtn = document.getElementById('volumeBtn');

    // Переменные для модального окна
    const friendsBtn = document.querySelector('.friends-btn');
    const friendsModal = document.getElementById('friendsModal');
    const closeModalBtn = document.getElementById('closeModalBtn');

    let isMuted = false;

    // Кнопка Play/Pause
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play().catch(err => console.log("Браузер требует клика на страницу перед запуском"));
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playerContainer.classList.add('playing');
        } else {
            audio.pause();
            playBtn.innerHTML = '<i class="fas fa-play"></i>';
            playerContainer.classList.remove('playing');
        }
    });

    // Таймлайн трека
    audio.addEventListener('timeupdate', () => {
        const current = audio.currentTime;
        const duration = audio.duration && !isNaN(audio.duration) ? audio.duration : 109; 
        
        const pct = (current / duration) * 100;
        fill.style.width = `${pct}%`;

        currentTimeEl.textContent = formatTime(current);
        totalTimeEl.textContent = formatTime(duration);
    });

    // Кнопка Mute в верхнем углу
    volumeBtn.addEventListener('click', () => {
        isMuted = !isMuted;
        audio.muted = isMuted;
        volumeBtn.innerHTML = isMuted ? '<i class="fas fa-volume-mute"></i>' : '<i class="fas fa-volume-up"></i>';
    });

    // --- ЛОГИКА ОКНА FRIENDS ---
    
    // Открытие окна
    friendsBtn.addEventListener('click', (e) => {
        e.preventDefault(); // Запрещаем переход по ссылке #
        friendsModal.classList.add('active');
        friendsModal.setAttribute('aria-hidden', 'false');
    });

    // Закрытие на крестик
    closeModalBtn.addEventListener('click', () => {
        friendsModal.classList.remove('active');
        friendsModal.setAttribute('aria-hidden', 'true');
    });

    // Закрытие при клике на темную область вокруг окна
    friendsModal.addEventListener('click', (e) => {
        if (e.target === friendsModal) {
            friendsModal.classList.remove('active');
            friendsModal.setAttribute('aria-hidden', 'true');
        }
    });

    // Форматирование времени
    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60).toString().padStart(2, '0');
        return `${mins}:${secs}`;
    }
});