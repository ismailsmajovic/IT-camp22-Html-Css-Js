const niz = [50, 50, 50, 50];

const aV =(num) =>{
    const sum = num.reduce((preValue, curValue) => preValue + curValue );
    return sum;
}

console.log(aV(niz));