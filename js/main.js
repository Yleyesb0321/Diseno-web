const principal = document.querySelector('.principal');
const menu= document.querySelector('.menu-nav');

console.log(principal);
console.log(menu);

//EVENTO CLICK ABRIR
principal.addEventListener('click' , () =>{
  menu.classList.toggle('spread');
})

//EVENTO CLICK CERRAR
window.addEventListener('click' , e=>{
  if(menu.classList.contains('spread') && e.target != menu  && e.target != principal ){
    menu.classList.toggle('spread');

  };
})