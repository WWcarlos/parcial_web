function next() {
    var vehiculo = document.getElementById("myselect")
    var formulario2 = document.getElementById("form2")

    if (vehiculo.value === (0)) {

    }
    if (vehiculo.value === ("carro")) {
        document.getElementById("days").placeholder = '¿cuantos dias guardará su carro?';
        formulario2.remove("d-none");
    }
    if (vehiculo.value === ("moto")) {
        document.getElementById("days").placeholder = '¿cuantos dias guardará su moto?';
        formulario2.remove("d-none");
    }
    else {
        formulario2.classList = ("d-none");
    }
}
function multiplicar() {
    var dias = document.getElementById("days").value
    if (document.getElementById("myselect") === ("carro")) {
        alert("el costo será de", (dias * 50000))
    }
}
