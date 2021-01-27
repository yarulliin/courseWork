const toMax = document.getElementById('toMax');
const toMin = document.getElementById('toMin');
const wrapperMenu = document.querySelector('.wrapper-menu');
const svg = document.getElementsByClassName('svg_2');
const wrapper = document.querySelector('.input-wrapper'),
      textInput = document.querySelector('input[type="text"]');
        
textInput.addEventListener('keyup', event => {
  wrapper.setAttribute('data-text', event.target.value);
});

Array.from(svg, el => {
  el.addEventListener('click', () => {
    if(el.classList.contains('filled')) {
      el.classList.remove('filled')
    }
    else el.classList.toggle('filled');
  })
})

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})

toMax.addEventListener('click', () => {
    if(getComputedStyle(toMax).fontWeight == 100) {
        toMax.style.fontWeight = 700;
        toMin.style.fontWeight = 100;
    }
    else toMax.style.fontWeight = 100;
})

toMin.addEventListener('click', () => {
    if(getComputedStyle(toMin).fontWeight == 100) {
        toMin.style.fontWeight = 700;
        toMax.style.fontWeight = 100;
    }
    else toMin.style.fontWeight = 100;
})