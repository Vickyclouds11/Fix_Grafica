document.addEventListener('DOMContentLoaded', () => {
    const NumInput = document.getElementById('num');
    const NomInput = document.getElementById('nom');
    const ApeInput = document.getElementById('ape');
    const DirInput = document.getElementById('dir');
    const ServInput = document.getElementById('serv');
    const ExpInput = document.getElementById('exp');
    const CiudInput = document.getElementById('ciud');
    const EmailInput = document.getElementById('email');
    const ContInput = document.getElementById('cont');
    const submitBtn = document.getElementById('submitBtn');
  
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
  
      fetch('http://localhost:8080/Post/Consumidor', {
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