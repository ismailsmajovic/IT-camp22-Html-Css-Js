const niz = ['ponedeljak ', 'utorak', 'sreda', 'cetvrtak', 'petak', 'subota', 'nedelja'];

const izvrsiLoop =(array)=>{
       /* for(let [ index, grad] of niz.entries()){

            let duzinaNaziva= grad.length;
            console.log(index, grad, duzinaNaziva);
        }*/

        //let duzinaNaziva= grad.length;

    const stara = array.map(( index, grad, duzinaNaziva) =>{
        let duzinaNaziva= grad.length;
        array.entries()
        return [index, grad, duzinaNaziva]
        
    })

    /*for(let [ index, grad] of niz.entries()){

        let duzinaNaziva= grad.length;
        console.log(index, grad, duzinaNaziva);
    }*/

    return stara;
}
console.log(izvrsiLoop(niz));
//izvrsiLoop();


/*
for(let grad of niz){

    let duzinaNaziva= grad.length;
    console.log(grad, duzinaNaziva);
}*/
