<script setup>
import "../aframe/emit-when-near.js";
import "../aframe/event-set.js";
import "../aframe/clickable.js";

defineProps({
  scale: Number,
  color: String,
});


const annaQuest = () => {
  const sceneEl = document.querySelector('a-scene');
  const capturedPokemon =
    sceneEl.getAttribute("level-manager").capturedPokemon;
  const annaQuestAccepted =
    sceneEl.getAttribute("level-manager").annaQuestAccepted;

  if (capturedPokemon && !annaQuestAccepted) sceneEl.emit('annaQuest');
};
</script>

<template>
  <a-entity gltf-model="#anna" rotation="0 90 0" position="-20 0 -6" scale="1.3 1.3 1.3" clickable
    emit-when-near="event: annaQuest; distance: 4" @annaQuest="annaQuest">
    <a-entity id="anna-exclamation" visible="false" gltf-model="#exclamation" rotation="0 0 0" position="0 1.7 0"
      scale="1 1 1"></a-entity>
    <a-entity id="anna-exclamation-grey" gltf-model="#exclamation-grey" rotation="0 0 0" position="0 1.7 0"
      scale="1 1 1"></a-entity>
  </a-entity>
</template>
