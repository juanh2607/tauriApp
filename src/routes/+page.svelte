<script>
  import '../styles/global.css';
  // Utils
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';
  // Components
  import Draggable from '../components/Draggable.svelte';
  import Timer from '../components/Timer.svelte';

  onMount(() => appWindow.show());
</script>

<body>
  <Draggable>
    <Timer title={'Facultad'} startingTime={100} remainingTime={10} paused={true}/>
  </Draggable>

  <button id='add'>+</button>
</body>