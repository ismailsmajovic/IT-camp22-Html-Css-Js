const students =[
    {ime: 'Faris', grade: 8, year: 2},
    {ime: 'Damir', grade: 10, year: 4},
    {ime: 'Samir', grade: 8, year: 2},
    {ime: 'Azemina', grade: 9, year: 4},
    {ime: 'Amina', grade: 9, year: 3},
    {ime: 'Azra', grade: 7, year:4},
    {ime: 'Nikola', grade: 6, year: 1},
];

const getAverageGrade =(array)=>{
   /* const everyRating = array.map((arr)=>
     arr.grade
    )*/

    const amina = array.filter((arr)=> {
        
        return arr.ime === 'Amina'
    });

    const aminaRating = amina.map((arr)=>{
        return arr.grade;
    })

   const aminaYear = amina.map((arr)=>{
       return arr.year;
   })

    return [amina, aminaRating, aminaYear];
}

   

console.log(getAverageGrade(students));

//console.log('radi')