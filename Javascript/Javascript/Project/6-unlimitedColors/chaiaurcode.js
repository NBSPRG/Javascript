function getRandomHexColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

let Interval;

document.querySelector('#start').addEventListener('click', function () {
  Interval = setInterval(function () {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 2000);
});
