const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Hero setup
const hero = {
    x: 100,
    y: 100,
    width: 40,
    height: 40,
    color: '#fff',
    speed: 5
};

const keys = {};

// Handle key presses
document.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

document.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

// Update hero position
function update() {
    if (keys['ArrowUp']) hero.y -= hero.speed;
    if (keys['ArrowDown']) hero.y += hero.speed;
    if (keys['ArrowLeft']) hero.x -= hero.speed;
    if (keys['ArrowRight']) hero.x += hero.speed;
}

// Draw everything
function draw() {
    ctx.fillStyle = '#1c1b2f'; // background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = hero.color;
    ctx.fillRect(hero.x, hero.y, hero.width, hero.height);

    ctx.font = '28px fantasy';
    ctx.fillStyle = 'white';
    ctx.fillText("Hjalmar's Quest Begins...", 50, 50);
}

// Game loop
function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();
