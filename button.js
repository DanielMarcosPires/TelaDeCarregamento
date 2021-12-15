
function button(s){
    var b = window.document.body
    switch(Number(s = prompt('digite 1 = cores invertido a 2 = normal'))){
        case 1 : b.style.background = 'black'
            b.style.color = 'white'
        break;
        case 2 : b.style.background = 'cyan'
                b.style.color = 'black'
        break;
    }
}