<script>
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';

  onMount(() => {
    appWindow.show();
  });
</script>

<body>
  <button id='add'>+</button>
</body>