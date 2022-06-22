const obcecanje1 = new Promise((resolve, rejected)=>{

    setTimeout(()=>{
        let nova = (Math.random() * (60-1)).toFixed(2);
        if (nova  < 30) {
            rejected('this numbers is very bad');
        }else if(nova > 35 && nova < 40 ){
            rejected('zamalo');
        }else if(nova > 50){
            resolve('good numbr')
        }

    }, 2000)
})  

obcecanje1
.then((message)=>{
    console.log('ovo je trazeni broj',message);
})
.catch((message)=>{
    console.log('greska', message)
})
//.finally

console.log('POCNI...')