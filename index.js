const toMax = document.getElementById('toMax');
const toMin = document.getElementById('toMin');
const filter = document.getElementById('filter_logo');
const svg = document.getElementsByClassName('svg_2');
const checkboxex = document.getElementsByClassName('checkbox');
const priceFrom = document.getElementById('from');
const priceTo = document.getElementById('to');
const wrapperMenu = document.querySelector('.wrapper-menu');
const wrapper = document.querySelector('.input-wrapper');
const textInput = document.querySelector("input[type='text']");
const headerMenu = document.querySelector('.header_menu');
const filterMenu = document.querySelector('.menu');
const filterBlock = document.querySelector('.filter');
const reset = document.querySelector('.reset_params');

Array.from(svg, el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filled');
  })
})

reset.addEventListener('click', () => {
  Array.from(checkboxex, el => {
    el.querySelector('input').checked = false;
  })
  priceFrom.value = '';
  priceTo.value = '';
})
        
textInput.addEventListener('keyup', event => {
  wrapper.setAttribute('data-text', event.target.value);
});

filter.addEventListener('click', () => {
  filter.classList.toggle('filter_logo_active');
  filterMenu.classList.toggle('menu_active');
  filterBlock.classList.toggle('filter_active');
})

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open'); 
  headerMenu.classList.toggle('header_menu_active'); 

})

toMax.addEventListener('click', () => {
    if(getComputedStyle(toMax).fontWeight == 200) {
        toMax.style.fontWeight = 700;
        toMin.style.fontWeight = 200;
    }
})

toMin.addEventListener('click', () => {
    if(getComputedStyle(toMin).fontWeight == 200) {
        toMin.style.fontWeight = 700;
        toMax.style.fontWeight = 200;
    }
})