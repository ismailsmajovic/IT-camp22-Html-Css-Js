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

