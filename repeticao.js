//while
//do while - > vai fazer com que o programa rode pelomenos uma vez antes de começar a repetir

const operador = 5
for(let contador = 1; contador <= 10; contador++){
    console.log(`${operador} * ${contador} = ${operador * contador}`)
}


//for para lista usa o of
const animais = ['macaco', 'cachorro', 'galinha', 'pato']

for(let itens of animais){
    console.log(itens)
}

//for para percorrer objetos usa in
const prateleira = {macarrao : 5, acucar : 8, feijao : 11}
for(let itens in prateleira){
    console.log(itens , prateleira[itens])
}

const agenda = [
    {
        dia : '12/05/2020',
        assunto: 'Js',
        tema: 'listas'
    },
    {
        dia : '13/05/2020',
        assunto: 'Js',
        tema: 'for'
    }
]

for(let dia of agenda){
    for(let itens in dia){
        console.log('Hoje o ' + itens + ' é ' + dia[itens])
    }
}

//continue - > a mesma coisa do pass para o python 
//break - > vai parar o loop