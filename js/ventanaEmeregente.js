let btnSi =document.getElementById("btnSi");
let containerPopUp =document.getElementById("containerPopUp");
let cerrarPopUp =document.getElementById("cerrarPopUp");
btnSi.addEventListener("click", function(){
    containerPopUp.style.display ="flex";
});
cerrarPopUp.addEventListener("click", function(){
    containerPopUp.style.display ="none";
});