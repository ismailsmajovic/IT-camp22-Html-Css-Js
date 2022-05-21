//CALL BACK FUNCTION

/*function myDisplayer(something) {
    console.log(something);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);

//drugi nacin
  const mydis=(something)=>{
        console.log(something);
  }

  const mycall =(broj1, broj2, myCallback)=>{
      const sum = broj1 + broj2;
      myCallback(sum);
  }
  mycall(5, 5,mydis);*/

let niz = [23,89,0, 'string'];
let niz2 = [32,98,23,45,"any",-0]

const izvadiNiz =()=>{
    if (niz[2]) {
        console.log(niz[2])
    }else if(niz2[5]){
        console.log(niz2[5])
    }else{
        console.log('undefinited')
    }
}
izvadiNiz();



