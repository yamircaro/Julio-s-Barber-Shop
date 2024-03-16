document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Simulamos la consulta de disponibilidad
    let availability = Math.random() < 0.5; // Simulamos una respuesta aleatoria
    
    if (availability) {
        // Si hay disponibilidad
        alert("¡Hay disponibilidad para la fecha y hora seleccionadas!");
        let serviceName = prompt("Por favor, elija el servicio que desea:");
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;
        
        // Aquí podrías enviar la información al servidor para manejar la confirmación de la cita
        
        alert("¡Cita confirmada para el servicio de " + serviceName + " el " + date + " a las " + time + "!");
    } else {
        // Si no hay disponibilidad
        let suggestAnotherTime = confirm("Lo sentimos, no hay disponibilidad para la fecha y hora seleccionadas. ¿Desea sugerir otro horario?");
        
        if (suggestAnotherTime) {
            // Si el cliente acepta sugerir otro horario
            alert("Por favor, seleccione otro horario.");
        } else {
            // Si el cliente no acepta sugerir otro horario
            alert("Gracias por su interés. Por favor, intente nuevamente en otro momento.");
        }
    }
});

