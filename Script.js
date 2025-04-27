const progressCircle = document.getElementById('progress');
const timerText = document.getElementById('timer-text');
const urgencyMessage = document.getElementById('urgency-message');

// Définir la durée initiale : 12h
let duration = 12 * 60 * 60; // en secondes

function updateTimer() {
  let hours = Math.floor(duration / 3600);
  let minutes = Math.floor((duration % 3600) / 60);
  let seconds = duration % 60;

  timerText.textContent = `${String(hours).padStart(2,'0')}:${String(minutes).padStart(2,'0')}:${String(seconds).padStart(2,'0')}`;

  const dashOffset = 440 - (440 * ((12 * 60 * 60 - duration) / (12 * 60 * 60)));
  progressCircle.style.strokeDashoffset = dashOffset;

  if (hours === 0 && minutes <= 30) {
    urgencyMessage.textContent = "Attention : Moins de 30 minutes restantes pour profiter de l'offre !";
  } else {
    urgencyMessage.textContent = "";
  }

  if (duration > 0) {
    duration--;
  } else {
    // Si terminé, redémarre dans 20 minutes
    duration = 20 * 60;
  }
}

setInterval(updateTimer, 1000);

// Script WhatsApp (déjà existant)
function sendToWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const method = document.getElementById("method").value;

  const message = `Salut, je viens d'acheter le pack digital. Voici mes infos :
Nom : ${name}
Email : ${email}
Mobile Money : ${phone}
Méthode : ${method}`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/2290190900910?text=${encodedMessage}`;

  showPopup();

  setTimeout(() => {
    window.open(whatsappURL, '_blank');
  }, 3000);

  return false;
}

function showPopup() {
  document.getElementById("popup").style.display = "flex";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
