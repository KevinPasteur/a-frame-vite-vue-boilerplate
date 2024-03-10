<script setup>
import { ref } from "vue";
import TheCameraRig from "./TheCameraRig.vue";
import TheMainRoom from "./TheMainRoom.vue";

import "../aframe/level-manager.js";
import "../aframe/battle-system.js";
import "../aframe/quest-manager.js";
import "../aframe/dialogue-manager.js";

defineProps({
  scale: Number,
  overlaySelector: String,
});

const allAssetsLoaded = ref(false);
</script>

<template>
  <a-scene background="color: black;" physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    " obb-collider="showColliders: false" level-manager battle-system>
    <a-assets @loaded="allAssetsLoaded = true">

      <a-asset-item id="room" src="assets/pallet_town.glb"></a-asset-item>
      <a-asset-item id="squirtle" src="assets/squirtle.glb"></a-asset-item>
      <a-asset-item id="charmander" src="assets/charmander.glb"></a-asset-item>
      <a-asset-item id="bulbasaur" src="assets/bulbasaur.glb"></a-asset-item>
      <a-asset-item id="anna" src="assets/anna_pokemon.glb"></a-asset-item>
      <a-asset-item id="pokeball" src="assets/pokeball.glb"></a-asset-item>
      <a-asset-item id="eevee" src="assets/eevee.glb"></a-asset-item>
      <a-asset-item id="pedestal" src="assets/pedestal.glb"></a-asset-item>
      <a-asset-item id="professor-oak" src="assets/professor_oak.glb"></a-asset-item>
      <a-asset-item id="mallow" src="assets/mallow.glb"></a-asset-item>
      <a-asset-item id="exclamation" src="assets/exclamation.glb"></a-asset-item>
      <a-asset-item id="exclamation-grey" src="assets/exclamation_grey.glb"></a-asset-item>

      <img id="sky" src="/assets/sky.jpg" />

      <audio id="pallet-town-music" src="assets/pallet_town.mp3"></audio>
      <audio id="battle-music" src="/assets/battle.mp3" preload="auto"></audio>
      <audio id="pokemon-out" src="/assets/pokemon_out.mp3" preload="auto"></audio>
      <audio id="beep" src="/assets/beep.mp3" preload="auto"></audio>
      <audio id="tackle" src="/assets/tackle.mp3" preload="auto"></audio>
      <audio id="capture-sound" src="/assets/capture.mp3" preload="auto"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-sky src="#sky"></a-sky>
      <TheMainRoom :scale="scale" />
    </template>

    <TheCameraRig />
  </a-scene>
</template>
