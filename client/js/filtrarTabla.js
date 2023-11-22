let selectFiltro = document.getElementById("filtrar");

selectFiltro.addEventListener("change", function() {
    let tipoFiltrado = this.value;
    console.log(tipoFiltrado);

    let filas = Array.from(document.querySelector("table tbody").rows);
    console.log(filas);

    if (tipoFiltrado === "todos") {
        filas.forEach((fila) => {
            fila.style.display = "";
        });
    } else {
        let filasFiltradas = filas.filter((fila) => {
            let tipo = fila.cells[4].innerText;

            console.log(tipo);
            return tipo === tipoFiltrado;
        });

        filas.forEach((fila) => {
            fila.style.display = "none";
        });
        filasFiltradas.forEach((fila) => {
            fila.style.display = "";
        });
    }
});
