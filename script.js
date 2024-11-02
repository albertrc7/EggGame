let imagen1 = document.getElementById('img1');
let puntu = document.getElementById('puntuacion');
let boton1 = document.getElementById('btn1');
let imagen2 = 'img/REAL2.png';
let imagen3 = 'img/REAL3.png';
let contador = 0;
let intervaloAutomatico;
let nivelPoder = 0;

const intervalosPorNivel = {
    1: 1000, 
    2: 500,  
    3: 333,  
    4: 250,  
    5: 200   
};


imagen1.addEventListener("click", () => {
 
    if (contador >= 0 && contador < 20) {
        contador++;
    } else if (contador >= 20 && contador < 50) {
        contador += 5;
    } else if (contador >= 50) {
        contador *= 3;
    }

    
    puntu.innerHTML = contador;

    actualizarImagen();

    
});


boton1.addEventListener("click", () => {
    if (nivelPoder < 5) {
        nivelPoder++;
        document.getElementById(`nivel${nivelPoder}`).classList.add('active');
        actualizarIntervalo(); 
    }
});


function incrementarContador() {
    contador++;
    puntu.innerHTML = contador;
    actualizarImagen();
}


function actualizarIntervalo() {
    if (intervaloAutomatico) clearInterval(intervaloAutomatico);

    intervaloAutomatico = setInterval(incrementarContador, intervalosPorNivel[nivelPoder]);

    
}

function actualizarImagen(){
    
    if (contador >= 20 && contador < 50) {
        imagen1.src = imagen2;
    } else if (contador >= 50) {
        imagen1.src = imagen3;
    }
}
