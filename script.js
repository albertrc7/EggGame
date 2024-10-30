let imagen1 = document.getElementById('img1');
let puntu = document.getElementById('puntuacion');
let boton1 = document.getElementById('btn1');
let imagen2 = 'img/REAL2.png';
let imagen3 = 'img/REAL3.png';
let perk = false;
let contador = 0;



imagen1.addEventListener("click", () =>{
    //Incremento de contador
    if (contador >= 0 && contador < 20){
        contador++;
    }else if(contador >= 20 && contador < 50){
        contador += 5;
    }else if(contador >= 50 && perk){
        contador *= 3;
    }

    //Actualización de la puntuación
    puntu.innerHTML = contador;
    

    //Si llega a 20 cambio de imagen
    if(contador > 19 && contador < 50){
    imagen1.src = imagen2;
    }

    //Si llega a 50 cambio de imagen
    if (contador > 49){
        imagen1.src = imagen3;
    }
})

boton1.addEventListener("click", () =>{
   if(contador >= 50){
    perk = true;
   }
    
})