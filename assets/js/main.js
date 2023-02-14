let click = document.getElementById('click');
let number = document.getElementById('number');
let prog = document.getElementById('prog');
let counter = 0;
click.onclick = function () {       
        let timer = setInterval(function () {
            prog.style.width = (counter+=10) +'%';
            number.innerHTML -= 1;
            if(number.innerHTML==0){
                clearInterval(timer)
            }
        }, 1000);
}

