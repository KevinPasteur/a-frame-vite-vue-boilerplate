<script setup>
import "../aframe/disable-in-vr.js";
import "../aframe/hide-in-vr.js";
import "../aframe/simple-navmesh-constraint.js";
import "../aframe/blink-controls.js";
import "../aframe/physx-grab.js";
import "../aframe/attach-to-left-hand.js";

</script>

<template>
  <a-entity position="-4 0 -12" rotation="0 -90 0" id="camera-rig" movement-controls="camera: #head;"
    disable-in-vr="component: movement-controls;">
    <a-entity id="head" look-controls="pointerLockEnabled: true"
      simple-navmesh-constraint="navmesh: [data-role='nav-mesh']; height: 1.65;"
      disable-in-vr="component: simple-navmesh-constraint;" camera position="0 1.65 0">
      <a-entity geometry="primitive: circle; radius: 0.0003;" material="shader: flat; color: white;" cursor
        raycaster="far: 4; objects: [clickable]; showLine: false;" position="0 0 -0.1"
        disable-in-vr="component: raycaster; disableInAR: false;" hide-in-vr="hideInAR: false"></a-entity>
    </a-entity>

    <a-entity id="hand-left" hand-controls="hand: left" blink-controls="
          cameraRig: #camera-rig;
          teleportOrigin: #head;
          collisionEntities: [data-role='nav-mesh'];
          snapTurn: false;
        " physx-grab>
      <a-console thumbstick-scrolling="#left-hand" font-size="35" position="0 .13 -.36" scale=".33 .33 .33"
        rotation="-70.7 -1.77"></a-console>

      <a-sphere id="hand-left-collider" radius="0.02" visible="false"
        physx-body="type: kinematic; emitCollisionEvents: true">
      </a-sphere>


      <a-entity id="dialogue-box" position="-0.1 0 0" rotation="180 0 90" visible="false" dialogue-manager>

        <a-plane id="dialogue-background" position="0 0 0" rotation="0 0 0" width="0.2" height="0.1" color="#000"
          opacity="0.8"></a-plane>

        <a-entity id="dialogue-content"></a-entity>

        <a-sound id="dialogue-beep" src="#beep"></a-sound>
      </a-entity>

      <aa-cylinder id="left-arm" position="0 0.2 0" rotation="0 0 0" radius="0.05" height="0.2" color="gray"
        physx-body="type: kinematic; emitCollisionEvents: true">
      </aa-cylinder>
    </a-entity>

    <a-entity id="hand-right" hand-controls="hand: right" laser-controls="hand: right"
      raycaster="far: 4; objects: [clickable]; showLine: true;" physx-grab>
      <a-sphere id="hand-right-collider" radius="0.02" visible="false"
        physx-body="type: kinematic; emitCollisionEvents: true">
      </a-sphere>
    </a-entity>
  </a-entity>
</template>
