
$(document).ready(function(){

    $.fn.equalCols = function(){ //Asignamos la nueva función equalCols
        var tallestHeight = 0; //Reinicia la variable que guarda la mayor altura
        $(this).each(function(){ //Comprueba uno por uno los elementos con el selector indicado
            var thisHeight = $(this).height(); //Guarda la altura del elemento
            if (thisHeight > tallestHeight){ // Si la altura es mayor que la anterior altura guardada, se asigna a la variable tallesHeight
                tallestHeight = thisHeight;
            }
        });
        $(this).height(tallestHeight); //Se asigna la mayor altura a los elementos con el selector indicado
    }
    

    //Se aplica el método con el selector '.column'
    $('.listas-pago').equalCols();

});