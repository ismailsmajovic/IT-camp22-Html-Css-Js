// Function Entries vraca niz parova kljuc i vrednosti datog objekta
const secondObject = {
    name: 'Nikola',
    surname: 'Glisovic',
    age: 30
}

//for(const [key][values])

for (const [key, value] of Object.entries(secondObject)) {
    console.log(`${key}: ${value}`);
  }
  //console.log()

  /* Output:
   name: Nikola
    surname: Glisovic
    age: 30
  */