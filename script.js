function next() {
    var vehiculo = document.getElementById("myselect")
    var formulario2 = document.getElementById("form2")

    if (vehiculo.value === ("0")) {

    }
    if (vehiculo.value === ("carro")) {
        document.getElementById("days").placeholder = '¿cuantos dias guardará su carro?';
    }
    if (vehiculo.value === ("moto")) {
        document.getElementById("days").placeholder = '¿cuantos dias guardará su moto?';
    }

}
function multiplicar() {
    var dias = document.getElementById("days").value
    if (document.getElementById("myselect") === ("carro")) {
        alert("el costo será de", (dias * 50000))
    }
}
