var butt = document.getElementById('search_button')
var inp = document.getElementById('search_input')
var cnl = document.getElementById('search_cancel')
var field = document.getElementById('search_field')
var logo = document.getElementById('header__logo')

//________________Визуал____________________________

function logo_move(){
    logo.style.flex = '1 1 30%';
}

function logo_unmove(){
    logo.style.flex = '1 1 50%';
}

butt.addEventListener('click', function(){
    inp.style.display = 'block';
    cnl.style.display = 'block';
    field.classList.add('header__search_active');
    logo_move();
})
cnl.addEventListener('click', function(){
    if (inp.value)
    {
        inp.value = null;
    }
    else
    {
        inp.style.display = 'none';
        cnl.style.display = 'none';
        field.classList.remove('header__search_active');
        logo_unmove();
    }
})

//____________________Функционал____________________________