import { cargarDatosFormulario, modificarDatoServidor, eliminarDatoServidor } from './funcionesABM.js';

export function agregarEventoClick(fila) {
  fila.addEventListener('click', (e) => {
    console.log(e);
    cargarDatosFormulario(fila);

    // const botonModificar = document.getElementById('botonModificar');
    // botonModificar.addEventListener('click', () => {
    //   modificarDatoServidor(fila);
    // });

    // const botonEliminar = document.getElementById('botonEliminar');
    // botonEliminar.addEventListener('click', () => {
    //   eliminarDatoServidor(fila);
    // });
  });
}