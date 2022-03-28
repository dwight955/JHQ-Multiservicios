document.addEventListener("DOMContentLoaded", function(event){
    
    let menu = document.getElementById('menu');
    let logoMenu = menu.children[0];
    let botonMenu = menu.children[4];
    let posicionPrincipal = window.pageYOffset; //posicion del scroll vertical, valor incial es 0
    const WIDTH_MAX_MOVIL = 495;
    const MAX_SCROLL_MENU = 300;
    const anchoVentana = window.innerWidth;

    //aloja la distancia desde el top del viewport hasta el menu.
    let distancia = menu.offsetTop + 4; /*el numero magico, es el relleno complemento, 
    debido a que el height del menu no es correcta cuando termina
    de cargar la pagina*/
    
if(anchoVentana < WIDTH_MAX_MOVIL){
    //EFECTO HIDE MENU ON SCROLL
    //evento que repetidamente evalua las condiciones al momento de hacer scroll
    window.addEventListener('scroll', function () {
        let desplazamientoActual = this.window.pageYOffset;
        
        if(desplazamientoActual > distancia){
            menu.classList.add('fixed');
            logoMenu.classList.add('menu__logo--ancho');
            botonMenu.classList.add('menu__btnMenu--ancho');
            //impide que el top auto desmaquete el menu
            menu.style.top = '0';
            if(desplazamientoActual > MAX_SCROLL_MENU){
                menu.style.top = '-100px';
                //la posicionPrincipal es el eje referente para que el menu se oculte o muestre.
                if(posicionPrincipal >= desplazamientoActual){
                    //mostrar el menu
                    menu.style.top = '0';
                }else{
                    //ocultarlo
                    menu.style.top = '-100px';
                }
                //despues de una condicion, el eje referente es actualizado con el ultimo despalazamiento realizado
                posicionPrincipal = desplazamientoActual;
            }
        }
        else{
            menu.classList.remove('fixed');
            logoMenu.classList.remove('menu__logo--ancho');
            botonMenu.classList.remove('menu__btnMenu--ancho');
            //ayuda a posicionar nuevamente el menu en su posicion original
            menu.style.top = 'auto';
        }
    });
}
});

