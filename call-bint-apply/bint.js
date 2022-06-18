const myPhone ={
    marka: 'huawei',
    model: 'p30 lite',
    starost :{
        polovniTelefoni:{
            godiste1: 2012,
            godiste2: 2013,
            godiste3: 2014,
        },
        noviTelefoni:{
            godiste: 2022,
            godiste2: 2021,
            godiste3: 2020,
        }
    },
    boje:{
        boja1: 'crvena',
        boja2: 'crna',
        boja3: 'bela'
    }

}

function withBintFunction(expirience, rating){
    return `${this.marka} ${this.model} ${expirience} ${rating}`;
}


//sa funcjok Bint
const withBind = withBintFunction.bind(myPhone);

console.log(withBind('nije lose', 9))





// a ovo je sa apply function
//console.log(withBintFunction.apply(myPhone, ['Imam dobro iskustvo', 8]))


//a ovo je sa call funckcijom
//console.log(withBintFunction.call(myPhone, 'UZASNO ISKUSTVO', -111111 ))





































/*

const myComputers ={
    mark: 'Lenovo',
    model: 'I5 generacije',
    old:{
        new:{
            age1:2022,
            age2: 2021,
            age3: 2020,
        },
        oldes:{
            age1: 2012,
            age2: 2013,
            age3: 2014,
        }
    }
}

function findBestLaptop(colors, rating){
    return `${this.mark} ${this.model} ${colors} ${rating}`
}


// sa funckcijim apply
console.log(findBestLaptop.apply(myComputers, ['je crvene boje i ima ocenu,', 10]));

// sa funckcijom call
console.log(findBestLaptop.call(myComputers, 'je crne boje i ima ocenu, ', 45));



//sa finckcijom bind
const withBind = findBestLaptop.bind(myComputers);

console.log(withBind('je bele boje i ima cistu,', 100))

*/