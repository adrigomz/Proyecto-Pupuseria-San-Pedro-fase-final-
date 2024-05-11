// Obtén una referencia al elemento de lista
var mesasLista = document.getElementById('mesas-lista');

// Agrega un evento de clic a cada elemento de lista
mesasLista.addEventListener('click', function(event) {
  var mesaSeleccionada = event.target;
  var mesaId = mesaSeleccionada.getAttribute('data-id');

  // Verifica si la mesa está ocupada y muestra el mensaje correspondiente
  if (mesaId === '5' || mesaId === '6' || mesaId === '9') {
    alert('La mesa ' + mesaId + ' no está disponible.');
  } else {
    alert('La mesa ' + mesaId + ' está disponible.');
  }
});