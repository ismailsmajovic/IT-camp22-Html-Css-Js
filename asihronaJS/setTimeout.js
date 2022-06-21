//setTimeout() je metoda koja поставља тајмер који извршава функцију или одређени део кода када тајмер истекне.
 /*  1) Ako imamo dve asihrone funckcije kao ovde prvo ce se izvrsiti komanda 3 pa komanda 4, logicno*/
console.log('Komnda 1');
 console.log('Komnda 2');
 setTimeout(()=>{
    console.log('Komanda 3')
 }, 2000);
 setTimeout(()=>{
    console.log('komanda 4')
 }, 2000)                          //2000 ms = 2 sec
 console.log('Komnda 5');


 


 //2) /*Ovde ce se prvo izvrsiti komnda 4 pa tek onda komnda 3 jer imaju razlcito vreme za izvrsavnje*/

 console.log('Komnda 1');
 console.log('Komnda 2');
 setTimeout(()=>{
    console.log('Komanda 3')
 }, 5000);
 setTimeout(()=>{
    console.log('komanda 4')
 }, 2000)                          //2000 ms = 2 sec
 console.log('Komnda 5');

 //console.log('-----------------------')




 
 