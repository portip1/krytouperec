document.addEventListener("DOMContentLoaded", () => {
    // 1. Добавляем больше капель программно
    const rainContainer = document.querySelector('.rain');
    for (let i = 0; i < 100; i++) {
        const drop = document.createElement('div');
        drop.className = 'drop';
        drop.style.left = Math.random() * 100 + 'vw';
        drop.style.animationDuration = (Math.random() * 0.4 + 0.3) + 's';
        drop.style.animationDelay = Math.random() * 2 + 's';
        rainContainer.appendChild(drop);
    }

    // 2. Логика красной змейки
    const dots = [];
    const mouse = { x: 0, y: 0 };
    const dotsCount = 12;

    for (let i = 0; i < dotsCount; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-dot';
        document.body.appendChild(dot);
        dots.push({ el: dot, x: 0, y: 0 });
    }

    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    function animate() {
        let x = mouse.x;
        let y = mouse.y;

        dots.forEach((dot, index) => {
            dot.x += (x - dot.x) * 0.3;
            dot.y += (y - dot.y) * 0.3;
            const size = (dotsCount - index) / dotsCount;
            dot.el.style.transform = `translate(${dot.x}px, ${dot.y}px) scale(${size})`;
            dot.el.style.opacity = size;
            x = dot.x;
            y = dot.y;
        });
        requestAnimationFrame(animate);
    }
    animate();
});