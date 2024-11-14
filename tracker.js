// script.js

// Variabili di tracciamento
let mouseMovements = 0;
let videoPlays = 0;
let timeOnPage = 0;
let comments = [];

// Iniziare il tracking del tempo sulla pagina
setInterval(() => {
  timeOnPage++;
}, 1000);

// Funzione per monitorare il movimento del mouse
document.addEventListener("mousemove", () => {
  mouseMovements++;
});

// Al termine del video, mostra il pulsante di consenso
const video = document.getElementById("introVideo");
video.addEventListener("ended", () => {
  document.getElementById("consentButton").style.display = "block";
});

// Attiva la pagina di tracciamento dopo aver cliccato il pulsante di consenso
document.getElementById("consentButton").addEventListener("click", () => {
  showTrackingPage();
});

// Funzione per aggiungere reazioni
function addReaction() {
  const reactions = document.getElementById("trackingData");
  const reactionItem = document.createElement("li");
  reactionItem.textContent = "Reazione: 👍";
  reactions.appendChild(reactionItem);
}

// Funzione per aggiungere commenti
function addComment() {
  const commentBox = document.getElementById("commentBox");
  if (commentBox.value) {
    comments.push(commentBox.value);
    const commentItem = document.createElement("li");
    commentItem.textContent = `Commento: ${commentBox.value}`;
    document.getElementById("trackingData").appendChild(commentItem);
    commentBox.value = ""; // Resetta il campo commento
  }
}

// Mostra il sondaggio come popup
function showSurvey() {
  const surveyAnswer = prompt("Ti è piaciuto il video? Sì/No");
  if (surveyAnswer) {
    const surveyItem = document.createElement("li");
    surveyItem.textContent = `Risposta al sondaggio: ${surveyAnswer}`;
    document.getElementById("trackingData").appendChild(surveyItem);
  }
}

// Mostra la pagina di tracciamento con tutte le attività
function showTrackingPage() {
  document.getElementById("videoContainer").style.display = "none";
  document.getElementById("interactions").style.display = "none";
  document.getElementById("trackingPage").style.display = "block";

  // Mostra i dati di tracciamento
  const trackingData = document.getElementById("trackingData");
  trackingData.innerHTML += `<li>Movimenti del mouse: ${mouseMovements}</li>`;
  trackingData.innerHTML += `<li>Tempo sulla pagina: ${timeOnPage} secondi</li>`;
  trackingData.innerHTML += `<li>Numero di commenti: ${comments.length}</li>`;
}

// Funzione per tornare alla pagina del video
function goBackToVideo() {
  document.getElementById("videoContainer").style.display = "block";
  document.getElementById("interactions").style.display = "flex";
  document.getElementById("trackingPage").style.display = "none";
}
