const toMax = document.getElementById('toMax');
const toMin = document.getElementById('toMin');
const wrapperMenu = document.querySelector('.wrapper-menu');
const svg = document.getElementsByClassName('svg_2');

Array.from(svg, el => {
  el.addEventListener('click', () => {
    if(el.classList.contains('filled')) {
      el.classList.remove('filled')
    }
    else el.classList.add('filled');
  })
})

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

toMax.addEventListener('click', () => {
    if(getComputedStyle(toMax).fontWeight == 100) {
        toMax.style.fontWeight = 700;
    }
    else toMax.style.fontWeight = 100;
})

toMin.addEventListener('click', () => {
    if(getComputedStyle(toMin).fontWeight == 100) {
        toMin.style.fontWeight = 700;
    }
    else toMin.style.fontWeight = 100;
})