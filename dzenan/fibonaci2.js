 /*const niz = [1,2]

const makeThisTask = () => {
    //const niz = [1, 2];
    let i = 2;
    while (niz[i - 2] + niz[i - 1] <= 4000000) {
        niz.push(niz[i - 2] + niz[i - 1]);
        i++;
    }
    // We can do this:
    // return niz.filter((value) => value % 2 === 0).reduce((total, value) => total + value);
    // But, because of memory safe, we'll do this:
    const sumEven = niz.reduce((prevValue, curValue) => {
        if (curValue % 2 === 0) {
            return prevValue + curValue;
        } else {
            return prevValue;
        }
    }, 0);
    return sumEven;
}

console.log(makeThisTask());*/

/*let  x= 1;
 while(x<10){
     console.log(x);
    x++;
 }

 let y = 2;

 do{
     console.log(y)
 }while(y < 50);
*/

/*
const niz = [1, 2];
let i = 2;
while (niz[i - 2] + niz[i - 1] <= 4000000) {
    niz.push(niz[i - 2] + niz[i - 1]);
    i++;
}*/


/* Ova funkcija radi glAVNI PRINCINP FIBONACIJEVOG NIZA
const racunaj =()=>{

    const niz = [1, 2];
    let i = 2;
    const dva =  niz[i - 2] + niz[i - 1];
    //niz[i - 2] + niz[i - 1]
    return dva;

}
console.log(racunaj())
*/

const finFibNum =() =>{
    const array = [1, 2]
    let i = 2;
    while (array[i-2]  + array[i-1] <= 4000000) {
        array.push(array[i-2]  + array[i-1])
        i++;
    }    

    const saberi = array.reduce((prev, curr)=>{
        if (curr % 2 === 0) {
            return prev + curr;
        }else{
            return prev;
        }
    }, 0);                                  //way 0 ?
    return saberi;
}
console.log(finFibNum())

/* moze i ovako ali je komlikovnije
if (curr % 2 === 0) {
            return prev + curr;
        }else if(prev % 2 === 0){
            return prev;
        } */