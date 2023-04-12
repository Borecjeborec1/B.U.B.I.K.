import { myImage } from "./image.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const gradient1 = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
gradient1.addColorStop(0.4, '#40e0d0');
gradient1.addColorStop(0.6, '#33b3a6');
gradient1.addColorStop(0.5, '#39c9bb');

let particlesArray = [];
let numberOfParticles = 1000;
let mappedImage = [];
let circleArray = [];

let circleSize = 120
let circleMax = 160

class Particle {
  constructor() {
    this.minX = 200
    this.maxX = canvas.width - this.minX
    this.minY = 200
    this.maxY = canvas.height - this.minY
    this.x = Math.random() * this.maxX + this.minX;
    this.y = Math.random() * this.maxY + this.minY;
    this.speed = 0;
    this.velocity = Math.random();
    this.size = Math.random() + 0.2;
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    this.color = gradient1
  }
  update() {
    this.position1 = Math.floor(this.y);
    this.position2 = Math.floor(this.x);
    if (mappedImage[this.position1][this.position2]) {
      this.speed = mappedImage[this.position1][this.position2][0];
      this.color = mappedImage[this.position1][this.position2][1]; // Colored pixels
    }
    let du = -2.5;

    let movement = du - this.speed + this.velocity;
    this.size = this.speed * 0.5;

    this.y -= movement;
    this.x += movement;
    if (this.y > this.maxY) {
      this.y = this.minY;
      this.x = Math.random() * this.maxX + this.minX;
    }
    if (this.x < this.minX) {
      this.x = canvas.width - this.minX;
      this.y = Math.random() * this.maxY + this.minY;
    }
    if (this.y < this.minY) {
      this.y = canvas.height - this.minY;
      this.x = Math.random() * this.maxX + this.minX;
    }
    if (this.x > this.maxX) {
      this.x = this.minX;
      this.y = Math.random() * this.maxY + this.minY;
    }
  }
  draw() {
    ctx.beginPath();

    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

class Circle {
  constructor(size) {
    this.baseSize = size;
    this.size = size;
    this.opacity = 0.02;
  }
  draw() {
    ctx.beginPath();
    ctx.globalAlpha = this.opacity;
    ctx.arc(canvas.width / 2, canvas.height / 2, this.size, 0, 2 * Math.PI);
    ctx.strokeStyle = '#009ACD';
    ctx.lineWidth = 5;
    ctx.stroke();
  }
  update() {
    this.size++;
    this.size <= circleMax && this.opacity >= 0
      ? (this.opacity -= 0.0005)
      : (this.opacity = 0);
  }
}

function calculateRelativeBrightness(red, green, blue) {
  return Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) / 100;
}

function handleText(opac) {
  ctx.globalAlpha = opac;
  ctx.font = "60px 'Syncopate'";
  ctx.fillStyle = '#00c5cd';
  ctx.textAlign = 'center';
  ctx.shadowBlur = 4;
  ctx.shadowColor = 'rgba(0,0,0,0.3)';
  ctx.fillText('B.U.B.I.K.', canvas.width / 2, canvas.height / 2);
}

function initCanvas() {
  console.log("init")
  ctx.drawImage(myImage, 0, 0, canvas.width, canvas.height);
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let y = 0; y < canvas.height; y++) {
    let row = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      row.push([brightness, 'rgb(' + red + ',' + green + ',' + blue + ')']);
    }
    mappedImage.push(row);
  }

  for (let i = 0; i < numberOfParticles; i++) {
    particlesArray.push(new Particle());
  }
  animate();
}

function animate() {
  if (artyom.isSpeaking()) {
    circleArray.push(new Circle(circleSize + Math.random() * 40));
  }
  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
    circleArray[i].draw();
    if (circleArray[i].size >= circleMax * Math.random() * 10) {
      circleArray.splice(i, 1);
    }
  }
  handleText(0.03);
  ctx.globalAlpha = 0.05;
  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 0.2;
  for (let i = 0; i < particlesArray.length; i++) {
    particlesArray[i].update();
    ctx.globalAlpha = particlesArray[i].speed * 0.3;
    particlesArray[i].draw();
  }
  requestAnimationFrame(animate);
}



myImage.onload = () => {
  setTimeout(initCanvas, 500)
}
