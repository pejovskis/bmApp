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

