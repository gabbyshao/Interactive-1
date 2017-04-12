function setup()
{createCanvas(500,80);

}
function random(min, max) {
  return min + Math.random() * (max - min);
}

function randomDist(min, max, iterations) {
  let total = 0;

  for (let i = iterations - 1; i >= 0; i--) {
    total += random(min, max);
  }

  return total / iterations;
}

function loop(val, min, max) {
  const p = max - min + 1;
  let mod = (val - min) % p;

  if (mod < 0) {
    mod += p;
  }

  return min + mod;
}

function initPi(p) {
  const s = p.style;
  s.top = randomDist(-200, 200, 3) + '%';
  s.left = randomDist(-500, 700, 4) + '%';
  s.color = color();
}

let color = (() => {
  const colors = ['#f00', // Red
      '#800000', // Dark red
      '#c0c0c0', // Light gray
      '#808080', // Dark gray
      '#DCED31', // Grass Green
      '#FAFF81', // Grass Yellow Green
      '#474A2C', // Olive
      '#B4E7CE', // Mint
      '#832161', // Dark magenta
      '#BA5624', // Yellow Brown
      '#FFA552', // Light Yellow Brown
      '#F3A712', // Light Yellow Brown   2
      '#FB9F89', // Pink
      '#EF2D56', // Hot Pink
      '#FB5012', // Orange

      '#17BEBB', // Till
      '#FDFFFC', // Ivory
      '#000080', // Dark blue,
      '#a6caf0', // Skye blue
      '#008080' // Dark cyan
    ],
    l = colors.length;
  let i = 0;

  return function() {
    i = loop(++i, 0, colors.length);
    return colors[i];
  };
})();

const body = document.querySelector('body');
const pi = document.createElement('div');
const p2 = document.createElement('div');

pi.className = 'pi';
pi.innerHTML = '吃葡萄不吐葡萄皮';


for (let i = 50 - 1; i >= 0; i--) {
  const p = pi.cloneNode(true);
  initPi(p);
  p.style.animationDelay = -(Math.random() * 3.14) + 's';
  body.appendChild(p);
}

document.querySelectorAll('.pi').forEach((pi) => {
  pi.addEventListener('animationiteration', (e) => {
    initPi(e.target);
  });
});
