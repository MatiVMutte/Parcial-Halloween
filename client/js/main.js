import { cargarTabla } from './funcionesABM.js';
import { manejarFormulario } from './funciones.js';

// Manejar el evento submit del formulario
const form = document.querySelector('form');
form.addEventListener('submit', manejarFormulario);

// Al cargar la pagina
document.addEventListener('DOMContentLoaded', async (e) => {
  await cargarTabla();
  
  let tbody = document.querySelector('table tbody');
  let filas = tbody.querySelectorAll('tr');
  
  
});

// Obtener
// fila.addEventListener('click', (e) => {
//   console.log(e);
//   cargarDatosFormulario(fila);

//   // const botonModificar = document.getElementById('botonModificar');
//   // botonModificar.addEventListener('click', () => {
//   //   modificarDatoServidor(fila);
//   // });

//   // const botonEliminar = document.getElementById('botonEliminar');
//   // botonEliminar.addEventListener('click', () => {
//   //   eliminarDatoServidor(fila);
//   // });
// });