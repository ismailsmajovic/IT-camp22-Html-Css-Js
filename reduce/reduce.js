/*const data = [26,18,16,22,30,28];

const sumAV = data.reduce((previusvalue, currentvalue)=>{
    (previusvalue, currentvalue );

    return sumAV;
})
console.log(sumAV);

const  arr = [2132, 4324, 232];

const prikayi = arr.every(el > 50);
*/



//devoloper mozila

/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue
); 

console.log(sumWithInitial);
// expected output: 10
*/

const data = [26,18,16,22,30,28];

const av =(num)=>{
    const num2 = num.reduce((preValue, currentValue)=> preValue + currentValue);
}
console.log(av(data))