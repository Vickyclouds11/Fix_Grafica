document.addEventListener('DOMContentLoaded', () => {
  const NumInput = document.getElementById('num');
  const EmailInput = document.getElementById('email');
  const ContInput = document.getElementById('cont');
  const submitBtn = document.getElementById('submitBtn');


  const handleSubmit = (event) => {
    event.preventDefault(); 


    fetch('http://localhost:8080/Post/Admin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: NumInput.value,
        usuario: EmailInput.value,
        contraseña: ContInput.value,
      })
    })

    .then(response => response.json()) 
    .then(data => {
      console.log(data);  

      
      const tabla = document.getElementById('tabla');
      const nuevaFila = document.createElement('tr');
      nuevaFila.innerHTML = `
        <p>Usuario registrado correctamente</p>
      `;
      tabla.appendChild(nuevaFila);
    })
    .catch(error => console.error('Error:', error));
  };

  document.getElementById('myForm').addEventListener('submit', handleSubmit);
});

