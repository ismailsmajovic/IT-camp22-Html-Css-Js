const newPromise = new Promise((resolve, rejected)=>{
    //response = 15;
    setTimeout(()=>{
        let randomNum = (Math.random() * 20).toFixed(2)    // svaki put dobijemo razlicti rezultat zbog toga sto Math.random baca slucajan broj

        if (randomNum >= 10) {
            resolve('on je 10 ili veci')
        }else{
            rejected('on je 9 ili manji')
        }
    }, 3000)
})

newPromise
.then((message)=>{
    console.log('dobar broj', message)    //dobar broj true
})
.catch((mesage)=>{
    console.log('los broj', mesage)    //los broj true
})

console.log('Pa da pocnemo...');  