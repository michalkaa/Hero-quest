
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = 'white';
ctx.font = '30px fantasy';
ctx.fillText("Hjalmar's Quest Begins...", 100, 100);
