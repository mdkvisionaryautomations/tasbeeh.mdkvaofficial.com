// Get elements from the DOM
const incrementBtn = document.getElementById('increment');
const resetBtn = document.querySelector('button[type="reset"]');

const countDisplay = document.getElementById('count');
// Initialize counter
let counter = 0;

// Update the counter display
function updateDisplay() {
  countDisplay.textContent = counter;
}

// Increment count on logo click
incrementBtn.addEventListener('click', () => {
  counter++;
  updateDisplay();
  // Optional: vibration on mobile
  if (navigator.vibrate) {
    navigator.vibrate(50);
  }
});

// Reset count on reset button click
resetBtn.addEventListener('click', () => {
  counter = 0;
  updateDisplay();
});
