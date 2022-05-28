/*const DATA1 =[2,26,38,75,11,29];
const DATA2 =["a", "b", "c", "d", "e"];


//1)NAPRAVOTI PMOCNI NIZ KOJI CE DA SADRZI OVA DVA NIZA SPOJENA    2)IZ POMOCMNOG NIZA NAPRAVITI JOS JEDNOG POMONOG NIZA IZVADITI SVE PARNER BROJEVE 3)U  taj niz umetniuti broj 10 i broj 20 i vrati prvi pomcni i durgi pomocni niz

const Uradi =(array1, array2)=>{
    const spoj = array1.concat(array2);
    const spoj2 =[];

    for (let el of spoj2) {
        if (el% 2 === 0) {
            spoj.push(el);
        }
        
    }return ()

}

console.log(Uradi);
*/
//function filter

/*
const words = ['telvizor', 'daljinski', 'telefon', 'voda', 'ranac', 'stolica'];
const filterArray = words.filter((el)=>el.length > 4);
console.log(filterArray);

//function map
const nummbers = [2, 5, 3, 1, 10, 8, 7];

const sqnum =nummbers.map((el, index(0,3, 5))=>{

});

//
*/
const DATA1 =[1,3, 5, 2, 7, 6, ];

//el > 2 = el 7
//el > 2 && el < 8  =(el * 4 ) /2

const dogAgeHuman =(ages)=>{
   const humanAge = ages.map((age) => {
       if (el > 2 && el < 8 ) {
           return (el * 4) /2;
       }else if(el > 2){
           return el * 7;
       }
    });return dogAgeHuman;
};
console.log(dogAgeHuman(DATA1));


/*
const Uradi =(array1, array2)=>{
    const spoj = array1.concat(array2);
    const spoj2 =[];

    for (let el of spoj2) {
        if (el% 2 === 0) {
            spoj.push(el);
        }
        
    }return ()

}

console.log(Uradi);
*/

const DATA3 =[2,26,38,75,11,29];
const DATA4 =["a", "b", "c", "d", "e"];

const aWork = (array2, array4) =>{
    const spoj = array2.concat(array4);
    const spo3 = [];
    for(let el of spoj3){
        if (el % 2 === 0) {
            spoj.push(el);
        }
    }return [array2, array4];
}
console.log(aWork);
/*
const dogAgeHuman =(ages)=>{
    const humanAge = ages.map((age) => {
        if (el > 2 && el < 8 ) {
            return (el * 4) /2;
        }else if(el > 2){
            return el * 7;
        }
     });return dogAgeHuman;
 };
 console.log(dogAgeHuman(DATA1)); 

*/

const dogHumanAge =() =>{
    const humanAge2 = ages.map((age)=>{
        if (el > 2 && el < 8) {
            return (el * 4)/2;
        }else if(el > 2){
            return el * 7;
        }
    });return dogAgeHuman;
}
console.log(dogAgeHuman(DATA1));

