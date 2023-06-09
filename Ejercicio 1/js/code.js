var estudiantes = [
    {nombre: 'Estudiante 1', peso: 65},
    {nombre: 'Estudiante 2', peso: 53},
    {nombre: 'Estudiante 3', peso: 58},
    {nombre: 'Estudiante 4', peso: 72},
    {nombre: 'Estudiante 5', peso: 43},
    {nombre: 'Estudiante 6', peso: 51},
    {nombre: 'Estudiante 7', peso: 70},
    {nombre: 'Estudiante 8', peso: 67},
    {nombre: 'Estudiante 9', peso: 49},
    {nombre: 'Estudiante 10', peso: 62},
    {nombre: 'Estudiante 11', peso: 60},
    {nombre: 'Estudiante 12', peso: 56},
    {nombre: 'Estudiante 13', peso: 48},
    {nombre: 'Estudiante 14', peso: 39},
    {nombre: 'Estudiante 15', peso: 54},
    {nombre: 'Estudiante 16', peso: 68},
    {nombre: 'Estudiante 17', peso: 42},
    {nombre: 'Estudiante 18', peso: 57},
    {nombre: 'Estudiante 19', peso: 47},
    {nombre: 'Estudiante 20', peso: 75},
];

window.onload = function() {
    var tabla = document.getElementById("tablaEstudiantes");

    for (var i = 0; i < estudiantes.length; i++) {
        var fila = tabla.insertRow(-1); // Agrega una fila al final de la tabla
        var celda1 = fila.insertCell(0); // Agrega la primera celda en la fila
        var celda2 = fila.insertCell(1); // Agrega la segunda celda en la fila

        // Asigna el nombre y el peso a las celdas
        celda1.innerHTML = estudiantes[i].nombre;
        celda2.innerHTML = estudiantes[i].peso;
    }
}

function calcularPeso() {
    var menos40 = 0;
    var entre40y50 = 0;
    var entre50y60 = 0;
    var mas60 = 0;

    for (var i = 0; i < estudiantes.length; i++) {
        var peso = estudiantes[i].peso;
        if (peso < 40) {
            menos40++;
        } else if (peso >= 40 && peso < 50) {
            entre40y50++;
        } else if (peso >= 50 && peso < 60) {
            entre50y60++;
        } else if (peso >= 60) {
            mas60++;
        }
    }

    document.getElementById("menos40").innerHTML = "Alumnos de menos de 40 Kg: " + menos40;
    document.getElementById("entre40y50").innerHTML = "Alumnos entre 40 y 50 Kg: " + entre40y50;
    document.getElementById("entre50y60").innerHTML = "Alumnos de más de 50 y menos de 60 Kg: " + entre50y60;
    document.getElementById("mas60").innerHTML = "Alumnos de más o igual a 60 Kg: " + mas60;
}
