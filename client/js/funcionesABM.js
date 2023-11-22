import { activarSpinner, insertarFilas, generarFilas } from './funciones.js';
import { Monstruo } from './models/monstruos.js';

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

export async function obtenerMonstruosServidor() {
  try {
    const res = await fetch("http://localhost:3000/monstruos");

    if(!res.ok) {
      throw Error(res);
    }

    return await res.json();
  } catch(res) {
    console.error(`Error ${res.status}: ${res.statusText}`);
  }
}

export async function obtenerUltimoID() {
  let ultimoID = -1;
  
  const datos = await obtenerMonstruosServidor();

  datos.forEach(element => {
    if(element.id > ultimoID) {
      ultimoID = element.id;
    }
  });
  return ultimoID;
}
  
export async function modificarDatoServidor(datosModificados) {
  
  let monstruo = await new Monstruo(datosModificados.nombre, datosModificados.alias, datosModificados.defensa, datosModificados.miedo, datosModificados.tipo);
  monstruo.id = datosModificados.id;

    fetch(`http://localhost:3000/monstruos/${monstruo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(monstruo)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al modificar el dato');
      }
      return response.json();
    })
    .then(data => {
      console.log('Dato modificado:', data);
      // Aquí podrías realizar acciones adicionales si es necesario
    })
    .catch(error => {
      console.error('Error:', error);
    })
    .finally(()=>{
      activarSpinner(false);
    });
}
  
// export async function eliminarDatoServidor(datosModificados) {

//     fetch(`http://localhost:3000/monstruos/${datosModificados.id}`, {
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

export async function eliminarDatoServidor(datosModificados) {
  try {
    const response = await axios.delete(`http://localhost:3000/monstruos/${datosModificados.id}`);
    console.log('Dato eliminado');
    // return response.json();
  } catch (error) {
      console.error('Error:', error);
  } finally {
    activarSpinner(false);
  }
}

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