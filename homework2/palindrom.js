//const niz = [];

const niz2 = 999001;

//const niz = [9, 9, 9, 0, 0, 1]
/*
for (let index = 0; index <9; index++) {

   const prvi= niz.splice(0,6);
    console.log(prvi)

    const drugi = prvi.reverse();
    console.log(drugi)

    const treci =[];

    if (prvi === drugi) {
        treci.push(treci)
    }
    console.log(treci)
}                                                                       array.splice(0,6) === array.reverse()
*/

const brojevi = [9, 9, 9, 0, 0, 1]

const palindrom =(nizovi)=>{
    const prvi = nizovi.filter((niz)=>niz.splice(0,6));

    const drugi =prvi.filter(( niz)=>{           // const upper= nizovi.map((niz)=> niz.toUpperCase());
        return niz.reverse();
    })

    return drugi;
}
console.log(palindrom(brojevi));



/*
const  niz= ['prva ', 'druga', 'treca','cevrta', 'peta', 'sesta'];

const niz2 = niz.splice(0,6);



console.log(niz2)



const  nizn= ['prva ', 'druga', 'treca','cevrta', 'peta', 'sesta'];
const niz3 = nizn.reverse();

console.log(niz3)*/