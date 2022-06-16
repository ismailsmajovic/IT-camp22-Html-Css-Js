function randomFraction() {

    // Only change code below this line
    //const num = Math.random((1) * 0).toFixed(2);
  
    return Math.random();
  
    // Only change code above this line
  }
  console.log(randomFraction());


  function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * ( myMax - myMin + 1)) + myMin;
    // Only change code above this line
  }
  
  console.log(randomRange(5,15))