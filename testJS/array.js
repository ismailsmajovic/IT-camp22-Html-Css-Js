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
/*
const array = [12, 32, 43, 78, 87, 9, 6, 99, 154];

const playWithArray =(nizovi)=>{
    const make = nizovi.filter((niz)=> niz % 2 === 0   || niz % 3 === 0 || niz )          //how to use if and console log?
    return make;
}
console.log(playWithArray(array));

*/



//  PRVI ZADTAK const brojevi = [21, 32, 78, 12, 98] Sledeci niz kilometara pretvoriti u metre, i te metre kvadriraTI I KVADRte tih metrara sabrati i smestity u promenjivu Konacno resenje i na kraju vrati tu promenjicvu

const brojevi = [1, 3, 8, 9];

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




//  OVOM zadtsaku uraditi jos jedan niz
const brojevi3 = [1, 3, 8, 9];
const brojevi4 = [2, 5, 7, 10];
//kako radit sa vise nizova

const metriUKilomerte2 =(numbers2, numbers3)=>{
    
    const noviniz = numbers2.concat(numbers3);

    const metri2 = noviniz.map((nums) =>{
        return nums * 100;  
    });
     const  kvadrat2 = metri2.map((nums) =>{
         return nums * nums;
     })
     cons
     const konacnoResenje2 = kvadrat2.reduce((kvadrat2, nums)=>{          //da li stavio totsal ili value ili kavdrat nebitno je reyultat je isti
         return kvadrat2 + nums;
     });
     return [metri2,  konacnoResenje2]; 
}
console.log('ovo je plan, i radsi samo ako promenimo redosled pozivanja:',metriUKilomerte2(brojevi3, brojevi4));
