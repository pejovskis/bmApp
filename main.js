// Finde das Input-Element für die E-Mail
var emailInput = document.querySelector('input[type="email"]');

// Finde den Login-Button
var loginButton = document.querySelector('input[type="submit"]');

// Finde den Fehlerhinweis
var emailError = document.getElementById('emailError');

// Füge einen "click" Event-Listener zum Login-Button hinzu
loginButton.addEventListener('click', function(event) {
  // Überprüfe, ob die E-Mail-Adresse gültig ist
  if (!isValidEmail(emailInput.value)) {
    // Füge die Bootstrap-Klasse "is-invalid" hinzu
    emailInput.classList.add('is-invalid');
    // Zeige den Fehlerhinweis an
    emailError.style.display = 'block';
    // Verhindere das Standard-Verhalten des Formulars
    event.preventDefault();
  }
});

// Füge einen "input" Event-Listener zum E-Mail-Eingabefeld hinzu
emailInput.addEventListener('input', function() {
  // Überprüfe, ob die E-Mail-Adresse gültig ist
  if (isValidEmail(emailInput.value)) {
    // Entferne die Bootstrap-Klasse "is-invalid"
    emailInput.classList.remove('is-invalid');
    // Verstecke den Fehlerhinweis
    emailError.style.display = 'none';
  }
});

// Funktion zur Überprüfung der E-Mail-Adresse
function isValidEmail(email) {
  // Eine einfache Validierung, die prüft, ob die E-Mail-Adresse ein "@"-Zeichen enthält
  return email.includes('@');
}
