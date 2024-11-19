document.addEventListener('DOMContentLoaded', () => {
    const id = document.getElementById('id');
    const deleteBtn = document.getElementById('deleteBtn');

    const handleDelete = () => {
        const documento = id.value.trim();

        fetch(`http://localhost:8080/Delete/${documento}`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                console.log('Persona eliminada');
                return response.text();
            } else {
                console.log('Error al eliminar persona');
                return response.text();
            }
        })
    };

    deleteBtn.addEventListener('click', handleDelete);
});


