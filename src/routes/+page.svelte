<script>
  import '../styles/global.css';
  // Utils
  import { onMount } from 'svelte';
  import { appWindow } from '@tauri-apps/api/window';

  import Components from '../components/Components.svelte';


  const data = {
    "timerData": [
      {
        "title": "Facultad",
        "startingTime": "28800",
        "remainingTime": 17931,
        "paused": true,
        "leftOffset": 0,
        "topOffset": 18
      },
      {
        "title": "Bloque Estudio",
        "startingTime": "2700",
        "remainingTime": "2700",
        "paused": true,
        "leftOffset": 291,
        "topOffset": 19
      },
      {
        "title": "Proyecto",
        "startingTime": "5400",
        "remainingTime": "5400",
        "paused": true,
        "leftOffset": 293,
        "topOffset": 330
      }
    ]
  }
  // TODO: ver si usar #each es muy eficiente o no. Por legibilidad y escalabilidad,
  // crea un componentLoader.js que reciba la data del back, y vaya agregando 
  // elementos al body

  onMount(() => appWindow.show());
</script>

<body>
  <Components data={data}/>
  <button id='add'>+</button>
</body>