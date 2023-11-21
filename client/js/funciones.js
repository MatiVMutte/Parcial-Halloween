// Función para generar filas HTML a partir de datos
export function generarFilas(datos) {
    return datos.map(dato => `
      <tr class="tr" data-nombre="${dato.nombre}" data-alias="${dato.alias}" data-defensa="${dato.defensa}" data-miedo="${dato.miedo}" data-tipo="${dato.tipo}">
        <td>${dato.nombre}</td>
        <td>${dato.alias}</td>
        <td>${dato.defensa}</td>
        <td>${dato.miedo}</td>
        <td>${dato.tipo}</td>
      </tr>
    `).join('');
}

// Función para insertar las filas generadas en el tbody de la tabla
export function insertarFilas(filasGeneradas) {
    const tbody = document.querySelector('#tabla-monstruos tbody');
    if (tbody) {
      tbody.innerHTML = filasGeneradas;
    }
}
  
// Función para activar o desactivar el spinner y la tabla de monstruos
export function activarSpinner(booleano) {
    const spinner = document.getElementById('spinner');
    const tabla_monstruos = document.getElementById('tabla-monstruos');
    
    if (booleano) {
      spinner.style.display = 'block';
      tabla_monstruos.style.display = 'none';
    } else {
      spinner.style.display = 'none';
      tabla_monstruos.style.display = 'table';
    }
}
  
// Función para realizar la solicitud POST y manejar la inserción de datos
export function insertarJson(nuevoDato) {
    fetch("http://localhost:3000/monstruos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(nuevoDato),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          const filasGeneradas = generarFilas(data);
          insertarFilas(filasGeneradas);
        } else {
          throw new Error('La respuesta del servidor no contiene datos válidos.');
        }
      })
      .catch((error) => {
        console.error(error.message);
      })
      .finally(() => {
        activarSpinner(false);
      });
}
  
// Función para manejar el evento submit del formulario
export function manejarFormulario(event) {
    event.preventDefault(); // Prevenir el envío predeterminado del formulario
  
    const nombre = document.getElementById('nombre').value;
    const alias = document.getElementById('alias').value;
    const defensa = document.querySelector('input[name="defensa"]:checked').value;
    const miedo = document.getElementById('miedo').value;
    const tipo = document.getElementById('tipo').value;
  
    const nuevoDato = {
      nombre,
      alias,
      defensa,
      miedo,
      tipo
    };
  
    activarSpinner(true);
    insertarJson(nuevoDato);
}