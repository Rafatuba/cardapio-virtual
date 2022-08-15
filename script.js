// const wait = (delay = 0) =>
//   new Promise(resolve => setTimeout(resolve, delay));

// const setVisible = (elementOrSelector, visible) => 
//   (typeof elementOrSelector === 'string'
//     ? document.querySelector(elementOrSelector)
//     : elementOrSelector
//   ).style.display = visible ? 'block' : 'none';

//   setVisible('.page', false);
//   setVisible('#carregar', true);

// document.addEventListener('DOMContentLoaded', () =>
//   wait(1000).then(() => {
//     setVisible('.page', true);
//     setVisible('#carregar', false);
//   }));


let loader = document.getElementById("carregar");

window.addEventListener("load", function(){
  loader.style.display = "none"
})