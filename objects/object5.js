const students =[
    {ime: 'Faris', grade: 8, year: 2},
    {ime: 'Damir', grade: 10, year: 4},
    {ime: 'Samir', grade: 8, year: 2},
    {ime: 'Azemina', grade: 9, year: 4},
    {ime: 'Amina', grade: 9, year: 3},
    {ime: 'Azra', grade: 7, year:4},
    {ime: 'Nikola', grade: 6, year: 1},
];

function getAverageGrade (array){
   // const niz = [];

    //const noviNiz = array.map((arr)=>{
       // return arr.grade;
   // });

    const skup = array.filter((arr) =>
        arr.year  <= 3
    )
    //const noviNiz = niz.push(students.grade)
    //const skup = noviNiz.reduce((prev, post)=>{
       // return prev + post / noviNiz.length;
   // })

    return  skup;

}
console.log(getAverageGrade(students));

//console.log('radi')