
const unesiBroj =()=>{

    const num = prompt('Unesi neki broj:');
       
for (let index = 0; index < num; index++) {                             //index =num              let num = 0; num < 3; num++
    //
    if (num > 50) {
        const num = prompt('Broj mora biti manji od 50');
        break;
    }else if(num > 10 && num < 50){
        const num2 = prompt('Unesi broj manji od 10:');

        for (let index = 0; index <num2; index++) {
            if (num2 > 10) {
                const num2 = prompt('NISI TI ZA RACUNARE!')
                break;
            }else if(num2 < 10){
                //const num2 =prompt('Kralji si xD');
                //break;
                 const num3 = prompt('Unesi taj broj ponovo')
                for (let index = 0; index < num3; index++) {
                    //const element = array[index];
                    const num3 =prompt('Broj morate uneti onoiliko puta koliko je vrednost unestog broja');
                
                }
            }break;
        }
        
        break;
    }else if(num < 10){
        const num = prompt('PONOVO')
    }else{
       break; //const num3 =prompt('Iz kojeg si vijeka TI ?')
    }
     //const num = prompt('Unesi opet:');
}
   //onst rec = document.innerHTML ='ODLICNO';
   //document.write('BRAVO');

   //var doc = document.getElementById('content').innerHTML ='BRAVO'
    //doc.style.color ="#fdc503";

    function ispisi(){
        let doc =document.getElementById("content");
        doc.innerHTML = "BRAVO";
        doc.style.color ="rgb(255,0,0)";
        doc.style.fontSize ="100px";
        doc.style.margin ="auto";
        doc.style.marginTop = "200px";
        doc.style.marginLeft = "550px";
    }

    ispisi();
}
unesiBroj();



 /*if (+num <=50) {
        const num =  promt('unsite veci broj')
    }else if(+num > 50){
        const num = prompt('unsite manji broj')
    }else{
         const num = prompt('NE UNOSITE GLUPOSTI')
    }*/
//window.addEventListener('load',unesiBroj);




/*
const mnz =(a, b, c = false)=>{
    if ( c) {
        return (a+b+c);
    }else{
        return (a+ b);
    }
}
console.log(mnz(2,4,5));

window.addEventListener('load',unesiBroj);
 //drugo nesto
 */

/*const unesiBroj =(a, b) =>{
    let zbir = brojA + brojB;
    return zbir;
}

console.log(unesiBroj(15,5));*/
//const zbir = brojA + brojB;

/*function saberi(a, b){
    const zbir = a + b;
    return (zbir)
}  
console.log(saberi(41,5));
*/









//nebitno
/*let a =5; 
let b = 4;
 let c = a+ b;
*/
 /*const sab = (inch)=>{
   const zbir = inch * 2.5;
   return zbir;
 }
console.log(sab(40));
*/
//alert('age');


/*
const age = promt('Insert your age:');

if(+age < 18 ){
    console.log('punolotan si')
}else if (+age > 18){
    console.log('Dete si:')
}else{
    console.log('bedan si');
}*/
//alert('age')
//alert('age');


//const age = prompt('insert your age:')