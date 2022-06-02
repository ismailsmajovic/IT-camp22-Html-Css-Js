/*const array = [12, 32, 43, 78, 87, 9, 6, 99, 154];

const playWithArray =(nizovi)=>{
    const make = nizovi.filter((niz)=> {
        if(niz % 2 === 0){
            console.log('dobro je')
        }else if(niz % 3 === 0){
            console.log('lose');
        }else{
            return niz;
        }
    })
    return make;
}
console.log(playWithArray(array));
*/


//laksi nacin
const array = [12, 32, 43, 78, 87, 9, 6, 99, 154];

const playWithArray =(nizovi)=>{
    const make = nizovi.filter((niz)=> niz % 2 === 0   || niz % 3 === 0 || niz )          //how to use if and console log?
    return make;
}
console.log(playWithArray(array));


// const brojevi = [21, 32, 78, 12, 98] Sledeci niz kilometara pretvoriti u metre, i te metre kvadriraTI I KVADRte tih metrara sabrati i smestity u promenjivu Konacno resenje i na kraju vrati tu promenjicvu

const brojevi = [1, 3, 8, 2, 9];

const metriUKilomerte =(numbers)=>{
    const metri = numbers.map((num) =>{
        return num * 100;
    });
     const  kvadrat = metri.map((num) =>{
         return num * num;
     })
     const konacnoResenje = kvadrat.reduce((total, num)=>{          //da li stavio totsal ili value ili kavdrat nebitno je reyultat je isti
         return total + num;
     });
     return [  metri, kvadrat, konacnoResenje]; 
}
console.log('ovo je resenje:',metriUKilomerte(brojevi));