const timerNode = document.querySelector("#timer");

timerNode.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return false;

  if (e.target.dataset.id === "start") startTimer();
  if (e.target.dataset.id === "stop") stopTimer();
  if (e.target.dataset.id === "wait") waitTimer();
  if (e.target.dataset.id === "reset") resetTimer();
});

let timerId,
  counter = 0;

const startTimer = () => {
  if (!timerId)
    timerId = setInterval(() => {
      counter++;
      const { h, m, s } = timeTransform(counter);

      printTime(h, m, s);
    }, 1000);
};

const stopTimer = () => {
  clearInterval(timerId);
  timerId = undefined;
  counter = 0;
  printTime(0, 0, 0);
};
const waitTimer = () => {
  clearInterval(timerId);
  timerId = undefined;
};

const resetTimer = () => {
  stopTimer();
  counter = 0;

  printTime(0, 0, 0);
};

const timeTransform = (sec) => {
  let h = 0,
    m = 0,
    s = 0;
  h = parseInt(sec / 60 / 60);
  sec -= h * 60 * 60;
  m = parseInt(sec / 60);
  sec -= m * 60;
  s = sec;

  return { h, m, s };
};

const printTime = (h, m, s) => {
  timerNode.querySelector(".hour").textContent = h.toString().padStart(2, 0);
  timerNode.querySelector(".min").textContent = m.toString().padStart(2, 0);
  timerNode.querySelector(".sec").textContent = s.toString().padStart(2, 0);
};
