
function Admin(){
fetch('http://localhost:8080/admin', {
    method: 'GET'
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let tabla = document.getElementById('tabla');
        tabla.innerHTML = `
            <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Contraseña</th>
            </tr>
        `;
        for(i =0; i < data.length; i++){
        let datos = data[i];
        tabla.innerHTML += `
            <tr>
            <td>${datos.id}</td>
                <td>${datos.usuario}</td>
                <td>${datos.contraseña}</td>
            </tr>
        `
        }
    })
}

function Consum(){
    fetch('http://localhost:8080/Consumidor', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let tabla = document.getElementById('tabla');
            tabla.innerHTML = `
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Direccion</th>
                    <th>Usuario</th>
                    <th>Contraseña</th>
                </tr>
            `;
            for(i =0; i < data.length; i++){
            let datos = data[i];
            tabla.innerHTML += `
                <tr>
                    <td>${datos.idC}</td>
                    <td>${datos.nombreC}</td>
                    <td>${datos.apellidoC}</td>
                    <td>${datos.direccionC}</td>
                    <td>${datos.usuarioC}</td>
                    <td>${datos.contraseñaC}</td>
                </tr>
            `
            }
        })
    }


    function Vend(){
        fetch('http://localhost:8080/Vend', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let tabla = document.getElementById('tabla');
                tabla.innerHTML = `
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Servicio Prestado</th>
                        <th>Años de experiencia</th>
                        <th>Ciudad</th>
                        <th>Usuario</th>
                        <th>Contraseña</th>
                        
                    </tr>
                `;
                for(i =0; i < data.length; i++){
                let datos = data[i];
                tabla.innerHTML += `
                    <tr>
                        <td>${datos.idV}</td>
                        <td>${datos.nombreV}</td>
                        <td>${datos.apellidoV}</td>
                        <td>${datos.direccionV}</td>
                        <td>${datos.servicioPrestadoV}</td>
                        <td>${datos.añosExpV}</td>
                        <td>${datos.ciudadV}</td>
                        <td>${datos.usuarioV}</td>
                        <td>${datos.contraseñaV}</td>
                    </tr>
                `
                }
            })
        }
    function Serv(){
        fetch('http://localhost:8080/Serv', {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                let tabla = document.getElementById('tabla');
                tabla.innerHTML = `
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Fecha de creacion</th>
                        <th>Estado</th>
                        
                    </tr>
                `;
                for(i =0; i < data.length; i++){
                let datos = data[i];
                tabla.innerHTML += `
                    <tr>
                        <td>${datos.idS}</td>
                        <td>${datos.nombreS}</td>
                        <td>${datos.descS}</td>
                        <td>${datos.fechaCreacionS}</td>
                        <td>${datos.estado}</td>
                        
                    </tr>
                `
                }
            })
        }
    
