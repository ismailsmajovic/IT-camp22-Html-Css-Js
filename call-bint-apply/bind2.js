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
    return `${this.mark} ${this.model} ${colors} ${rating}`;
}

//with call function 
console.log(withBintFunction.call(myComputers, 'je crvene boje', 9));

//with apply function
console.log(withBintFunction.apply(myComputers, ['je bele boje', 8]));

//with bind function 
const withBind = withBintFunction.bind(myComputers);
console.log(withBind('je crne boje', 6));



