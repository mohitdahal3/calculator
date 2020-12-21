let screen = document.getElementById('input')
let buttons = document.querySelectorAll('button')
let screentxt = ''
for (let button of buttons) {
    button.addEventListener('click', (e) => {
        let btntext = e.target.innerText
        if (btntext == 'x') {
            btntext = '*'
        } else if (btntext == '÷') {
            btntext = '/'
        } else if (btntext == 'C') {
            screentxt = ''
            btntext = ''
        } else if (btntext == '=') {
            btntext = ''
            try {
                screen.value = eval(screentxt)
                screentxt = screen.value
            } catch (error) {
                // alert('Enter proper syntax')
                screentxt = prompt('Error!\nYou can enter value manually',screentxt)
                if(screentxt==null){
                    screentxt = ''
                }
            }
        } else if (btntext == '←') {
            btntext = ''
            screentxt = screentxt.substring(0,screentxt.length-1)
        }
        screentxt += btntext
        screen.value = screentxt
        console.log(btntext);
    })
}


