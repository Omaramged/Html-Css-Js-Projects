const passwordOutput = document.getElementById('passwordOutput');
const generateBtn = document.getElementById('generateBtn');

const lengthSlider = document.getElementById('lengthSlider');
const lengthValue = document.getElementById('lengthValue');
const includeUppercase = document.getElementById('includeUppercase');
const includeLowercase = document.getElementById('includeLowercase');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

const CHAR_SETS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  symbols: '!@#$%^&*'
};

// Update length display in UI when slider moves
lengthSlider.addEventListener('input', (e) => {
  lengthValue.textContent = e.target.value;
});

/**
 * Generates a random secure password
 * @returns {string} - The generated password
 */
function generatePassword() {
  const length = parseInt(lengthSlider.value);
  
  let validChars = '';
  if (includeLowercase.checked) validChars += CHAR_SETS.lowercase;
  if (includeUppercase.checked) validChars += CHAR_SETS.uppercase;
  if (includeNumbers.checked) validChars += CHAR_SETS.numbers;
  if (includeSymbols.checked) validChars += CHAR_SETS.symbols;
  
  // Guard clause if user unchecks all boxes
  if (validChars === '') {
    return 'Select at least one option!';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * validChars.length);
    password += validChars[randomIndex];
  }
  
  return password;
}

// Event Configuration
generateBtn.addEventListener('click', () => {
  const newPassword = generatePassword();
  passwordOutput.textContent = newPassword;
  
  // Update visually to indicate a new password was generated
  // If there's an error message, show it in a different color
  if (newPassword.startsWith('Select')) {
    passwordOutput.style.color = '#ef4444'; // Red for error
  } else {
    passwordOutput.style.color = '#f8fafc'; // White for password
  }
});
