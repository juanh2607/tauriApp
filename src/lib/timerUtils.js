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

/**
 * @param {number} startingTime - In seconds
 * @param {number} remainingTime - In seconds
 * @returns {string} - Color in rgb format
 */
export function getProgressBarColor(startingTime, remainingTime) {
  const percentage = 1 - (1 - (remainingTime / startingTime));
  let r, g, b;

  if (percentage === 1) {
    return '#0C2D57';
  } else if (percentage < 0.7) {
    const p = percentage * 2;
    r = Math.round(12 * (1 - p) + 255 * p);
    g = Math.round(45 * (1 - p) + 176 * p);
    b = Math.round(87 * (1 - p) + 176 * p);
  } else {
    const p = (percentage - 0.7) * 0.3;
    r = Math.round(255 * (1 - p) + 252 * p);
    g = Math.round(176 * (1 - p) + 103 * p);
    b = Math.round(176 * (1 - p) + 54 * p);
  }
  
  return `rgb(${r}, ${g}, ${b})`;
}