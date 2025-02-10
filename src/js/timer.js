const dateValues = document.querySelectorAll("[data-days]");
const hoursValues = document.querySelectorAll("[data-hours]");
const minutesValues = document.querySelectorAll("[data-minutes]");
const secondsValues = document.querySelectorAll("[data-seconds]");

const selectedDate = new Date("2025-03-01T00:00:00");

function startTimer() {
  const idInterval = setInterval(() => {
    const diff = selectedDate - Date.now();
    const convertTime = convertMs(diff);
    const time = formatTime(convertTime);

    dateValues.forEach((dateValue) => {
      dateValue.textContent = time.days;
    });

    hoursValues.forEach((hoursValue) => {
      hoursValue.textContent = time.hours;
    });

    minutesValues.forEach((minutesValue) => {
      minutesValue.textContent = time.minutes;
    });

    secondsValues.forEach((secondsValue) => {
      secondsValue.textContent = time.seconds;
    });

    if (
      time.days === "00" &&
      time.hours === "00" &&
      time.minutes === "00" &&
      time.seconds === "00"
    ) {
      clearInterval(idInterval);
    }
  }, 1000);
}

startTimer();

function formatTime({ days, hours, minutes, seconds }) {
  days = days.toString().padStart(2, "0");
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");

  return { days, hours, minutes, seconds };
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

export default startTimer;
