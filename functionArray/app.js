const niz = ['bwm', 2, 8];


//dodavanje elementa na kraj niza
niz.push("mercededs");
console.log(niz);
//dodavnje na pocetak niza
niz.unshift("WW");
console.log(niz);

//za uklanjanje na kraj niza 
niz.pop(niz);
console.log(niz);
//za uklanjanje na POCETAK NIZA
niz.shift(niz);
console.log(niz);

const clan = niz.shift();
console.log(clan)
//funckija za okrecanje niza===dyigi bau  naopacke
niz.reverse()
console.log(niz);

//spajanje dava niza
niz.concat();
console.log(niz);

const imena = [23,24,434]
const prez =[232,398]

const spojniz =imena.concat(prez)
console.log(spojniz)

//za trazenje clana niza 
//find
const trazenaVrednost = imena.find((el) => el >50);
console.log(trazenaVrednost);


//trazenje indeksa on nam kaze na kojem se indeksu nalzi taj broj kojeg trazimo pomocu find
const trazeniINdwex =imena.findIndex((el)=> el > 100)
console.log(trazeniINdwex);














const godine =[12, 76, 26, 6,23, 21,29,16];

function dajPuno(ages){
    const prazan =[];

    for (const age of ages) {
        if (age >= 18) {
            prazan.push(age);
        }
        
    }
    return prazan;
}
console.log(dajPuno(godine));




