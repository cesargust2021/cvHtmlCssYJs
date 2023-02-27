let menuVisible = false;

function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList= "";
        menuVisible= false;
    }else{
        document.getElementById("nav").classList="barraDeNavegacion";
        menuVisible = true;
    }
}

function selecciona(){

    document.getElementById("nav").classList= "";
    menuVisible= false;
}

// Animacion de la barra de habilidades

function efectoHabilidades(){
    let skills = document.getElementById("skills");
    let distanciaSkills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distanciaSkills >= 300){

        let habilidades = document.getElementsByClassName("progreso");
       
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupa");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajoenequipo");
        habilidades[7].classList.add("creacion");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyectmanagement");

    }
}

window.onscroll = function(){
    efectoHabilidades();
}