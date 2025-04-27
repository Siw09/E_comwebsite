const progressCircle = document.getElementById('progress');
const timerText = document.getElementById('timer-text');
const urgencyMessage = document.getElementById('urgency-message');
const payButton = document.getElementById('payButton');

let initialDuration = 12 * 60 * 60; // 12 heures
let duration = initialDuration;

function updateTimer() {
  if (duration <= 0) {
    // Redémarre à 20 minutes
    duration = 20 * 60;
    initialDuration = 20 * 60;
  }

  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;

  timerText.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const dashOffset = 440 - (440 * ((initialDuration - duration) / initialDuration));
  progressCircle.style.strokeDashoffset = dashOffset;

  if (hours === 0 && minutes <= 30) {
    urgencyMessage.textContent = "Attention : Moins de 30 minutes restantes pour profiter de l'offre !";
  } else {
    urgencyMessage.textContent = "";
  }

  if (hours === 0 && minutes <= 5 && seconds === 0) {
    // Son d'alerte quand il reste 5 minutes
    alert("Attention, plus que 5 minutes !");
  }

  duration--;
}

setInterval(updateTimer, 1000);

// Script WhatsApp (formulaire)
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
