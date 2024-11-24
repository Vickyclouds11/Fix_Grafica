document.addEventListener('DOMContentLoaded', () => {
    const NumInput = document.getElementById('id');
    const NomInput = document.getElementById('nombre');
    const DescInput = document.getElementById('desc');
    const FechaInput = document.getElementById('fecha')
    const EstInput = document.getElementById('estado');
    const submitBtn = document.getElementById('submitBtn');
  
  
    const handleSubmit = (event) => {
      event.preventDefault(); 
  
  
      fetch('http://localhost:8080/Post/Serv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
        
          idS: NumInput.value,
          nombreS: NomInput.value,
          descS: DescInput.value,
          fechaCreacionS: FechaInput.value,  
          estado: EstInput.value
        })
      })
  
      .then(response => response.json()) 
      .then(data => {
        console.log(data);  
        window.location.href = "ServExitos.html";
      })
      .catch(error => console.error('Error:', error));
    };
  
    document.getElementById('myForm').addEventListener('submit', handleSubmit);
  });
  
