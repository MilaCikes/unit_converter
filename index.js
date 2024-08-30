const meterToFeet = 3.281;
const litersToGallons = 0.264;
const kilogramsToPounds = 2.204;

let userInput = document.getElementById('user-input');
let lengthEl = document.getElementById('length-el');
let volumeEl = document.getElementById('volume-el');
let massEl = document.getElementById('mass-el');

let convertBtn = document
  .getElementById('convert-btn')
  .addEventListener('click', function () {
    let baseValue = parseFloat(userInput.value);

    lengthEl.textContent = `${baseValue} meter = ${parseFloat(
      (baseValue * meterToFeet).toFixed(2)
    )} feet`;
    volumeEl.textContent = `${baseValue} liters = ${parseFloat(
      (baseValue * litersToGallons).toFixed(2)
    )} gallons`;
    massEl.textContent = `${baseValue} kilograms = ${parseFloat(
      (baseValue * kilogramsToPounds).toFixed(2)
    )} pounds`;
  });
