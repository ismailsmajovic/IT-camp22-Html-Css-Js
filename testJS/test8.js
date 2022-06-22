const prviObjektat = {
    name: 'Hasan',
    surname:'Bralic',
    age: 32
}

function makeSommething (colors, rating){
    return `${this.name} ${this.surname} ${colors}${rating}`
}

console.log(makeSommething.call(prviObjektat, 'crne boje ', 8));

console.log(makeSommething.apply(prviObjektat, ['zute boje ', 10]));

const withBInd = makeSommething.bind(prviObjektat);
console.log(withBInd ('bele boje ', 100))

