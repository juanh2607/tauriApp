<!-- TODO: mejorar la barra de cargado -->
<!-- TODO: deja de mostrar segundos y mostrá en formato hh-mm-ss -->

<script>
  import { onMount } from 'svelte';
  //import { tweened } from 'svelte/motion';
  //import { cubicOut } from 'svelte/easing';
  import { getTimerText, getTimeLeft } from '../lib/timerUtils';

  export let title = '';
  export let startingTime = 0;
  export let remainingTime = 0; // Stores the remaining time when last unpaused. Used for timeLeft calculation 
  export let paused = true;
  let timeLeft = remainingTime; // For reactive state
  let unpauseDate = null; // If null, then the timer is paused
  let timeoutId = null;
  let pauseButtonDisabled = false;

  /*const progress = tweened(remainingTime, {
    duration: startingTime,
    easing: cubicOut
  });*/

  const start = () => {
    paused = false;
    unpauseDate = new Date();
    update();
  };

  const update = () => {
    timeLeft = getTimeLeft(remainingTime, unpauseDate);
    //progress.set(timeLeft / startingTime);

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

  onMount(() => {
    if (!paused) {
      start();
    }
  });
</script>

<div class='container'>
  <h3>{title}</h3>
  <div class='time'>
    {getTimerText(timeLeft)}
  </div>
  <div class='progress' style='width: {timeLeft / startingTime * 100}%'></div>
  <!--<progress class='progress' value={$progress} /> -->

  <button on:click={handlePause} disabled={pauseButtonDisabled}>
    {paused ? 'Unpause' : 'Pause'}
  </button>
  <button on:click={reset}>
    Restart
  </button>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    background-color: #EFECEC;
    box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.5);
  }

  h3 {
    padding: 10px;
    margin: 0;
  }

  .time {
    font-size: 48px;
    text-align: center;
    padding: 0px 20px;
    margin-bottom: 0px;
    color: #0C2D57;
  }

  .progress {
    width: 100%;
    background-color: #0C2D57; 
    height: 20px;
    transition: background 1s;
    border-radius: 5px;
    margin-bottom: 10px;
  }
</style>