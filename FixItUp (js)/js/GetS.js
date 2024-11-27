/*document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('services-container');

    const fetchServices = () => {
        fetch('http://localhost:8080/Serv')
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
                            <img id="imgserv" src="./img/pagina.jpg" alt="Servicio">
                            <p id="ps">${service.descS}</p>
                            <a id="botonAzul" href="PostV.html" class="btn btn-secondary btn-lg">Agendar servicio</a>
                        </div>
                        <br>
                        <br>`;
                    container.insertAdjacentHTML('beforeend', serviceHTML);
                });
            })
            .catch(error => console.error('Error:', error));
    };

    fetchServices(); 
}); */

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('services-container');
    const scheduleModal = document.getElementById('scheduleModal');
    const closeModal = document.getElementById('closeModal');
    const scheduleForm = document.getElementById('scheduleForm');
    
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const municipioInput = document.getElementById('municipio');
    const direccionInput = document.getElementById('direccion');
    
    let selectedService = null; 

    
    const openModal = (service) => {
        selectedService = service; 
        scheduleModal.style.display = 'block';
    };

    
    const closeModalHandler = () => {
        scheduleModal.style.display = 'none';
        selectedService = null; 
    };

    
    const handleScheduleSubmit = (event) => {
        event.preventDefault();

       
        if (!selectedService) {
            alert('Por favor, selecciona un servicio.');
            return;
        }

        
        const scheduleData = {
            serviceId: selectedService.idS, 
            serviceName: selectedService.nombreS, 
            date: dateInput.value,
            time: timeInput.value,
            municipio: municipioInput.value,
            direccion: direccionInput.value
        };

        
        fetch('http://localhost:8080/Post/Agenda', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(scheduleData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Agendado con éxito:', data);
            closeModalHandler(); 
            alert('Servicio agendado con éxito');
        })
        .catch(error => {
            console.error('Error al agendar:', error);
            alert('Hubo un error al agendar el servicio.');
        });
    };

    
    const fetchServices = () => {
        fetch('http://localhost:8080/Serv')
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
                            <img id="imgserv" src="./img/pagina.jpg" alt="Servicio">
                            <p id="ps">${service.descS}</p>
                            <button class="btn btn-secondary btn-lg" id="botonAzul" data-service-id="${service.idS}" data-service-name="${service.nombreS}">Agendar servicio</button>
                        </div>
                        <br>
                        <br>`;
                    container.insertAdjacentHTML('beforeend', serviceHTML);
                });

                
                const buttons = document.querySelectorAll('#botonAzul');
                buttons.forEach(button => {
                    button.addEventListener('click', (event) => {
                        const serviceId = event.target.getAttribute('data-service-id');
                        const serviceName = event.target.getAttribute('data-service-name');
                        const selectedService = {
                            idS: serviceId,
                            nombreS: serviceName
                        };
                        openModal(selectedService); 
                    });
                });
            })
            .catch(error => console.error('Error:', error));
    };

    
    fetchServices(); 

   
    closeModal.addEventListener('click', closeModalHandler);

    
    scheduleForm.addEventListener('submit', handleScheduleSubmit);

    
    window.addEventListener('click', (event) => {
        if (event.target === scheduleModal) {
            closeModalHandler();
        }
    });
});




