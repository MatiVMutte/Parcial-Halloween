import { cargarDatosFormulario, cargarTabla, eliminarDatoServidor, modificarDatoServidor } from './funcionesABM.js';
import { insertarJson, manejarFormulario } from './funciones.js';

let idFila = -1;

document.addEventListener('DOMContentLoaded', async (e) => {
  await cargarTabla();
  
  calcularPromedioMiedo();

  let tbody = document.querySelector('table tbody');
  let filas = tbody.querySelectorAll('tr');
  filas.forEach(fila => {
    fila.addEventListener("click", (e) => {
      cargarDatosFormulario(fila);
      idFila = fila.getAttribute('data-id');
    });
  });
  
});

const form = document.querySelector('form');
form.addEventListener('submit', (e) => manejarFormulario(e, insertarJson, idFila));

const btnModificar = document.querySelector('.btn-modificar');
btnModificar.addEventListener("click", (e) => manejarFormulario(e, modificarDatoServidor, idFila));

const btnEliminar = document.querySelector('.btn-eliminar');
btnEliminar.addEventListener("click", (e) => manejarFormulario(e, eliminarDatoServidor, idFila));