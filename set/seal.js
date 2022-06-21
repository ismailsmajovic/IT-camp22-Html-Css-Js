// Function Seal() dozvooljava da u objektu menjamo vec postojece vrednosti ali ne dozvoljava da dodajemo nove propertije( kljuceve  vrednosti)

const noviObjekat ={
    name: 'Hasan',
    surname: 'Bralic',
    age: 25

}

 Object.seal(noviObjekat)

noviObjekat.obrazovanje = 'visa skoola';           // ne dozvoljava dodavnje novih propertija          
noviObjekat.age = 3234;                             // dozvoljav izmeenu vrednosti u  vec postojecim propertijima

console.log(noviObjekat)