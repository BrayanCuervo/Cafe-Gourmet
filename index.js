let indice = 0;

  function mostrarImagen() {
    const carrusel = document.getElementById("carruselImagenes");
    carrusel.style.transform = `translateX(${-indice * 100}%)`;
  }

  function siguiente() {
    indice = (indice + 1) % 6;
    mostrarImagen();
  }

  function anterior() {
    indice = (indice - 1 + 6) % 6;
    mostrarImagen();
    }

const botones = document.getElementsByClassName('btnAgregar');
const mensaje = document.getElementById('mensaje');

for (let i = 0; i < botones.length; i++) {
  botones[i].addEventListener('click', function () {
    mensaje.textContent = "Se agrego al carrito correctamente";
    mensaje.classList.add('visible')
    setTimeout(() => {
      mensaje.classList.remove('visible');
    }, 2000); 
  });
}
const formulario=document.getElementById('formReserva')
const mensaje_formulario = document.getElementById('mensaje_formulario');
const btn_reservar = document.getElementById('btn_reservar');

document.addEventListener('DOMContentLoaded', function() {
btn_reservar.addEventListener('click', function() {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const fecha = document.getElementById('fecha').value;
  const personas = document.getElementById('personas').value;
  const correoValido = correo.includes('@') && correo.includes('.');
  const nombreValido = /^[a-zA-Z\s]+$/.test(nombre); 

  if (nombre !== '' && correo !== '' && fecha !== '' && personas !== '') {
    if (correoValido) {
      mensaje_formulario.textContent = 'Se registro su reserva correctamente';
      mensaje_formulario.style.color = 'green';

    } else {
      mensaje_formulario.textContent = 'El correo electrónico no es válido';
      mensaje_formulario.style.color = 'red';
    }
    if (nombreValido) {
      mensaje_formulario.textContent = 'Se registro su reserva correctamente';
      mensaje_formulario.style.color = 'green'
    } else {
      mensaje_formulario.textContent = 'El nombre solo puede contener letras y espacios';
      mensaje_formulario.style.color = 'red'; 
    }
    if(nombreValido && correoValido){
      formulario.reset(); 
    }
  } else {
    mensaje_formulario.textContent = 'Por favor, completa todos los campos.';
    mensaje_formulario.style.color = 'red';
  }    
});
},
document.addEventListener('DOMContentLoaded', function() {
  const formulario2 = document.getElementById('form_contacto');
  const mensaje_formulario2 = document.getElementById('mensaje_formulario2'); 
  const btn_enviar = document.getElementById('btn_enviar');

  btn_enviar.addEventListener('click', function() {
    const nombre = document.getElementById('nombre2').value.trim();
    const correo = document.getElementById('correo2').value.trim();
    const textoo = document.getElementById('texto').value.trim();
    const correoValido = correo.includes('@') && correo.includes('.');
    const nombreValido = /^[a-zA-Z\s]+$/.test(nombre); 

    if (nombre !== '' && correo !== '' && textoo !=='') {
      if (!correoValido) {
        mensaje_formulario2.textContent = 'El correo electrónico no es válido';
        mensaje_formulario2.style.color = 'red';
      } else if (!nombreValido) {
        mensaje_formulario2.textContent = 'El nombre solo puede contener letras y espacios';
        mensaje_formulario2.style.color = 'red'; 
      } else {
        mensaje_formulario2.textContent = 'Se registró su reserva correctamente';
        mensaje_formulario2.style.color = 'green';
        formulario2.reset(); 
      }
    } else {
      mensaje_formulario2.textContent = 'Por favor, completa todos los campos.';
      mensaje_formulario2.style.color = 'red';
    }    
  });
}));
