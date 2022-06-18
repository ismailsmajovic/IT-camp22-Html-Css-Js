const myCar = {
    marka: 'Audi',
    model: '80',
    godiste :{
        nova: 2022,
        polovna: 2010,
        stara: 1990,
        oldajmeri:{
            godinaProizvodnje: 1950,
            godinaProizvodnje2: 1960,
            godinaProizvodnje3: 1970
        }
    }
}

function makeSomethnig(transmision, rating){
    return `${this.marka} ${this.godiste.oldajmeri.godinaProizvodnje3} ${transmision} ${rating}`;
}

// sa call funckcijom
console.log(makeSomethnig.call(myCar, 'godiste, i ima automtski menjac i ocenu', 9.5 ));

// sa apply funkcijom
console.log(makeSomethnig.apply(myCar, ['to je dobar oldjamer ima automtski menjac i ocenu ', 6 ]))

