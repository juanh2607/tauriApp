// TODO: toJSON

/**
 * @param {number} seconds
 * @returns {string} - Time in hh:mm:ss format
 */
export function getTimerText(seconds) {
  const sec     = seconds % 60;
  const minutes = Math.floor(seconds / 60) % 60;
  const hours   = Math.floor(seconds / 3600);

  const ss = sec.toString().padStart(2, '0');
  const mm = minutes.toString().padStart(2, '0');
  const hh = hours.toString().padStart(2, '0');

  return `${hh}:${mm}:${ss}`;
}

/**
 * @param {number} remainingTime - Remaining seconds when last paused
 * @param {Date} unpauseDate - Date at the moment of last unpause
 * @return {number} - Seconds left 
 */
export function getTimeLeft(remainingTime, unpauseDate) {
  const now = new Date();
  const elapsedTime = Math.floor((now - unpauseDate) / 1000);
  if (remainingTime - elapsedTime < 0) {
    return 0;
  }

  return remainingTime - elapsedTime;
}