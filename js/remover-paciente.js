var pacientes = document.querySelectorAll(".paciente");

pacientes.forEach(function(paciente) {

    paciente.addEventListener("dblclick", function() {

        console.log("dbl click");
        this.remove();
        
    });
});
