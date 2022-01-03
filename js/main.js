const widget = document.querySelector('.widget');
const layer = document.querySelector('.js-layer');
const button = document.querySelector('.js-button');

button.addEventListener('click', function(){
  button.classList.toggle('_active');
  layer.classList.toggle('_active');
  widget.classList.toggle('_active');
})

layer.addEventListener('click', function(){
  button.classList.remove('_active');
  layer.classList.remove('_active');
  widget.classList.remove('_active');
})