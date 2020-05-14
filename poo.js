class celular {
    constructor(){
        this.cor = 'Azul'
    }

    ligar(){
        return 'Ligando'
    }
}

let motorola = new celular()
motorola.cor = 'pretor'
console.log(motorola.cor)
console.log(motorola.ligar())