function capturarDatos() {
    const cedula = document.getElementById("cedula").value;
    const nombre = document.getElementById("nombre").value;
    const apellidos = document.getElementById("apellidos").value;
    const direccion = document.getElementById("direccion").value;

    const datos = {
        cedula: cedula,
        nombre: nombre,
        apellidos: apellidos,
        direccion: direccion
    };
const datosArray = JSON.parse(localStorage.datosArray) || [];
    const cedulaExiste = datosArray.some(function (item) {
        return item.cedula === cedula;
        
      
      
    });

    if (cedulaExiste) {
        alert(`La cédula ${cedula} ya está registrada.`);
    } else {
        
        datosArray.push(datos); 
        localStorage.datosArray = JSON.stringify(datosArray);datosAlmacenados(datosArray);
    }
}
    if (!localStorage.datosArray) {
        localStorage.datosArray = JSON.stringify([]);
    }
    
    const datosArray = JSON.parse(localStorage.datosArray); datosArray.push(datos);
    localStorage.datosArray = JSON.stringify(datosArray);
datosAlmacenados(datosArray);

function datosAlmacenados(datosArray) {
    const listaDatos = document.getElementById("datosAlmacenados");
    listaDatos.innerHTML = "";

    datosArray.forEach(function (datos, index) {
        const listItem = document.createElement("li");
        listItem.textContent = ` Nombre y apellido: ${datos.nombre}${datos.apellidos}, Cédula: ${datos.cedula},  Dirección: ${datos.direccion}`;
        listaDatos.appendChild(listItem);
    });
}
document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.datosArray) {
        const datosArray = JSON.parse(localStorage.datosArray);
        datosAlmacenados(datosArray);
    }
});

function buscarPersona() {
    const cedulaBuscada = document.getElementById("buscarCedula").value;
    const datosArray = JSON.parse(localStorage.datosArray);
const personaEncontrada = datosArray.find(function (datos) {
        return datos.cedula === cedulaBuscada;
    });

    if (personaEncontrada) {
        const nombreCompleto = `${personaEncontrada.nombre} ${personaEncontrada.apellidos}`;
        alert(`Persona registrada con la cedula: ${cedulaBuscada}: ${nombreCompleto}`);
    } else {
        alert(`No se encontró ningun registro con el numero: ${cedulaBuscada}`);
    } 
    
}
function borrarDatos(){
    if (confirm("!se borraran todos los datos registrados¡")) {
        localStorage.removeItem("datosArray");
        const listaDatos = document.getElementById("datosAlmacenados");
        listaDatos.innerHTML = ""; 
    }
}
