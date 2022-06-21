//Spread (...) sintaksa omogucava da se izraz niza prosiri tamo gde ase ocekuje nula i kraj niza 
//Primer
const nekiNiz = [23, 43, 23, 67];

const noviNiz = [34234,  nekiNiz, '43'];  // bez spread operator, otput:  [ 34234, [ 23, 43, 23, 67 ], '43' ]

console.log(noviNiz)

const noviNiz2 = [34234, ... nekiNiz, '43'];      //sa spread operatorom: [ 34234, 23, 43, 23, 67, '43' ]

console.log(noviNiz2) 




const spredOP = [23, 45, 78, 45, 32];

 const spredOP2 = [ ...spredOP, 'new element'];     
 console.log(spredOP2);                             //spred operator output: [ 23, 45, 78, 45, 32, 'new element' ] 


