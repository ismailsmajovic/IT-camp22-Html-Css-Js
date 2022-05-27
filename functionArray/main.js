/*const years = [23, 43, 87, 13, 894, 92, 17];

const findTeen = () =>{
    const prazan =[];

    for (let age of ages) {
        if(age > 18){
             prazan.push(age);
        }
        
    }return prazan;
}
console.log(findTeen(years));

//second exam.
*/
/*const godine =[23,43,87, 13,894,17, 14, 15];

function nadji(ages){
    const prazaNiz =[];
    for(let age of ages){
        if (age > 18) {
            prazaNiz.push(age)
        }
    }return prazaNiz;
}
console.log(nadji(godine));

//three
const godine2 = [23, 43, 87, 13, 894, 17, 14, 15];

const nadji2 =(ages)=>{

    const prazanNiz2 =[];

    for (let age of ages) {
        if(age < 18){
            prazanNiz2.unshift(age)
        }
        
    }return prazanNiz2;
}
console.log(nadji2(godine2));

//four
const godine3 =[23, 43, 87, 13, 894, 17, 14, 15];
 const godine32 =[33, 55, 75,9];

const nadji3 =(ages)=>{
    const prazanNIz3=[];
    for(let age of ages){
        if(age > 18){
            prazanNIz3.push(age);
        }
    }return prazanNIz3;
}
console.log(nadji3(godine32));

//five
const godine4=[23, 43, 87, 13, 894, 17, 14, 15];

const nadji4=(ages) =>{
    const prazanNiz4 =[2, 34];

    for (let age of ages) {
        if(age > 18){
            prazanNiz4.push(age);
        }
        
    }return prazanNiz4;
}
console.log(nadji4(godine4))
*/








//FUNKCIJE SA NIZOVIMA
//U ovom poglavlju cemo da vezbamo sa funkcijama sa nizovima
// koje smo radili u srijedu kod Farisa na casu: datuma 26.05.2022 godinde u Nomvom Pazrau

//sest

const niz4 =[23, 43, 87, 13, 894, 17, 14, 15];

const niz5 =[98, 88];

niz4.push(niz5);

console.log(niz4);

//function  unshift

const niz6 =[323,898]
niz4.unshift(niz6);
console.log(niz4);

//function shift
const niz8 =[423,89];
niz4.shift(niz8);
console.log('ovo je funckcija unshift', niz4);

//function reverse
const niz9 = ['bmw,', 'mercedes', 'audi'];
niz4.reverse(niz9);
console.log('ovo je funckcija reverse:', niz4);

//function concat 
const niz10 = ['alcatel', 'htc'];
niz4.concat(niz10);
console.log('ovo je funkcija concat:', niz4);

//function find
//const trazenaVrednost = imena.find((el) => el >50);
//console.log(trazenaVrednost);
//ova funckija vraca samo prvi broj!
const niz11 = [52, 43, 98, 12, 11];

const traziVrednost = niz11.find((el)=> el < 18);
console.log(traziVrednost);

//function slice sluzi za uklanjanje elemenata niza oniliko koloko mi zelimo ali prema duzini a ne prema indeksu
const nizA1= [23, 76, 89,98];

const make = nizA1.slice(3)
//console.log(nizA1.slice(1));
console.log(make);


//function  splice sliuzi  da unutar niza vrsimo zamenunu , tj. ubacivanje na onim mestima na kojim to zelimo;
//OVO CEMO DA OBJASNIMO MALO DETLJINIJE NA CASU
const niz12 = ['pondeljak', 'utorak', 'cetvratak', 'petak'];
const make2 = niz12.splice(2, );
console.log(niz12);

//




































