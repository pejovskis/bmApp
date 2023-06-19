function validateForm() {
    var emailInput = document.getElementById("emailInput");
    var emailError = document.getElementById("emailError");
    var email = emailInput.value;

    // Überprüfe, ob eine gültige E-Mail-Adresse eingegeben wurde
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailInput.classList.add("is-invalid"); // Füge die Bootstrap-Klasse "is-invalid" hinzu
      emailError.style.display = "block"; // Zeige die Fehlermeldung an
      return false; // Verhindere das Absenden des Formulars
    }

    // Führe hier den Code für den Login-Vorgang aus
    // ...
    // Wenn der Login erfolgreich war, kannst du das Formular abschicken oder andere Aktionen durchführen
    return true;
  }