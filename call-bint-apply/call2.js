let person ={
    ime: 'isko',
    surname: 'smajovic',
    value: 'man',
}

function findSomething ( surname, age ){                              //cudso ne radi preko arrow funkcije
    return `${this.ime} ${surname} ${age}`;
}

console.log(findSomething.call(person, ' sam ja  i imam', 22 ));

console.log(findSomething.apply(person, ['imam godina', 33])) //jedina razlika izemdju call i apply jeste sto sa apply vadimo podatke u obliku niza sto je mozyda i bolje nekada