let totalTime = 85; // 1 хвилина і 25 секунд

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(totalTime);
    if (totalTime > 0) {
        totalTime--;
    } else {
        clearInterval(timerInterval);
    }
}

updateTimer();
const timerInterval = setInterval(updateTimer, 1000);
