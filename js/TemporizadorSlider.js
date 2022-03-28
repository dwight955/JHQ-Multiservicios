let counter = 1;
const totalImages = 3;
const TIME_INTERVAL = 5000; 
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > totalImages){
        counter = 1;
    }
}, TIME_INTERVAL);