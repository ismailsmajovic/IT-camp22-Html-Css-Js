let strings = ["avengers", "captain america", "ironman", "black panther"];
/*
const napravi=(upper)=>{
const upper = strings.map(element => {
    
  });return element.toUpperCase();
}
  console.log(napravi(upper));
*/

const velikaSlova =(nizovi)=>{

    const upper= nizovi.map((niz)=> niz.toUpperCase());

    return upper;
}
console.log(velikaSlova(strings))
