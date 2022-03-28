document.addEventListener("DOMContentLoaded", function (event) {
    let posPrincipal = window.pageYOffset;
    let redesSociales = document.getElementById('redesSociales');
    let chkboxRedesSociales = document.getElementById('btn-desplegar-redes');

    window.addEventListener('scroll', function () {
        let desplazamientoActual = this.window.pageYOffset;
        if(chkboxRedesSociales.checked == false){
            if(posPrincipal >= desplazamientoActual){
                redesSociales.style.bottom = '50px';
            }else{
                redesSociales.style.bottom = '-100px';
            }
            posPrincipal = desplazamientoActual;
        }
    });
});