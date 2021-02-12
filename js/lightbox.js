const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-img')
const contenedorLight = document.querySelector('.imagen-light')
const principal1 = document.querySelector('.principal');


imagenes.forEach(imagen =>{
  imagen.addEventListener('click', () =>{
    agregarImg(imagen.getAttribute('src'));
  })
})
//CERRAR LA IMAGEN
contenedorLight.addEventListener('click', (e) =>{
  if(e.target !== imagenesLight){
    contenedorLight.classList.toggle('show');
    imagenesLight.classList.toggle('showImg')
    principal1.style.opacity = '1'
  };
})

//APARECER MISMA IMAGEN
const agregarImg = (imagen) =>{
  imagenesLight.src = imagen;
  contenedorLight.classList.toggle('show');
  imagenesLight.classList.toggle('showImg')
  principal1.style.opacity = '0'
}