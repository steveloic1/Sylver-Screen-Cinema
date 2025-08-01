document.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  document.querySelectorAll('.time').forEach(span => {
    const timeText = span.textContent.trim(); // e.g. "13:00"
    const [hoursStr, minutesStr] = timeText.split(':');
    const spanMinutes = parseInt(hoursStr) * 60 + parseInt(minutesStr);

    if (spanMinutes < currentMinutes) {
      // Time has passed → ensure class "past" is present
      if (!span.classList.contains('past')) {
        span.classList.add('past');
      }
    } else {
      // Future time → remove class "past" if present
      span.classList.remove('past');
    }
  });
});
