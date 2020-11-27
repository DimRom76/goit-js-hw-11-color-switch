import './styles.css';
import colors from './color-data';

let intervalId = 0;
let colorId = 0;

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
};

refs.btnStart.addEventListener('click', onBtnStart);
refs.btnStop.addEventListener('click', onBtnStop);

function onBtnStart() {
  refs.btnStart.disabled = true;

  intervalId = setInterval(() => {
    //если текущий фон такой же, возьмем следующий по индексу
    let curentColorId = randomIntegerFromInterval(0, colors.length - 1);
    if (curentColorId === colorId) {
      curentColorId++;
    }
    colorId = curentColorId === colors.length ? 0 : curentColorId;
    console.log(colorId);
    refs.body.style.backgroundColor = colors[colorId];
  }, 1000);
}

function onBtnStop() {
  refs.btnStart.disabled = false;
  clearInterval(intervalId);
}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
