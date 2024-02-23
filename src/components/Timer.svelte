<script>
  import { onMount } from 'svelte';

  export let title = '';
  export let startingTime = 0;
  // Stores the remaining time when last unpaused. Used for timeLeft calculation
  export let remainingTime = 0; 
  export let paused = true;
  let timeLeft = remainingTime; // For reactive state
  let unpauseDate = null; // If null, then the timer is paused
  let timeoutId = null;
  let pauseButtonDisabled = false;

  const start = () => {
    paused = false;
    unpauseDate = new Date();
    update();
  };

  const update = () => {
    timeLeft = getTimeLeft();

    if (timeLeft > 0) {
      timeoutId = setTimeout(update, 1000);
    } else {
      handleTimerEnd();
    }
  };

  const handlePause = () => { 
    if (paused) { // Unpause
      paused = false;
      start();
    } else { // Pause
      paused = true;
      clearTimeout(timeoutId);
      unpauseDate = null;
      remainingTime = timeLeft;
    }
  }

  const reset = () => {
    pauseButtonDisabled = false;
    if (paused) {
      remainingTime = startingTime;
      timeLeft = startingTime;
    } else {
      remainingTime = startingTime;
      timeLeft = startingTime;
      clearTimeout(timeoutId);
      start();
    }
  };

  const handleTimerEnd = () => {
    clearTimeout(timeoutId);
    paused = true;
    pauseButtonDisabled = true;
    // TODO: lanzar una notificación
  };

  const getTimeLeft = () => {
    if (!paused) {
      const now = new Date();
      const elapsedTime = Math.floor((now - unpauseDate) / 1000);
      if (remainingTime - elapsedTime < 0) {
        return 0;
      }
      return remainingTime - elapsedTime;
    }
    return remainingTime;
  }

  onMount(() => {
    if (!paused) {
      start();
    }
  });
</script>

<div class='timer-container'>
  <h3>{title}</h3>
  <div class='timer-time'>{timeLeft}</div>
  <div class='timer-progress' style='width: {remainingTime / startingTime * 100}%'></div>
  <button on:click={handlePause} disabled={pauseButtonDisabled}>
    {paused ? 'Unpause' : 'Pause'}
  </button>
  <button on:click={reset}>Restart</button>
</div>
