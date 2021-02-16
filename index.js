const toMax = document.getElementById('toMax');
const toMin = document.getElementById('toMin');
const filter = document.getElementById('filter_logo');
const svg = document.getElementsByClassName('svg_2');
const account_btns = document.getElementsByClassName('acc_text');
const wrapperMenu = document.querySelector('.wrapper-menu');
const wrapper = document.querySelector('.input-wrapper');
const textInput = document.querySelector("input[type='text']");
const headerMenu = document.querySelector('.header_menu');
const filterMenu = document.querySelector('.menu');
const filterBlock = document.querySelector('.filter');

Array.from(account_btns, el => {
  el.addEventListener('click', () => {
    if(getComputedStyle(el).fontWeight == 200) {
      el.style.fontWeight = 700;
    }
    else el.style.fontWeight = 200;
  })
})

Array.from(svg, el => {
  el.addEventListener('click', () => {
    el.classList.toggle('filled');
  })
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
    else toMax.style.fontWeight = 200;
})

toMin.addEventListener('click', () => {
    if(getComputedStyle(toMin).fontWeight == 200) {
        toMin.style.fontWeight = 700;
        toMax.style.fontWeight = 200;
    }
    else toMin.style.fontWeight = 200;
})