<script>
  import '../styles/global.css';
  import { get_component_data } from '../lib/index.js';
  // Utils
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';

  import Components from '../components/Components.svelte';

  // TODO: comunicarse con el back para recibir los datos.
  let data = null;

  onMount(async () => {
    data = await get_component_data();
    console.log(data);
    appWindow.show();
  });
</script>

<body>
  {#if data !== null}
    <Components data={data} />
  {/if}
  <button id='add'>+</button>
</body>