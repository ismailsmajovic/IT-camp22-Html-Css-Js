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



  //domcaci za vezbe
  /*
let niz = [23,89,0, 'string'];
let niz2 = [32,98,23,45,"any",5]

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
*/

//druga vezba
const niz3 =[2412,93,0,-0, 5, 3,[33,32,32],32];

const takeNiz =() =>{
    for (let index = 0; index <niz3.length; index++) {
        //const nizz = array[index];
        if (niz3[3]) {
            console.log(niz3[3]);
        }else if(niz3[4]){
            console.log(niz3[4]);
        }else if(niz3[4]){
            console.log(typeof(niz3[4]));
        }
        else{
            console.log(typeof(niz3[4])); //console.log('ovo je neodredjeno');
        }
    }
}
takeNiz();

const isSunny = true;

isSunny ?console.log('naocare'):console.log('kisobran');

//falsy: undefined, null, 0, -0, NaN, "", false, 0n


