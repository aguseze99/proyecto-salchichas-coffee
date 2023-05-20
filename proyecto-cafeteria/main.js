
document.querySelector('#cafe').onclick = function(e){
    const imagen = this.querySelector('img')
   if(imagen.style.display === 'none'){
    imagen.style.display = 'block'
   }else{
    imagen.style.display = 'none';
   }
   e.preventDefault()
}


document.querySelector('#lagrima').onclick = function(e){
    const imagen = this.querySelector('img')
   if(imagen.style.display === 'none'){
    imagen.style.display = 'block'
   }else{
    imagen.style.display = 'none';
   }
   e.preventDefault()
}


document.querySelector('#cafe-cortado').onclick = function(e){
    const imagen = this.querySelector('img')
   if(imagen.style.display === 'none'){
    imagen.style.display = 'block'
   }else{
    imagen.style.display = 'none';
   }
   e.preventDefault()
}


document.querySelector('#cafe-con-leche').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    }else {
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#capuccino').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else {
        imagen.style.display = 'none'
    }
}


document.querySelector('#latte').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    }else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#submarino').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#te').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#exprimido').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#licuado').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#frappe').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#te-helado').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#tostados').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#medialunas').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#croassant').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#selva-negra').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#tarta-de-ricota').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#cheesecake').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


document.querySelector('#lemon-pie').onclick = function(e){
    const imagen = this.querySelector('img')
    if(imagen.style.display === 'none'){
        imagen.style.display = 'block'
    } else{
        imagen.style.display = 'none'
    }
    e.preventDefault()
}


const textoPortada = document.getElementById('texto-portada');
const texto = 'Más que un café';
const velocidadEscritura = 150; // Ajusta la velocidad de escritura a 150 milisegundos por letra
const tiempoPausa = 1000; // Ajusta el tiempo de pausa entre cada palabra (en milisegundos)

let i = 0;
let isDeleting = false;

function escribirTexto() {
  const longitud = texto.length;

  if (!isDeleting && i <= longitud) {
    textoPortada.innerHTML = texto.substring(0, i) + '<span class="subrayado">_</span>';
    i++;
  } else if (isDeleting && i >= 0) {
    textoPortada.innerHTML = texto.substring(0, i) + '<span class="subrayado">_</span>';
    i--;
  }

  if (isDeleting && i === -1) {
    isDeleting = false;
    setTimeout(escribirTexto, tiempoPausa);
  } else if (!isDeleting && i === longitud + 1) {
    isDeleting = true;
    setTimeout(escribirTexto, tiempoPausa);
  } else {
    const tiempo = isDeleting ? velocidadEscritura / 2 : velocidadEscritura;
    setTimeout(escribirTexto, tiempo);
  }
}

escribirTexto();

// Initialize and add the map
function initMap() {
    // The location of Uluru
    
    const cafeteria = { lat: -34.943260, lng: -57.955267 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: cafeteria,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: cafeteria,
      map: map,
    });
  }
  
  window.initMap = initMap;