
let hourHand = document.querySelector('.hora');
let minuteHand = document.querySelector('.minuto');
let secondHand = document.querySelector('.segundo');

// function 
function relogio() {
  const currentDate = new Date();

  const segundos = (currentDate.getSeconds()) / 60;
  const minutos = (segundos + (currentDate.getMinutes())) / 60;
  const horas = (minutos + (currentDate.getHours())) / 12;

  const rotcacaoSegundos = segundos * 360;
  const rotacaoMinutos = minutos * 360;
  const rotacaoHoras = horas * 360;

  secondHand.style.transform = `rotate(${rotcacaoSegundos}deg)`;
  minuteHand.style.transform = `rotate(${rotacaoMinutos}deg)`;
  hourHand.style.transform = `rotate(${rotacaoHoras}deg)`;
}

setInterval(relogio, 1000);