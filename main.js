let input = document.getElementById("dateInput");
let countdown = document.getElementById("countdown");
let interval;

input.addEventListener("change", () => {
  clearInterval(interval);
  let chosen = new Date(input.value).getTime();
  interval = setInterval(() => {
    let now = Date.now();
    let distance = chosen - now;
    if (distance <= 0) {
      countdown.textContent = "Date is invalid";
      clearInterval(interval);
      return;
    }
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((distance / (1000 * 60)) % 60);
    let seconds = Math.floor((distance / 1000) % 60);
    countdown.textContent = `${days} D ${hours} h ${minutes} m ${seconds} s`;
  }, 1000);
});
