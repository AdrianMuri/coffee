  function calculate() {
    // Get the user input values
    const coffeeGrams = parseInt(document.getElementById("coffee").value);
    const waterRatio = parseInt(document.getElementById("ratio-water").value);
  
    // Validate input (optional)
    if (coffeeGrams <= 0 || waterRatio <= 0) {
      alert("Please enter valid values for coffee and water ratio.");
      return;
    }
  
    // Calculate the amount of water needed based on a 1:x ratio
    const waterNeeded = coffeeGrams * waterRatio;
  
    // Display the result in the water-output element
    document.getElementById("water-output").innerHTML = `Water: ${waterNeeded} grams`;
  }
