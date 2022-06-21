//Zanimjivo pogledacmo detljnije

function drugiPosao(){
    console.log('niz parnih (3)');
 }
 function nekiPosao(arg1){

    console.log('ceo niz (1)');

    setTimeout(()=>{
        console.log('filter niza (2)');
        arg1();
    });

    console.log('filter');
 }

 nekiPosao(drugiPosao);