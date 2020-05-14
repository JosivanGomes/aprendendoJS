window.
    addEventListener(
        'focus', event => {
            console.log('Focos pocus!')
        }
    )

document.
    addEventListener(
        'click', event => {
            console.log('Clicks picks')
        }
    )


//DATAS
let agora = new Date()
console.log(agora.toLocaleDateString('pt-br'))