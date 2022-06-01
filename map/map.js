const DATA1 =[1,3, 5, 2, 7, 6, ];

//el > 2 = el 7
//el > 2 && el < 8  =(el * 4 ) /2

const dogAgeHuman =(ages)=>{
   const humanAge = ages.map((age) => {
       if (el > 2 && el < 8 ) {
           return (el * 4) /2;
       }else if(el > 2){
           return el * 7;
       }
    });return dogAgeHuman;
};
console.log(dogAgeHuman(DATA1));
