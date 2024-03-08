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
{#if data.timer_data !== undefined}
  {#each data.timer_data as t (t.title)}
    <Draggable position={{x: t.left_offset, y: t.top_offset}}>
      <Timer 
        title={t.title}
        startingTime={t.starting_time}
        remainingTime={t.remaining_time}
        paused={t.paused}
      />
    </Draggable>
  {/each}
{/if}

