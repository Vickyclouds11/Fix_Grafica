document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('services-container');

    const fetchServices = () => {
        fetch('http://localhost:8080/Get/Serv')
            .then(response => {
                if (!response.ok) throw new Error('Error al obtener los servicios');
                return response.json();
            })
            .then(services => {
                container.innerHTML = ''; 
                services.forEach(service => {
                    const serviceHTML = `
                        <div class="grid-item">
                            <h3 id="h3s">${service.nombreS}</h3><br>
                            <img id="imgserv" src="https://via.placeholder.com/150" alt="Servicio">
                            <p id="ps">${service.descS}</p>
                            <a id="botonAzul" href="PostV.html" class="btn btn-secondary btn-lg">Agendar servicio</a>
                        </div>`;
                    container.insertAdjacentHTML('beforeend', serviceHTML);
                });
            })
            .catch(error => console.error('Error:', error));
    };

    fetchServices(); 
});
