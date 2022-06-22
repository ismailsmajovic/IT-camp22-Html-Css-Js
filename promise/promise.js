/*Promise objekat obavlaj naki preoces u asihronaom JS i treb ad vrati neki reziltat:
 Pending to je kad cekamo i to je trenutno stanje:
 Rezultat Promisa moze biti:
 1)Povoljno stanje  - resolved
 2)Nepovoljno stanje - rejected 

 then - je handler koji prihvaca sve sto je prosledjeno preko resolve()
 catch - je handler koji prihvca sve sto je prihvaceno preko rejected()

 */


const myPromise = new Promise((resolve, rejected)=>{
    response = 200;

    for (let i = 0; i < 900000000; i++) {
        //response += i;
    }
        if (response  === 200) {
            resolve([1, 2, 3, 4, 5]);
        }else{
            rejected('greska');
        }
});

 myPromise
.then((mes)=>{
    console.log('uspesno povukao podatke =', mes);
    //arr = data.filter((el)=> el  % 2 === 0);
    //return arr;
})/*
.then((arg1)=>{
    console.log('druga funkcija', arg1)
})*/
.catch((mesage)=>{
    console.log('neuspesno povukao podatke = ', mesage)
})

console.log('Pocinjemo obradu podataka...')
