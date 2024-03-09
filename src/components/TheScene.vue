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
  <a-scene
    background="color: black;"
    physx="
      autoLoad: true;
      delay: 1000;
      useDefaultScene: false;
      wasmUrl: lib/physx.release.wasm;
    "
    obb-collider="showColliders: false"
    stats
    level-manager
    battle-system
  >
    <a-assets @loaded="allAssetsLoaded = true">
      <!--
        Title: VR Gallery
        Model source: https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e
        Model author: https://sketchfab.com/mvrc.art (Maxim Mavrichev)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item id="room" src="assets/pallet_town.glb"></a-asset-item>
      <a-asset-item id="squirtle" src="assets/squirtle_2.glb"></a-asset-item>
      <a-asset-item
        id="charmander"
        src="assets/charmander_2.glb"
      ></a-asset-item>
      <a-asset-item id="bulbasaur" src="assets/bulbasaur.glb"></a-asset-item>
      <a-asset-item id="anna" src="assets/anna_pokemon.glb"></a-asset-item>
      <a-asset-item id="pokeball" src="assets/pokeball.glb"></a-asset-item>
      <a-asset-item id="eevee" src="assets/eevee_3.glb"></a-asset-item>
      <a-asset-item id="pedestal" src="assets/pedestal.glb"></a-asset-item>
      <a-asset-item
        id="professor-oak"
        src="assets/professor_oak.glb"
      ></a-asset-item>
      <a-asset-item id="mallow" src="assets/mallow.glb"></a-asset-item>
      <a-asset-item id="question" src="assets/question.glb"></a-asset-item>
      <a-asset-item
        id="exclamation"
        src="assets/exclamation.glb"
      ></a-asset-item>
      <a-asset-item
        id="exclamation-grey"
        src="assets/exclamation_grey.glb"
      ></a-asset-item>

      <!--
        Title: 3D Gallery for VR projects
        Model source: https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1
        Model author: https://sketchfab.com/tekuto1s (tekuto1s)
        Model license: CC BY 4.0 ( https://creativecommons.org/licenses/by/4.0/ )
      -->
      <a-asset-item
        id="physic-room"
        src="assets/3d_gallery_for_vr_projects.glb"
      ></a-asset-item>
      <a-asset-item
        id="sound-1"
        response-type="arraybuffer"
        src="assets/sound1.mp3"
        preload="auto"
      ></a-asset-item>
      <img
        id="room-physic-out-texture"
        :src="`assets/main-room-from-physic-room.png`"
      />
      <img
        id="room-gol-out-texture"
        :src="`assets/main-room-from-gol-room.png`"
      />
      <img id="room-physic-texture" :src="`assets/physicRoom.png`" />

      <img id="sky" src="/assets/sky.jpg" />

      <audio id="pallet-town-music" src="assets/pallet_town.mp3"></audio>
      <audio id="battle-music" src="/assets/battle.mp3" preload="auto"></audio>
      <audio
        id="pokemon-out"
        src="/assets/pokemon_out.mp3"
        preload="auto"
      ></audio>
      <audio id="beep" src="/assets/beep.mp3" preload="auto"></audio>
      <audio id="tackle" src="/assets/tackle.mp3" preload="auto"></audio>
    </a-assets>

    <template v-if="allAssetsLoaded">
      <a-sky src="#sky"></a-sky>
      <TheMainRoom :scale="scale" />
    </template>

    <TheCameraRig />
  </a-scene>
</template>
