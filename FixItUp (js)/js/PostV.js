document.addEventListener('DOMContentLoaded', () => {
  const NomInput = document.getElementById('nom');
  const ApeInput = document.getElementById('ape');
  const NumInput = document.getElementById('id');
  const DirInput = document.getElementById('dir');
  const ServInput = document.getElementById('serv');
  const ExpInput = document.getElementById('exp');
  const CiudInput = document.getElementById('ciu');
  const EmailInput = document.getElementById('correo');
  const ContInput = document.getElementById('pas');
  const submitBtn = document.getElementById('submitBtn');


  const handleSubmit = (event) => {
    event.preventDefault(); 


    fetch('http://localhost:8080/Post/Vend', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        idV: NumInput.value,
        nombreV: NomInput.value,
        apellidoV: ApeInput.value,
        direccionV: DirInput.value, 
        servicioPrestadoV: ServInput.value,
        añosExpV: ExpInput.value,
        ciudadV: CiudInput.value, 
        usuarioV: EmailInput.value,
        contraseñaV: ContInput.value,
      })
    })

    .then(response => response.json()) 
    .then(data => {
      console.log(data);  
      window.location.href = "RegExitos.html";
    })
    .catch(error => console.error('Error:', error));
  };

  document.getElementById('myForm').addEventListener('submit', handleSubmit);
});
