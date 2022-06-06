
/*const fib = [1, 2, 3,4, 5, 6,7];

const sumFibonaci =()=>{

    //const fib = [1, 2, 3,4, 5, 6,7];

    for (let index = 0; index <= 40; index++) {
        //console.log(fib[3]);
       
    }
    return fib;
}
console.log(sumFibonaci(fib));
*/

//const fib =[1,2,3,5, 8, 13, 21, 34];
/*
const prazan =[1,2,3,5, 8, 13, 21, 34,55,89];

const makeFibonaci =(numbers)=>{
    //const fibonaci2 = fibonaci.reduce((prev, curr)=> prev + curr);

    const fibonaci = numbers.map((num)=> {
        if (num < 400) {
            return numbers.reduce((prev, curr)=> prev + curr);
            //numbers.reduce((prev, curr)=> prev + curr);
        }

    });

    //const fibonaci2 = fibonaci.reduce((prev, curr)=> prev + curr);

    //const fibonaci2 = fibonaci.reduce((prev, curr)=> prev + curr);

    //const fibonaci2 = fibonaci.reduce((prev, curr)=> prev + curr);
        /*if (niz <= 40) {
            const fib2 = nizovi.reduce((prev, curr)=>{
                return prev + curr;
                
            });return fib2;
        } */
        //const sum = fibonaci2.reduce((total, ukupno)=> total + ukupno);
  /*  return fibonaci;
}
console.log(makeFibonaci(prazan));

*/

/*
const fibonaci2 =()=>{
    for (let index = 0; index < 40; index++) {
        //const element = array[index];
        const fib = numbers.reduce((prev, curr)=> prev + curr);
    }
    //const fib = numbers.reduce((prev, curr)=> prev + curr);
}*/


















/* jedino da valja
const prazan =[1,2,3,5, 8, 13, 21, 34,55,89];

const makeFibonaci =(numbers)=>{
    

    const fibonaci = numbers.map((num)=> {
        if (num < 400) {
            return numbers.reduce((prev, curr)=> prev + curr);
            
        }

    });

   
    return fibonaci;
}
console.log(makeFibonaci(prazan));
*/
//const n = 100;


/* bezveze nesto 
function fib(n){
    const n = 1;
    if (n < 3) {
        return 1;

        
    }
    let prev = 1;

    let curr = 1;

    for (let i = 2; i < n; i++) {
        const curr = prev + curr;
         prev = curr;
         curr = next;
        
    }
    return curr;
}
console.log(fib(n))
*/









// ovo resenje stvarno radi ALI
/*
const arr = [0,1];
//let a, b;

const makeFibonaci=(num)=>{

    //const num = 400;
    let a, b;
    for (let i = 2; i <34 ; i++) {
        a = arr[i-1];
        b = arr[i-2];
        arr.push(a + b);
    }
    //return arr;
    const fibonaci = arr.reduce((prev,curr)=>prev + curr);
    return [arr, fibonaci];
}
console.log(makeFibonaci());
*/

const fib = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89,];

const makeFibonaci =(numbers)=>{
    const fib = numbers.map((num)=>  num.push())
}
console.log(makeFibonaci(fib))