/*Osnovna metodologija:
1)JS se u ssusatini na stacku izvrsava Sihrono tj. inija po liniju
 i to u STACKU n a aj nacin sto zadnji koji je usao on se prvi put izvrsva.
 
 Medjutim nekad imamo potrebu za asihronim izvrsavanje koda a to se vrsi tasko:|
 
 2)DOK imamo neku funckiju koja ce da trasje odredjeni vremnski period 
 nju sklnimo na webAPI i tek kad se ceo program izvrsi onda se ona zadnja izvrsava.    */



//U ovom primeru cmo raditi asihronunu JS pomocu setTimeout() metode:
 console.log('Komnda 1');
 console.log('Komnda 2');
 setTimeout(()=>{
    console.log('Komanda 3')
 }, 2000);
 console.log('Komnda 4');


 /*Output:
 Komnda 1
Komnda 2
Komnda 4
comanda 3
*/
 