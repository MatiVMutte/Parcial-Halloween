import { activarSpinner, insertarFilas, generarFilas } from './funciones.js';

export function cargarDatosFormulario(fila) {
    const nombre = fila.getAttribute('data-nombre');
    const alias = fila.getAttribute('data-alias');
    const defensa = fila.getAttribute('data-defensa');
    const miedo = fila.getAttribute('data-miedo');
    const tipo = fila.getAttribute('data-tipo');
  
    document.getElementById('nombre').value = nombre;
    document.getElementById('alias').value = alias;
    document.querySelector('input[name="defensa"][value="' + defensa + '"]').checked = true;
    document.getElementById('miedo').value = miedo;
    document.getElementById('tipo').value = tipo;
}
  
// function modificarDatoServidor(fila) {
//     const datosModificados = {
//       nombre: document.getElementById('nombre').value,
//       alias: document.getElementById('alias').value,
//       defensa: document.querySelector('input[name="defensa"]:checked').value,
//       miedo: document.getElementById('miedo').value,
//       tipo: document.getElementById('tipo').value
//     };
  
//     fetch(`http://localhost:3000/monstruos/${fila.getAttribute('data-id')}`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(datosModificados)
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Error al modificar el dato');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log('Dato modificado:', data);
//       // Aquí podrías realizar acciones adicionales si es necesario
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }
  
// function eliminarDatoServidor(fila) {
//     fetch(`http://localhost:3000/monstruos/${fila.getAttribute('data-id')}`, {
//       method: 'DELETE'
//     })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Error al eliminar el dato');
//       }
//       return response.json();
//     })
//     .then(() => {
//       console.log('Dato eliminado');
//       // Aquí podrías realizar acciones adicionales si es necesario
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
// }

export async function cargarTabla() {
  console.log("FUNCIONA");
  activarSpinner(true);

  try {
      const res = await fetch("http://localhost:3000/monstruos");
      const data = await res.json();

      insertarFilas(generarFilas(data));
  } catch (res) {
      console.error(`Error ${res.status}: ${res.statusText}`);
  } finally {
      activarSpinner(false);
  }
}