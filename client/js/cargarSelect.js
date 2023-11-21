// Función para agregar opciones al select
function cargarOpciones() {
  opciones.forEach(opcion => {
    const option = document.createElement('option');
    option.value = opcion.value;
    option.text = opcion.text;
    select.appendChild(option);
  });
}

// Datos de ejemplo para las opciones del select
const opciones = [
  { value: 'esqueleto', text: 'Esqueleto' },
  { value: 'zombie', text: 'Zombie' },
  { value: 'vampiro', text: 'Vampiro' },
  { value: 'fantasma', text: 'Fantasma' },
  { value: 'bruja', text: 'Bruja' },
  { value: 'hombrelobo', text: 'Hombre Lobo' }
];

// Obtener referencia al elemento select
const select = document.getElementById('tipo');

document.addEventListener('DOMContentLoaded', function() {
    cargarOpciones();
});


