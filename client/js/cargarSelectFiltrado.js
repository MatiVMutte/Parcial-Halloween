// Función para agregar opciones al select
function cargarOpcionesFiltrado() {
  opcionesFiltrado.forEach(opcion => {
    const option = document.createElement('option');
    option.value = opcion.value;
    option.text = opcion.text;
    selectFiltrado.appendChild(option);
  });
}
  
  // Datos de ejemplo para las opciones del select
  const opcionesFiltrado = [
    { value: 'todos', text: 'Todos' },
    { value: 'vampiro', text: 'Vampiro' },
    { value: 'hombrelobo', text: 'Hombre Lobo' },
    { value: 'fantasma', text: 'Fantasma' },
    { value: 'esqueleto', text: 'Esqueleto' },
    { value: 'bruja', text: 'Bruja' },
    { value: 'zombie', text: 'Zombie' }
  ];
  
  // Obtener referencia al elemento select
  const selectFiltrado = document.getElementById('filtrar');
  
  document.addEventListener('DOMContentLoaded', function() {
      cargarOpcionesFiltrado();
  });
  
  
  