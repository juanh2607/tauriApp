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
  <Draggable position={{x: 800, y: 100}}>
    <Timer title={'Facultad'} startingTime={100} remainingTime={10} paused={true}/>
  </Draggable>

  <Draggable position={{x: 800, y: 400}}>
    <Timer title={'Otro'} startingTime={100} remainingTime={10} paused={true}/>
  </Draggable>

  <Draggable position={{x: 200, y: 400}}>
    <Timer title={'Probando'} startingTime={100} remainingTime={10} paused={true}/>
  </Draggable>

  <button id='add'>+</button>
</body>