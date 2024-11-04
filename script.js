let imagen1 = document.getElementById('img1');
let puntu = document.getElementById('puntuacion');
let boton1 = document.getElementById('btn1');
let boton2=document.getElementById('btn2');
let textHab = document.getElementById('multText')
let textHab2 = document.getElementById('multTextDos');
let imagen2 = 'img/REAL2.png';
let imagen3 = 'img/REAL3.png';
let contador = 0;
let contador2 = 0;
let intervaloAutomatico;
let nivelPoder = 0;
let nivelPoder2= 0;
let trigger= true;

const intervalosPorNivel = {
    1: 1000, 
    2: 500,  
    3: 333,  
    4: 250,  
    5: 200   
};


imagen1.addEventListener("click", () => {
    
    multipilicadorClicks(nivelPoder2);
    

    if (contador >= 0 && contador < 20 && trigger) {
        contador++;
    } else if (contador >= 20 && contador < 50 && trigger) {
        contador += 5;
    } else if (contador >= 50 && trigger) {
        contador *= 3;
    }
    conversorDuc();
   

        puntu.innerHTML = conversorDuc();
    
    actualizarImagen();

    
});


boton1.addEventListener("click", () => {
    if (nivelPoder < 5) {
        nivelPoder++;
        document.getElementById(`nivel${nivelPoder}`).classList.add('active');
        actualizarIntervalo(); 
    }

    if (nivelPoder == 1){
        textHab.innerHTML = ("1: +1 click/seg");
    }else if(nivelPoder == 2){
        textHab.innerHTML = ("2: +2 click/seg");
    }else if(nivelPoder == 3){
        textHab.innerHTML = ("3: +3 click/seg");
    }else if(nivelPoder == 4){
        textHab.innerHTML = ("4: +4 click/seg");
    }else if(nivelPoder == 5){
        textHab.innerHTML = ("5: +5 click/seg")
    }
});

boton2.addEventListener("click", () => {
    if (contador > 10) {
        nivelPoder2++;
        document.getElementById(`nivele${nivelPoder2}`).classList.add('active');
        
    }

    if (nivelPoder2 == 1){
        textHab2.innerHTML = ("1: x1,05");
    }else if(nivelPoder2 == 2){
        textHab2.innerHTML = ("2: x1,10");
    }else if(nivelPoder2 == 3){
        textHab2.innerHTML = ("3: x1,20");
    }else if(nivelPoder2 == 4){
        textHab2.innerHTML = ("4: x1,40");
    }else if(nivelPoder2 == 5){
        textHab2.innerHTML = ("5: x1,50")
    }
})

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

function multipilicadorClicks(nivel){
   
    if(nivel > 0){
        trigger = false;
    }
    
    if (nivel == 1){
         contador = contador * 1.05;
        }else if(nivel == 2){
        contador *= 1.10
           }else if(nivel == 3){
            contador *= 1.20
               }else if(nivel == 4){
                contador *= 1.40
                   }else if(nivel == 5){
                    contador *= 1.50
                       }
}

function conversorDuc(){
   if(contador < 100000){
    contador2 = contador;
    return contador2.toFixed(2);
   }else  if (contador > 100000 && contador < 999999){
        contador2 = contador;
        contador2 = contador2/1000;
        return contador2.toFixed(2) + "K";
   }else if (contador >= 999999){
    contador2 = contador;
    contador2 = contador2/1000000;
    return contador2.toFixed(2) + "M";
}


}