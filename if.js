/*
    == - Compara valor sem levarem consideração o tipo 
    === - Compara valor levando em consieração o tipo
*/

// UM PEQUENO SEMAFORO - IF

let cor = 'vermelho'

if (cor == 'verde'){
    console.log('Siga')
}else if(cor == 'amarelo'){
    console.log('Atenção')
}else if(cor == 'vermelho'){
    console.log('Pare')
}else{
    console.log('Cor inválida!')
}

// UM PEQUENO SEMAFORO - SWITCH
switch (cor){
    case 'verde':
        console.log('Siga')
        break

    case 'amarelo':
        console.log('Atenção')
        break

    case 'vermelho':
        console.log('Pare')
        break

    default:
        console.log('Cor inválida!')
}