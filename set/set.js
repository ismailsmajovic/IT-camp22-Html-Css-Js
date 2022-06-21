// OBjekat Set nam omgucava da skladistimo jedinstven tip podatka(primitivnosg ili referentnog), tj. mecmop imati duple vrednime

const ime = [22, 22, 22, 22, 22,];

const ime2 = [...new Set(ime)];         //koristimo spread(...) oprator  sa SET da bi nam vratili vrednost u obliku niza


console.log(ime)                        // Output: [ 22, 22, 22, 22, 22 ]

console.log(ime2)                    //Output: [22]  dakle kad primenitmo SET onda vracamo samo jednu jedinstvnu vrednost bez duplikata