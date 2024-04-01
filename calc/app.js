function calculate(operation) {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
    }
    
    var result;
    
    switch(operation) {
      case 'addition':
        result = num1 + num2;
        break;
      case 'subtraction':
        result = num1 - num2;
        break;
      case 'multiplication':
        result = num1 * num2;
        break;
      case 'division':
        if(num2 === 0) {
          alert("Cannot divide by zero.");
          return;
        }
        result = num1 / num2;
        break;
      case 'modulus':
        result = num1 % num2;
        break;
      default:
        alert("Invalid operation.");
        return;
    }
    
    alert("Result: " + result);
  }
  