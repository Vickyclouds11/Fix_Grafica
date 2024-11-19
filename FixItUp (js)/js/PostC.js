document.addEventListener('DOMContentLoaded', () => {
    const NumInput = document.getElementById('num');
    const NomInput = document.getElementById('nom');
    const ApeInput = document.getElementById('ape');
    const DirInput = document.getElementById('dir')
    const EmailInput = document.getElementById('email');
    const ContInput = document.getElementById('cont');
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
  
  