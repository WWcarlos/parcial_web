function next(){
    var vehiculo = document.getElementById("myselect")
    var formulario2= document.getElementById("form2")

    if (vehiculo.value ===("0")){
        classlist.add("d-none")
    }
    if (vehiculo.value ===("1")){
        classlist.remove("d-none")
    }
    if (vehiculo.value ===("2")){
        classlist.remove("d-none")
    }
}
