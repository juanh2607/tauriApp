<script>
  // Utils
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';
  // Components
  import Timer from '../components/Timer.svelte';

  onMount(() => appWindow.show());
</script>

<body>
  <Timer title={'Svelte'} startingTime={100} remainingTime={10} paused={false}/>
  <button id='add'>+</button>
</body>