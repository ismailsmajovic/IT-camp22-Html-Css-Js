/*const cars = ['bmw', 4, NaN, "", 0, 29, NaN, -0, undefined, null ]






for (let i = 0; i < cars.length; i++) {
    if(cars[i]){
        console.log(cars[i])
    }else{
        console.log('netacno')
    }
}



let niz = new Array('prvi clan', 'drugi clan ', 'treci');
 console.log(niz);
//first
  noviNiz = [1, 2, 3, 4]

 noviNiz= noviNiz.push("clan"[6])
 console.log(noviNiz);




//second exam

let niz2=['prvi', 'drugi', 'treci'];

niz2 = niz2.pop('novi clan', [4])
 console.log(niz2);

console.log()



let i = 23;




const niz =['bmw', 'audi','mb', 12, 0, -1, -0, undefined, null, false, NaN, "", -24, 09];

for (let i = 0; i < niz.length; i++) {
        if(niz[i]){
            console.log(niz[i]);
        }else{
            console.log('netacno');
        }

        
    
}


*/
let noviNiz =[28, 834, 83, 9, 'nesto', null];

for ( let i = 0; i < noviNiz.length; i++) {
    if(typeof(Number)){
        console.log('ovo je string:', noviNiz[i]);     // kako da uzvucemo ovu informaciju i da upise ako je string ili broj
    }else if(typeof(noviNiz[i])){
        console.log('ovo je broj:',noviNiz[i] );
    }else{
        console.log('ovo je nista:',noviNiz[i] );
    }
    
}


/*

let niz2= [23, 54, 92, [23, 'nedefinisano', 89], 33, 90];

for (let index = 0; index < niz2.length; index++)
{
if (niz2[index] % 2 == 0 ) {                                                               //zasto ne moze da mi ovo odradi
    console.log(niz2[index]);                                     //hocu da mi ispise samo ako je deljiv sa dva
}else{
    console.log('ovo nije deljivo');
}
}


 let niz4 = [23, 45, 78, [23, 56,], "neki string"];

console.log(niz4[3(23)]);



 for (let index = 0; index < niz4.length; index++) {
     con
     
 }




const niz3 =[23, 45, 23,[23, 89, 93], 32];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
*/