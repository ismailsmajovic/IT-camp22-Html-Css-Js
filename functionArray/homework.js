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
/*
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

console.log(spojiNIz(spoji));*/
/*
const DATA1 =[1,3, 5, 2, 7, 6, ];

//el > 2 = el 7
//el > 2 && el < 8  =(el * 4 ) /2

const dogAgeHuman4 =(ages)=>{
   const humanAge = ages.map((age) => {
       if (age > 2 && age < 8 ) {
           return (age * 4) /2;
       }else if(age > 2){
           return age * 7;
       }else{
           return age;
       }
    });return humanAge;
};

console.log(dogAgeHuman4(DATA1));


//ovde cemo umesto el koristiti age; = ne funckcionise i ne radi posao, mora se koristiti el i morta se pozivati DATA1
//Koristi smo ali ne ide

const DATA2 = [1,3, 4, 7, 89, 14];

//el >2 = el 7
//el > 2 && el <10  =(return) (el * 4 )/4

const dogAgeHuman2 = (ages1)=>{
    const humanAge2 = ages1.map((age1)=>{
        if (age1 >2 && age1 < 10) {
            return (age1 * 4)/4;
        }else if(age1 > 2){
            return (age1 * 7);
        }else{
            return age1;
        }
    });return humanAge2;
}
console.log(dogAgeHuman2(DATA2));


// function map ona koja 
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((el) => Math.(el));

console.log(map1);
// expected output: Array [2, 8, 18, 32]

const dat = [23, 34, 89, 98];

*/

//1)NAPRAVOTI PMOCNI NIZ KOJI CE DA SADRZI OVA DVA NIZA SPOJENA    2)IZ POMOCMNOG NIZA NAPRAVITI JOS JEDNOG POMONOG NIZA IZVADITI SVE PARNER BROJEVE 3)U  taj niz umetniuti broj 10 i broj 20 i vrati prvi pomcni i durgi pomocni niz

/*
const dat1 =[2,26,38,75,11,29];
const dat2 =["a", "b", "c", "d", "e"];

const makeArr =(array1, array2) =>{
    const spoj = array1.concat(array2);
    const spoj2 = [];

    for(let el of spoj){
        if(el % 2 === 0){
            spoj2.push(el)
        }
    }spoj2.unshift(10, 20);
    return(spoj, spoj2);
}
console.log(makeArr(dat1, dat2));

*/
const dat1 =[2,26,38,75,11,29];
const dat2 =["a", "b", "c", "d", "e"];

const makeArr =(array1, array2) =>{
    const pomocni = array1.concat(array2);
    const parni =[];

    for(let clan of pomocni){
        if(clan % 2 === 0){
            parni.push(clan)
        }
    }parni.unshift(10,15);
    return  [pomocni, parni];        //pomocni && parni
}

console.log(makeArr(dat1, dat2));



// 
const DATA1 =[1,3, 5, 2, 7, 6, ];

//el > 2 = el 7
//el > 2 && el < 8  =(el * 4 ) /2

const dogAgeHuman2 =(ages) =>{
    const humanAge = ages.map((age)=>{
        if (age > 2 && age < 8) {
            return (el *4) / 2;
        }else if(age >2){
            return age * 7;
        }
    });return humanAge;
    
}
console.log(dogAgeHuman2(DATA1));
