<script>
  // TODO: usar SVG para el botón
  import { onMount } from 'svelte'; // TODO: on mount, set container coordinates
  
  export let position = {x: 100, y: 100}
  let oldX = 0;
  let oldY = 0;
  let display = 'none';
  let container;

  onMount(() => {
    container.style.left = position.x + "px";
    container.style.top  = position.y + "px"
  });

  const startMotion = (event) => {
    oldX = event.clientX - container.getBoundingClientRect().left;
    oldY = event.clientY - container.getBoundingClientRect().top;
    document.addEventListener('pointermove', dragItem);
  }

  const stopMotion = () => {
    document.removeEventListener('pointermove', dragItem);
  }

  const dragItem = (event) => {
    event.preventDefault();
    container.style.left = (event.clientX - oldX) + "px";
    container.style.top  = (event.clientY - oldY) + "px";
  }
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div class='container' bind:this={container}
  on:mouseover={() => display = 'block'}
  on:mouseout= {() => display = 'none'}
>
  <button class='button dragButton' style='display: {display};'
    on:pointerdown|preventDefault={startMotion}
    on:pointerup={stopMotion}
  >.</button>
  <slot />
</div>

<style>
  .container {
    position: absolute;
    padding-left: 60px /* Invisible space for dragButton */
  }
  .dragButton {
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 10px;
    margin-top: 15px;
    max-width: 20px;
    text-align: center;
    display: none;
  }
</style>