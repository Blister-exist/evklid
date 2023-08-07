let items = document.getElementsByClassName('accordion__item');
let body = document.getElementsByClassName('accordion__body');
let titles = document.getElementsByClassName('accordion__marker');
function getVisible(target)
{
    obj = target.srcElement;
    switch(obj)
    {
        case titles[0]:
            items[0].classList.add('accordion__item_show')
            items[1].classList.remove('accordion__item_show')
            items[2].classList.remove('accordion__item_show')
            items[3].classList.remove('accordion__item_show')
            items[4].classList.remove('accordion__item_show')
            break;
        case titles[1]:
            items[0].classList.remove('accordion__item_show')
            items[1].classList.add('accordion__item_show')
            items[2].classList.remove('accordion__item_show')
            items[3].classList.remove('accordion__item_show')
            items[4].classList.remove('accordion__item_show')
            break;
        case titles[2]:
            items[0].classList.remove('accordion__item_show')
            items[1].classList.remove('accordion__item_show')
            items[2].classList.add('accordion__item_show')
            items[3].classList.remove('accordion__item_show')
            items[4].classList.remove('accordion__item_show')
            break;
        case titles[3]:
            items[0].classList.remove('accordion__item_show')
            items[1].classList.remove('accordion__item_show')
            items[2].classList.remove('accordion__item_show')
            items[3].classList.add('accordion__item_show')
            items[4].classList.remove('accordion__item_show')
            break;
        case titles[4]:
            items[0].classList.remove('accordion__item_show')
            items[1].classList.remove('accordion__item_show')
            items[2].classList.remove('accordion__item_show')
            items[3].classList.remove('accordion__item_show')
            items[4].classList.add('accordion__item_show')
            break;
    }
}

titles[0].addEventListener('click', getVisible);
titles[1].addEventListener('click', getVisible);
titles[2].addEventListener('click', getVisible);
titles[3].addEventListener('click', getVisible);
titles[4].addEventListener('click', getVisible);