// Function freeze kad se pozove onemogucava da se nad datim objektom niti dodaju novi propertiji niti vrsi izmena vec postojecih vredosti

const objectNew  = {
    name: 'Isko',
    surname: 'smajovic',
    age: 24
}

Object.freeze(objectNew);

objectNew.surname = 'Bralic',               // Ne dozvoljva promenu vec poostojecih propertija

objectNew.strucnaSprema = 'visa-skola';     // Ne dozvoljva unos novih propertija

console.log(objectNew);                     // dobicermo isti output kao i originalni