/*const niz = [50, 50, 50, 50];

const aV =(num) =>{
    const sum = num.reduce((preValue, curValue) => preValue + curValue );
    return sum;
}

console.log(aV(niz));
*/


const array = [25, 25, 25, 25];

const aV =(age)=>{
    const sum = age.reduce((prev, curr) => prev + curr);
    const srednjaV = sum /age.length
    return [sum, srednjaV];
}
console.log(aV(array));
















































