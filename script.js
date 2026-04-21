const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width, height, flakes;

function initSnow() {
    const dpr = window.devicePixelRatio || 1;
    
    width = window.innerWidth;
    height = window.innerHeight;
    
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    
    ctx.scale(dpr, dpr);

    flakes = [];
    const count = Math.floor(width / 5); 
    
    for (let i = 0; i < count; i++) {
        flakes.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5 + 0.5,
            speed: Math.random() * 1 + 0.5,
            opacity: Math.random() * 0.5 + 0.2,
            swing: Math.random() * Math.PI * 2
        });
    }
}

function updateSnow() {
    ctx.clearRect(0, 0, width, height);
    
    flakes.forEach(flake => {
        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fill();

        flake.y += flake.speed;
        flake.swing += 0.02;
        flake.x += Math.sin(flake.swing) * 0.5;
        
        if (flake.y > height) {
            flake.y = -5;
            flake.x = Math.random() * width;
        }
        
        if (flake.x > width) flake.x = 0;
        if (flake.x < 0) flake.x = width;
    });
    
    requestAnimationFrame(updateSnow);
}

window.addEventListener('resize', initSnow);

initSnow();
updateSnow();

// Виброотклик
document.querySelectorAll('.btn-link').forEach(btn => {
    btn.addEventListener('click', () => {
        if (window.navigator && window.navigator.vibrate) {
            window.navigator.vibrate(10);
        }
    });
});