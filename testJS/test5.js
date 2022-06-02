/*1. Напишите функцију која конвертује низ вредности из миља у километре користећи метод мапе. На крају, додајте километре у нову променљиву под називом "тоталДистанцеИнКилометерс" и вратите ову променљиву.
 
константне миље = [15,20,1,60,45,120]
 
2. Из низа бројева изаберите парне двоструке бројеве и израчунајте збир користећи методе филтера низа, мапирања и редукције.
 
нека бројеви = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
3. Креирајте нови низ чији су елементи у великим словима речи присутних у оригиналном низу.
 
лет стрингс = ["осветници", "капетан Америка", "гвоздени човек", "црни пантер"];*/


//previ zadtak
const milje = [15,20,1,60,45,120];

const konvertValue =(miles) =>{
    const con = miles.map((mil)=>{
        return mil * 1.6;
    })

    const totalDistanceInKilometers = con.reduce((mil, con) =>{
        return mil + con;
    })
    return totalDistanceInKilometers;
}
console.log('Resenje ovog zadtka je:', konvertValue(milje))

//drugi zadatak
const brojevi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const parniBrojjevi =(numbers)=>{
    const kon = numbers.filter((num)=>{
        return num % 3 === 0;
    })

    const kvadrat = kon.map((num) =>{
        return num * num;
    });

    const sum = kvadrat.reduce((prev, post)=>{
        return prev + post;
    })
    return sum
}
console.log('ovo je resenje drugog zadatka:', parniBrojjevi(brojevi));

//treci zadtak
const reci = ["осветници", "капетан Америка", "гвоздени човек", "црни пантер"];

const velikaSlova =(reci)=>{
    const mala = reci.map((rec)=>{

     return rec.toLowerCase()});
     
    return mala;
}
console.log('ispisi ovde resenje treceg zadatka:', velikaSlova(reci));