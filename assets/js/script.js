$( document ).ready( function () {
    // Tooltip
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })
    // Cambiar h3 a color rojo
    $("h3").on('dblclick', function (){
        $(this).css("color", "red");
    });
    // Ocultar contenido de las tarjetas
    $(".titulo").on("click", function () {
        $('.ocultarinfo').toggle();
    });
    // Enviar alerta mediante el id enviarCorreo
    $("#enviarCorreo").on('click', function (event) {
        alert("El correo fue enviado correctamente...")
    });
});