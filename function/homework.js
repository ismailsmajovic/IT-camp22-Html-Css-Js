
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
        doc.innerHTML = "BRAVO, usli ste nas sajt";
        doc.style.color ="rgb(255,0,0)";
        doc.style.fontSize ="100px";
        doc.style.margin ="auto";
        doc.style.marginTop = "200px";
        doc.style.marginLeft = "400px";
    }

    ispisi();
}
unesiBroj();



 /*const niz = ['bwm', 2, 8];


//dodavanje elementa na kraj niza
niz.push("mercededs");
console.log(niz);
//dodavnje na pocetak niza
//niz.("WW");
//console.log(niz);

//Za brisanje na kraj niza
niz.pop("mercedes");
console.log(niz);
*/