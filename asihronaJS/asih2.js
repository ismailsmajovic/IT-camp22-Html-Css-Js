//Zanimjivo pogledacmo detljnije

function drugiPosao(){
    console.log('niz parnih (3)');
 }
 function nekiPosao(arg1){

    console.log('ceo niz (1)');
    const a = ()=>{
        arg1();
        console.log('filter niza (2)');
    }
    setTimeout(a,500);

    //console.log('filter');
 }

 nekiPosao(drugiPosao);