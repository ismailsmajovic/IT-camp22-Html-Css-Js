const person ={
    name:'johnn',
    age: 22,
    surname: 'jonsonovovic',
    theBestQuality: 'covek',
}

function sayHelo(){
    console.log(`Cao ${this.name} ${this.surname}, cuo sam da si dobar  ${this.theBestQuality} `);
}

//console.log(sayHelo.call(person))  ///vec imamo gore isois u konzoli tako da ga ne motamo ovde pozivati console.log
sayHelo.call(person);
//sayHelo(person);
/* Dakl funkcija Call nam omogucava  i позива функцију са this овом вредношћу и аргументима који су дати појединачно. 
Bez ove funckcije this vAN fukcije ili objektra nema nikakvog smisla*/


