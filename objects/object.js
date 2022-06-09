const broj = 20;

const broj2 = Math.SQRT2(broj);

console.log(broj2);

const vreme =()=>{
    let date = new Date();
    //let cas = now.getHours();
    //let minut = now.GetMinutes();
    //let secoond = now.GetSecond(

    console.log(date);
    //return date;
}
setInterval(vreme, 1000);



const myCar = {
    marka: 'audi',
     mercedes:{
        'boja-b': 'crna',
        menjac: 'auto'
    },

    boja: 'crvena',
    menjac: 'automatski'
}
console.log('moj auto je:', myCar['mercedes']['boja-b'])
console.log('bija je:', myCar.mercedes["boja-b"])
console.log('menjac je:', myCar.mercedes.menjac)


const radanik ={
    ime:'bob',
    prezime: 'euroblok',
    job:'programer',
    age:'30',
    radniSati:40,
    dnevnica: 20

}


console.log(radanik.ime)

