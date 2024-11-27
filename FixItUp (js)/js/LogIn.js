document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const correo = document.getElementById("correo").value;
  const password = document.getElementById("password").value;
  const rol = document.querySelector('input[name="rol"]:checked'); // Obtiene el rol seleccionado

  if (!rol) {
    alert("Por favor, selecciona un rol antes de continuar.");
    return;
  }

 
  const ruta = rol.value === "vendedor"
    ? "http://localhost:8080/api/auth/loginV"
    : "http://localhost:8080/api/auth/login";

  try {
    const response = await fetch(ruta, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        usuario: correo,
        contraseña: password,
      }),
    });

    const message = await response.text();
    if (response.ok) {
      alert(message);
      // Redirige a diferentes páginas según el rol
      window.location.href = rol.value === "vendedor" 
        ? "PagPrinc.html" 
        : "PagPrinc.html";
    } else {
      alert("Error: " + message);
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    alert("Error al conectar con el servidor");
  }
});

