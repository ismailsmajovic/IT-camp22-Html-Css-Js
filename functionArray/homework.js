//Koriscenje funkcije push 
/*const clanovi = [12, 13, 14, 67, 874, 934, 98]

 const nadjiPunoletne =(ages)=>{
    const addults = [];
    const error = 'ovo je velika greska';

    for (let age of ages) {
        if (age > 1800) {
            addults.push(age)
        }else if(age > 18000){
        addults.push(age);
    }else{
        console.log(error);
    }

    }return addults;

 }

console.log(nadjiPunoletne(clanovi));
*/
//function concat

const clanovi2 = [12, 22, 10, 43, 87, 32, 98];

const spojiNIz =(nizovi)=>{
    const dodaj = ['lenovo'];
    const dodaj2 = ['dell'];

    for (let niz of nizovi) {
        if (niz > 20) {
            const spoji = dodaj.concat(dodaj2);
        }
        
    }return spoji;
}

console.log(spojiNIz(spoji));






