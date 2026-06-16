function mostrarAlerta(item) {
  Swal.fire({
    title: 'Tema seleccionado',
    text: 'Has elegido: ' + item,
    icon: 'info',
    confirmButtonColor: '#ff3d7e',
    confirmButtonText: 'Ok'
  });
}

function irAlTema(pagina) {
  Swal.fire({
    title: 'Tema seleccionado',
    text: 'Has elegido: Conceptos básicos',
    icon: 'info',
    confirmButtonColor: '#ff3d7e',
    confirmButtonText: 'Ir al tema'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.href = pagina;
    }
  });
}
