
function Admin(){
fetch('http://localhost:8080/Admin', {
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
