document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ДОЖДЬ (Генерация 100 капель)
    const rainContainer = document.getElementById('rain');
    if (rainContainer) {
        for (let i = 0; i < 100; i++) {
            const drop = document.createElement('div');
            drop.className = 'drop';
            drop.style.left = Math.random() * 100 + 'vw';
            drop.style.animationDuration = (Math.random() * 0.4 + 0.4) + 's';
            drop.style.animationDelay = Math.random() * 2 + 's';
            rainContainer.appendChild(drop);
        }
    }

    // 2. КНОПКА MY INFORMATION (Подсветка ника)
    const infoBtn = document.getElementById('show-info');
const infoBox = document.getElementById('my-info');

if (infoBtn) {
    infoBtn.addEventListener('click', (e) => {
        // Мы НЕ пишем e.preventDefault(), чтобы ссылка сработала!
        
        if (infoBox) {
            infoBox.classList.add('highlight'); // Добавляем вспышку перед уходом
        }
        
        // Больше ничего не делаем, браузер сам перейдет на info.html
    });
}
});

// Логика модального окна (если оно тебе нужно)
const modal = document.getElementById("status-modal");
const span = document.getElementsByClassName("close-modal")[0];

if (span) {
    span.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}