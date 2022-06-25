const obcecanje1 = new Promise((resolve, rejected)=>{

    setTimeout(()=>{
        let nova = (Math.random() * (60-1)).toFixed(0);    // Kako da dobijemo ovaj slucajan broj u konzoli
        if (nova  < 30) {
            rejected( nova);
        }else if(nova > 35 && nova < 40 ){
            rejected( nova);
        }else if(nova > 50){
            resolve( nova)
        }

    }, 2000)
})  

obcecanje1
.then((mesage)=>{
    console.log('pogodak, trazeni broj je: ', mesage);
})
.catch((mesage)=>{
    console.log('greska,  trazeni broj je: ', mesage)
})
//.finally

console.log('POCNI...')