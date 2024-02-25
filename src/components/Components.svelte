<script>
  // Receives the data of all components and instanciates them accordingly.
  // Note: every component is wrapped on a draggable container for now.
  import '../lib/jsdoc.js';

  import Draggable from './Draggable.svelte';
  import Timer from './Timer.svelte';
  
  /** @type {ComponentsData} */
  export let data = null;
</script>

<!-- Just add de components here with #each or #if -->
{#each data.timerData as t (t.title)}
  <Draggable position={{x: t.leftOffset, y: t.topOffset}}>
    <Timer 
      title={t.title}
      startingTime={t.startingTime}
      remainingTime={t.remainingTime}
      paused={t.paused}
    />
  </Draggable>
{/each}

