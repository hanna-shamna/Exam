const messages = [
  "You are doing amazing 💖",
  "Trust yourself, Pachuttaaa ✨",
   "You are not alone — Hannu is always with you 🤍",
  "You’ve overcome harder days than this 🌈",
  "One step at a time, Pachu 🌸",
  "This exam does not define you ✨",
  "You don’t need to be perfect — just be you 🌸",
  "Hannu believes in you 🧸",
  "I’m always proud of you 💗",
  "You’ve prepared as much as you could 🤍",
  "It’s okay to feel nervous — it means you care 🌷",
  "You are capable of more than you think 💪",
  "Just breathe and read the question calmly 🌿",
  "Your effort already matters 💕",
  "No matter the result, you are loved 💖",
  "Breathe in confidence… breathe out stress 🌬️",
  "One answer at a time 📝",
  "You are safe, supported, and strong 💗",
  "This moment will pass 🌙",
  "I believe in you more than words can say 💕"
  "You are the strongest person I ever know 🌸",
  "The kindest, bootiful human being 💖",
  "You have got this bubu, fighting ✨"
];

function showMessage() {
  const random = Math.floor(Math.random() * messages.length);
  document.getElementById("message").innerText = messages[random];
}

// ⏳ Countdown to exam end (Jan 21)
const endDate = new Date("January 21, 2026 23:59:59").getTime();

const timer = setInterval(() => {
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

