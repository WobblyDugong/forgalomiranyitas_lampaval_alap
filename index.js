window.addEventListener("load", init);




function ID(elem) {
    return document.getElementById(elem);
}
function CLASS(elem) {
    return document.getElementsByClassName(elem);
}
function QS(elem) {
    return document.querySelector(elem);
}
var allapot = false;

function init(){
    var auto = QS(".auto");
    var lampa = QS(".lampa");
    var piros = QS(".piros");
    var sarga = QS(".sarga");
    var zold = QS(".zold");
    sarga.style.opacity="20%"
    zold.style.opacity="20%"
    setInterval(() => {
        if(!allapot){
            sarga.style.opacity="100%"
        }
    }, 2500);
    setInterval(() => {
        if(allapot){
            piros.style.opacity="100%"
            zold.style.opacity="20%"
        }else{
            piros.style.opacity="20%"
            sarga.style.opacity="20%"
            zold.style.opacity="100%"
            auto.classList.add("balroljobbra");
        }
        allapot=!allapot
    }, 5000);
}






