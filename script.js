// Encouraging messages
const messages = [
  "You are doing amazing 💖",
  "One question at a time 🌸",
  "This exam doesn’t define you ✨",
  "I believe in you, Pachu 💗",
  "You’ve worked so hard 🌷"
];

function showMessage() {
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}

// ⏳ Countdown Timer (Jan 12 → Jan 21)
const endDate = new Date("January 21, 2026 23:59:59").getTime();

const timer = setInterval(function () {
  const now = new Date().getTime();
  const distance = endDate - now;

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("countdown").innerHTML = "Exams are over 💕";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML =
    `${days} days ${hours} hrs ${minutes} min`;
}, 1000);
