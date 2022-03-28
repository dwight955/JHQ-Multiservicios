document.addEventListener("DOMContentLoaded", function(event){
const anchoVentana = window.innerWidth;
const WIDTH_MAX_MOVIL = 495;
let text = document.createTextNode("VALORES");

function agregartxt(){
    if(anchoVentana > WIDTH_MAX_MOVIL){
        document.getElementById('Nosotros__subtitulo').innerHTML='<h1 class="Nosotros__subtitulo-valores">NUESTROS VALORES</h1>';
        document.getElementById('Servicio__contenedor-titulo').innerHTML='<h1 class="Servicio__titulo">NUESTROS SERVICIOS</h1>';
    }
}
agregartxt()
});
