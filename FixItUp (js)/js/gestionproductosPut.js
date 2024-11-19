document.addEventListener('DOMContentLoaded', () => {
    const IdInput = document.getElementById('doc');
    const NomInput = document.getElementById('nombre');
    const ContInput = document.getElementById('contraseña');
    const submitBtn = document.getElementById('submitBtn');

const handleUpdate = () => {
    const documento = IdInput.value.trim();
    const nombre = NomInput.value.trim();
    const contraseña = ContInput.value.trim();

    const data = {
        nombre: nombre,
        password: contraseña
    };

    fetch(`http://localhost:8080/${documento}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (response.ok) {
            console.log("Datos actualizados :D");
        } else if (response.status === 404) {
            console.log("Persona no encontrada");
        } else {
            console.log("ERROR en la actualización");
        }
    })
    .catch(error => console.error('Error:', error));
    };

    submitBtn.addEventListener('click', handleUpdate);
});


