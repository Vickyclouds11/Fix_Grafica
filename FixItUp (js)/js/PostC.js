document.addEventListener('DOMContentLoaded', () => {
    const NumInput = document.getElementById('identificacion');
    const NomInput = document.getElementById('nombre');
    const ApeInput = document.getElementById('apellido');
    const DirInput = document.getElementById('direccion')
    const EmailInput = document.getElementById('correo');
    const ContInput = document.getElementById('password');
    const submitBtn = document.getElementById('submitBtn');
  
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
  
      fetch('http://localhost:8080/Post/Consumidor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
          idC: NumInput.value,
          nombreC: NomInput.value,
          apellidoC: ApeInput.value,
          direccionC: DirInput.value,  
          usuarioC: EmailInput.value,
          contraseñaC: ContInput.value,
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
