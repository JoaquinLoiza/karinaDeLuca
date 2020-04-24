
$(document).ready(function(){
    
    var menuBtn = $('.desplegable');
    var menu = $('.barnav ul');

    menuBtn.click(function(){
            
        if(menu.hasClass('mostrar')){

            menu.removeClass('mostrar');
        }
        else {
            menu.addClass('mostrar');
        }
    });
});