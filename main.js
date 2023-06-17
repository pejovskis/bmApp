// Finde alle Eingabefelder mit dem Attribut "required"
var requiredFields = document.querySelectorAll('input[required], textarea[required], select[required]');

// Finde den Hochladen-Button
var uploadButton = document.querySelector('input[type="submit"]');

// Finde den Fehlerhinweis
var errorHint = document.getElementById('errorHint');

// Füge einen "click" Event-Listener zum Hochladen-Button hinzu
uploadButton.addEventListener('click', function(event) {
  // Überprüfe alle erforderlichen Felder
  var hasError = false;
  requiredFields.forEach(function(field) {
    if (field.value.trim() === '') {
      // Füge die Bootstrap-Klasse "is-invalid" hinzu
      field.classList.add('is-invalid');
      hasError = true;
    }
  });

  // Zeige den Fehlerhinweis an, falls erforderliche Felder nicht ausgefüllt sind
  if (hasError) {
    errorHint.style.display = 'block';
    // Verhindere das Standardverhalten des Formulars
    event.preventDefault();
  }
});

// Füge einen "input" Event-Listener zu den erforderlichen Feldern hinzu
requiredFields.forEach(function(field) {
  field.addEventListener('input', function() {
    // Überprüfe, ob das Feld leer ist
    if (field.value.trim() !== '') {
      // Entferne die Bootstrap-Klasse "is-invalid"
      field.classList.remove('is-invalid');
    }
  });
});

// Finde das Input-Element für die E-Mail
var emailInput = document.querySelector('input[type="email"]');

// Finde das Input-Element für das Passwort
var passwordInput = document.querySelector('input[type="password"]');

// Finde den Login-Button
var loginButton = document.querySelector('input[type="submit"]');

// Finde den Fehlerhinweis für die E-Mail
var emailError = document.getElementById('emailError');

// Finde den Fehlerhinweis für das Passwort
var passwordError = document.getElementById('passwordError');

// Füge einen "click" Event-Listener zum Login-Button hinzu
loginButton.addEventListener('click', function(event) {
  // Überprüfe, ob die E-Mail-Adresse gültig ist
  if (!isValidEmail(emailInput.value)) {
    // Füge die Bootstrap-Klasse "is-invalid" zur E-Mail hinzu
    emailInput.classList.add('is-invalid');
    // Zeige den Fehlerhinweis für die E-Mail an
    emailError.style.display = 'block';
    // Verhindere das Standard-Verhalten des Formulars
    event.preventDefault();
  }

  // Überprüfe, ob das Passwort leer ist
  if (passwordInput.value.trim() === '') {
    // Füge die Bootstrap-Klasse "is-invalid" zum Passwort hinzu
    passwordInput.classList.add('is-invalid');
    // Zeige den Fehlerhinweis für das Passwort an
    passwordError.style.display = 'block';
    // Verhindere das Standard-Verhalten des Formulars
    event.preventDefault();
  }
});

// Funktion zur Überprüfung der E-Mail-Adresse
function isValidEmail(email) {
  // Eine einfache Validierung, die prüft, ob die E-Mail-Adresse ein "@"-Zeichen enthält
  return email.includes('@');
}


// Füge einen "input" Event-Listener zum E-Mail-Eingabefeld hinzu
emailInput.addEventListener('input', function() {
  // Überprüfe, ob die E-Mail-Adresse gültig ist
  if (isValidEmail(emailInput.value)) {
    // Entferne die Bootstrap-Klasse "is-invalid" von der E-Mail
    emailInput.classList.remove('is-invalid');
    // Verstecke den Fehlerhinweis für die E-Mail
    emailError.style.display = 'none';
  }
});

// Füge einen "input" Event-Listener zum Passwort-Eingabefeld hinzu
passwordInput.addEventListener('input', function() {
  // Überprüfe, ob das Passwort leer ist
  if (passwordInput.value.trim() !== '') {
    // Entferne die Bootstrap-Klasse "is-invalid" vom Passwort
    passwordInput.classList.remove('is-invalid');
    // Verstecke den Fehlerhinweis für das Passwort
    passwordError.style.display = 'none';
  }
});

// Funktion zur Überprüfung der E-Mail-Adresse
function isValidEmail(email) {
  // Eine einfache Validierung, die prüft, ob die E-Mail-Adresse ein "@"-Zeichen enthält
  return email.includes('@');
}


