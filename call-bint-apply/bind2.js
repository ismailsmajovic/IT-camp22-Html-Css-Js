const myComputers ={
    mark: 'Lenovo',
    model: 'I5',
    boje:{
        boja1: 'crvena',
        boja2: 'bela',
        boja3: 'crna'
    }
}

function withBintFunction(colors, rating){
    return `${this.mark} ${this.model} ${colors} ${rating}`
}


// with CALL function
console.log(withBintFunction.call(myComputers, 'ima crvenu(call) boju, i ocenu', 3));


//with APPLY function
console.log(withBintFunction.apply(myComputers, ['ima belu (apply) boju, i ocenu', 4]));



//with BIND function
const withBind = withBintFunction.bind(myComputers);

console.log(withBind('ima crnu(bind) boju, i ocenu', 5))