// Función para enviar los datos del formulario al servidor
function enviarDatos(datosFormulario) {
    axios.post('http://localhost:3001/register', datosFormulario)
      .then(response => {
        if (response.status === 200) {
          console.log('Registro exitoso');
          window.location.href = '/login.html'
          // Puedes redirigir a otra página si el registro fue exitoso
        } else {
          console.error('Error en la solicitud:', response.statusText);
          // Puedes mostrar un mensaje de error al usuario
        }
      })
      .catch(error => {
        console.error('Error al enviar los datos:', error.message);
        // Puedes mostrar un mensaje al usuario indicando que hubo un problema al enviar los datos
      });
  }
  
  // Evento de envío del formulario
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const tipoDocumento = document.getElementById('tipodocumento').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value;
    const correoElectronico = document.getElementById('correoElectronico').value;
    const password = document.getElementById('password').value;
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const telefono = document.getElementById('telefono').value;
  
    const datosFormulario = {
      tipodocumento: tipoDocumento,
      numerodocumento: numeroDocumento,
      correoElectronico: correoElectronico,
      password: password,
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento,
      telefono: telefono
    };
  
    console.log('Datos a enviar:', datosFormulario); // Mostrar los datos que se enviarán
  
    enviarDatos(datosFormulario);
  });
  
  // Función para realizar un ping al backend
  const pingBackend = async () => {
    const backendURL = 'http://localhost:3001/ping'; // Aquí colocas la URL de tu backend
  
    try {
      const response = await fetch(backendURL, {
        method: 'GET',
      });
  
      if (response.ok) {
        console.log('Ping exitoso al backend');
        // Manejar la respuesta exitosa
      } else {
        console.error('No se pudo establecer conexión con el backend');
        // Manejar errores si la solicitud no es exitosa
      }
    } catch (error) {
      console.error('Error al enviar el ping:', error);
      // Manejar errores de red u otros errores
    }
  };
  
  // Llamar a la función para enviar el ping al backend
  pingBackend();
  
 