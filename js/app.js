// Con esta función se muestra el Toast 
function mostrarToast() {
    var toast = document.getElementById("mitoast");
    toast.className = "mostrar";
    setTimeout(function(){ toast.className = toast.className.replace("mostrar", ""); }, 5000);
}

// Con esta función se cierra el Toast 
function cerrarToast() {
    var toast = document.getElementById("mitoast");
    toast.className = "cerrar";
    toast.className = toast.className.replace("cerrar", "");
}