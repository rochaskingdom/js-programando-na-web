var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    
    var paciente = document.querySelectorAll(".paciente");

    paciente.forEach(function(paciente) {

        var tdNome = paciente.querySelector(".info-nome")
        var nome = paciente.textContent;
    })

    
});
