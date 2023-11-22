function calcularPromedioMiedo() {
    let filas = Array.from(document.querySelector("table tbody").rows);

    let sumaMiedo = filas.reduce((suma, fila) => {
        let miedo = parseFloat(fila.cells[3].innerText);
        return suma + miedo;
    }, 0);

    let promedioMiedo = sumaMiedo / filas.length;

    document.getElementById("promedio").value = promedioMiedo;
}