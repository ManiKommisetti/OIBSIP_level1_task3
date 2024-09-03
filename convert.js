function convertTemperature() {
  var celsiusInput = document.getElementById("celsius");
  var fahrenheitInput = document.getElementById("fahrenheit");
  var resultDiv = document.getElementById("result");

  // Convert Celsius to Fahrenheit
  if (celsiusInput.value !== "") {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheit = (celsius * 9 / 5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);
    resultDiv.innerHTML = celsius.toFixed(2) + " °C = " + fahrenheit.toFixed(2) + " °F";
  }

  // Convert Fahrenheit to Celsius
  if (fahrenheitInput.value !== "") {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusInput.value = celsius.toFixed(2);
    resultDiv.innerHTML = fahrenheit.toFixed(2) + " °F = " + celsius.toFixed(2) + " °C";
  }
}