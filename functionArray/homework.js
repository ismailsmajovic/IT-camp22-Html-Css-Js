//Koriscenje funkcije push 
const clanovi = [12, 13, 14, 67, 874, 934, 98]

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

