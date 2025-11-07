// main.js
const passwordInput = document.getElementById('passwordInput');
const strengthBar = document.getElementById('strengthBar');
const strengthText = document.getElementById('strengthText');
const criteria = {
  length: document.getElementById('length'),
  uppercase: document.getElementById('uppercase'),
  number: document.getElementById('number'),
  symbol: document.getElementById('symbol')
};

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let score = 0;

  // Criteria checks
  if (password.length >= 8) { score++; criteria.length.classList.add('pass'); } 
  else { criteria.length.classList.remove('pass'); }

  if (/[A-Z]/.test(password)) { score++; criteria.uppercase.classList.add('pass'); } 
  else { criteria.uppercase.classList.remove('pass'); }

  if (/\d/.test(password)) { score++; criteria.number.classList.add('pass'); } 
  else { criteria.number.classList.remove('pass'); }

  if (/[^A-Za-z0-9]/.test(password)) { score++; criteria.symbol.classList.add('pass'); } 
  else { criteria.symbol.classList.remove('pass'); }

  // Update strength bar
  const percent = (score / 4) * 100;
  strengthBar.style.width = percent + '%';

  if (score <= 1) strengthBar.style.background = 'var(--danger)';
  else if (score == 2) strengthBar.style.background = 'var(--warning)';
  else strengthBar.style.background = 'var(--success)';

  // Strength text
  const strengthNames = ['Weak', 'Moderate', 'Strong', 'Very Strong'];
  strengthText.textContent = 'Strength: ' + strengthNames[score-1 >=0 ? score-1:0];
});
