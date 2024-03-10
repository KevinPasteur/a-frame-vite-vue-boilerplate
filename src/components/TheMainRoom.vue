<script setup>
import Anna from "./Anna.vue";

import "../aframe/life-like-automaton.js";
import "../aframe/physx-force-pushable.js";
import "../aframe/clickable.js";
import "../aframe/attack-action.js";
import "../aframe/pokeball.js";
import "../aframe/hp-system.js";
import "../aframe/battle-zone.js";
import "../aframe/emit-when-near.js";
import "../aframe/disable-in-vr.js";

defineProps({
  scale: Number,
});

const sceneEl = document.querySelector("a-scene");

const handleQuest = (condition, quest) => {
  if (!condition) sceneEl.emit(quest);
};
</script>

<template>

  <a-entity id="entity-pt-music" sound="src: #pallet-town-music; volume: 0.3; loop: true; positional: false"></a-entity>
  <a-entity id="entity-battle-music" sound="src: #battle-music; volume: 0.3; loop: true; positional: false"></a-entity>
  <a-entity id="entity-pokemon-out" sound="src: #pokemon-out; volume: 0.3; positional: false"></a-entity>
  <a-entity id="entity-pokemon-capture-sound" sound="src: #capture-sound; volume: 0.3; positional: false"></a-entity>
  <a-entity gltf-model="#room" rotation="0 90 0" position="0 0 -5" scale="1 1 1">
  </a-entity>

  <a-entity id="entity-squirtle" visible="false" gltf-model="#squirtle" rotation="0 270 0" position="16 0 -3"
    scale="1 1 1" pokemon data-name="squirtle">
  </a-entity>
  <a-entity id="entity-charmander" visible="false" gltf-model="#charmander" rotation="0 270 0" position="16 0 0"
    scale="1 1 1" pokemon data-name="charmander">
  </a-entity>
  <a-entity id="entity-bulbasaur" visible="false" gltf-model="#bulbasaur" rotation="0 270 0" position="16 0 3"
    scale="1 1 1" pokemon data-name="bulbasaur">
  </a-entity>

  <a-entity id="entity-professor-oak" gltf-model="#professor-oak" rotation="270 0 90" position="9.5 0 -14" scale="1 1 1"
    visible="false" physx-body="type: static" emit-when-near="event: oakQuest; distance: 4" @oakQuest="
      handleQuest(
        sceneEl.getAttribute('level-manager').oakQuestAccepted,
        'oakQuest'
      )
      ">
    <a-entity id="oak-exclamation" gltf-model="#exclamation" rotation="90 0 0" position="0 0 2.1" scale="1 1 1">
    </a-entity>
  </a-entity>

  <a-entity id="entity-mallow" gltf-model="#mallow" rotation="-90 180 0" position="1.5 0 -1" scale="1 1 1"
    physx-body="type: static" emit-when-near="event: mallowQuest; distance: 4" @mallowQuest="
      handleQuest(
        sceneEl.getAttribute('level-manager').mallowQuestAccepted,
        'mallowQuest'
      )
      ">
    <a-entity id="mallow-exclamation" gltf-model="#exclamation" rotation="90 0 0" position="0 0 1.8" scale="1 1 1">
    </a-entity>
  </a-entity>

  <Anna id="anna" rotation="0 90 0" position="-18 0 -6" scale="1.3 1.3 1.3" />

  <a-entity id="enemy" gltf-model="#eevee" hp="maxHp:100;currentHp:100;posX:3; posY:2; posZ:0" rotation="0 0 0"
    position="-22 -0.35 -4.6" scale="1 1 1"
    animation__tilt="property: rotation; to: 90 0 0; dur: 1000; startEvents: pokemonDefeated"
    animation__fade="property: components.material.material.opacity; from: 1; to: 0; dur: 500; startEvents: pokemonFaded; delay: 3000"
    animation__startattack="property: position; to: -20 -0.35 -4.6;dur: 100; easing: linear; startEvents: start-attack;"
    animation__endattack="property: position; to: -22 -0.35 -4.6;dur: 100; easing: linear; startEvents: end-attack;">
    <a-entity id="entity-tackle" sound="src: #tackle; volume: 1; positional: false"></a-entity>
  </a-entity>

  <a-entity id="battleZone" rotation="-90 0 0" geometry="primitive: circle; radius: 1" position="-13 0.01 -4.6"
    material="color: blue; opacity: 0.5" physx-body="type: static; emitCollisionEvents: true" battle-zone></a-entity>

  <a-entity gltf-model="#pedestal" rotation="0 270 0" position="10 -0.5 -0.2" scale="1 1 1"
    physx-body="type: static; emitCollisionEvents: true">
  </a-entity>

  <a-entity id="entity-pokeball" clickable gltf-model="#pokeball" pokeball="captured: false" rotation="0 90 0"
    position="10 1.275 -0.2" scale="0.02 0.02 0.02">
  </a-entity>

  <!-- Navigation mesh  -->
  <a-entity id="navmesh" geometry="primitive: plane; height: 43; width: 44" position="1.2 0.01 -6" rotation="-90 0 0"
    data-role="nav-mesh" material="color: blue" visible="false"></a-entity>

  <!-- Collisions -->
  <a-entity position="0 -2 0" visible="false">
    <a-entity geometry="primitive: plane; height: 60; width: 60" position="-0.4 -1 -6.7" rotation="-90 0 0"
      material="color: purple" physx-body="type: static"></a-entity>
    <a-entity geometry="primitive: plane; height: 10.1; width: 45.1" rotation="0 0 0" position="1 6 -27"
      material="color: purple" physx-body="type: static"></a-entity>
    <a-entity geometry="primitive: plane; height: 10.1; width: 45.1" rotation="0 180 0" position="1 6 15.5"
      material="color: purple" physx-body="type: static"></a-entity>
    <a-entity geometry="primitive: plane; height: 10.1; width: 45.1" rotation="0 90 0" position="-21 6 -5"
      material="color: purple" physx-body="type: static"></a-entity>
    <a-entity geometry="primitive: plane; height: 10.1; width: 45.1" rotation="0 -90 0" position="23 6 -6"
      material="color: purple" physx-body="type: static"></a-entity>
  </a-entity>
</template>
