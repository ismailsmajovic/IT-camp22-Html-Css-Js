/*Из низа бројева изаберите парне двоструке бројеве и израчунајте збир користећи методе филтера низа, мапирања и редукције.
 
нека бројеви = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];*/


const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const make =(numbers)=>{
    const parni = numbers.filter(num => num % 2 === 0 )
    
    const kvadrat = parni.map((num)=>num*num);

    const sum = kvadrat.reduce((prevvalue, curvalue)=>prevvalue+ curvalue);
    
    return sum;
}
console.log(make(num));