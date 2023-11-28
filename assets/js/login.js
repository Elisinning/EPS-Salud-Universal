document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const tipoDocumento = document.getElementById('tipoDocumento').value;
    const numeroDocumento = document.getElementById('numeroDocumento').value;
    const contrasena = document.getElementById('password').value;
  
    const datosLogin = {
        tipoDocumento: tipoDocumento,
        numeroDocumento: numeroDocumento,
        contrasena: contrasena
    };
  
    axios.post('http://localhost:3001/login', datosLogin)
        .then(response => {
            if (response.status === 200) {
                console.log('Inicio de sesión exitoso');
                window.location.href = 'afiliados/afiliados.hml'; // Redirige a la página principal luego del inicio de sesión exitoso
            } else {
                console.error('Error en el inicio de sesión:', response.statusText);
                // Puedes mostrar un mensaje de error al usuario
            }
        })
        .catch(error => {
            console.error('Error al iniciar sesión:', error.message);
            // Puedes mostrar un mensaje al usuario indicando que hubo un problema al iniciar sesión
        });
});
