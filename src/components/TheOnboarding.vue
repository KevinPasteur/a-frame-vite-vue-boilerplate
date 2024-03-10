<script setup>
import { ref } from "vue";

defineProps({
  loaded: Boolean,
});

const showOnboarding = ref(true);

function enterScene() {
  showOnboarding.value = false;
  if (
    AFRAME.utils.device.checkHeadsetConnected() &&
    !AFRAME.utils.device.isMobile()
  ) {
    document.querySelector("a-scene").enterVR();
  }
  playPalletTownMusic();
}

// Fonction pour jouer la musique
function playPalletTownMusic() {
  const music = document.querySelector("#entity-pt-music");
  music.components.sound.playSound();
}
</script>

<template>
  <div id="onboarding" v-if="showOnboarding">
    <div>
      <h1>NotPokemon VR</h1>
      <p v-if="!loaded">loading...</p>
      <button v-if="loaded" @click="enterScene()">Enter scene</button>
      <div class="licences">
        <section>
          <h4>Contexte</h4>
          <i>Et si vous replongiez dans l'un des meilleurs moments de votre enfance ?</i>
          <p>

            Prenez part à une aventure en réalité virtuelle dans l'univers de Pokémon. Revivez le choix le plus
            difficile de votre enfance : choisir votre premier Pokémon, entre Bulbizarre, Salamèche
            et Carapuce.
          </p>
          <p>Prenez ensuite part à votre premier combat et montrez au monde entier que vous êtes digne de devenir le
            prochain Maître Pokémon.</p>
          <h4>Prise en charge</h4>
          <ul>
            <li>
              Casque VR - Utiliser les contrôles de votre casque pour vous déplacer et regarder autour de vous, grâce au
              joystick gauche un TP vous permet de naviguer dans le monde, utilisez ensuite les gâchettes pour pouvoir
              attraper la pokéball et valider vos choix avec le laser.
            </li>
          </ul>
        </section>
        <dl>
          <dt>
            <i>Inclus</i>
          </dt>
          <dt>
            <a href="https://github.com/c-frame/aframe-extras" target="_blank">aframe-extras controls and
              animation-mixer</a>
          </dt>
          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/c-frame/physx" target="_blank">aframe physx</a>
          </dt>
          <dd>
            <a href="https://github.com/c-frame/aframe-extras/blob/master/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/jure/aframe-blink-controls/" target="_blank">aframe-blink-controls</a>
          </dt>
          <dd>
            <a href="https://github.com/jure/aframe-blink-controls/blob/main/LICENSE" target="_blank">MIT License</a>
          </dd>

          <dt>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/" target="_blank">aframe-multi-camera</a>
          </dt>
          <dd>
            <a href="https://github.com/diarmidmackenzie/aframe-multi-camera/blob/main/LICENSE" target="_blank">MIT
              License</a>
          </dd>

          <dt>
            <a href=" https://github.com/AdaRoseCannon/aframe-xr-boilerplate"
              target="_blank">simple-navmesh-constraint</a>
          </dt>
          <dd>By Ada Rose Cannon under MIT License</dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/vr-gallery-1ac32ed62fdf424498acc146fad31f7e" target="_blank">VR
              Gallery</a>
          </dt>
          <dd>
            by
            <a href="https://sketchfab.com/mvrc.art" target="_blank">Maxim Mavrichev</a>
            under
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/3d-gallery-for-vr-projects-68f77ed8558c4bd59e0a13e2cc9d1fd1"
              target="_blank">Physic room model</a>
          </dt>
          <dd>
            by
            <a href="https://sketchfab.com/tekuto1s" target="_blank">tekuto1s</a>
            under
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>



          <dt>
            <a href="#" target="_blank">Sky</a>
          </dt>
          <dd>
            par
            <a href="https://skybox.blockadelabs.com/" target="_blank">Skybox - Blockade Labs</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pallet-town-70929a9e275f4ff8a323e23441dcef1e"
              target="_blank">Pallet Town</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/bhaveshchalke4513v2" target="_blank">bhavesh chalke</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pokemon-basic-pokeball-9b29539199c14ddea4de7776c4d758df"
              target="_blank">Pokemon Basic Pokeball</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/JMGameDev" target="_blank">JMGameDev</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/exclamation-point-8161d30cfabe446dae1fabfb920b0f58"
              target="_blank">Exclamation Point</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/hyperproduct" target="_blank">HyperProduct</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/bulbasaur-b48cced464774f7d9e8e35e0c0129849"
              target="_blank">Bulbasaur</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/Styrkee" target="_blank">Styrkee</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/004-charmander-e984bc9e75244d8a9cc1319753c1f991"
              target="_blank">004
              Charmander</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/AnimeLover200" target="_blank">A-Z inc.</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/007-squirtle-102ca3237aac44a6b5b15d6e3fbdc1df" target="_blank">007
              Squirtle</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/AnimeLover200" target="_blank">A-Z inc.</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/statue-pedestal-e83ca5c7916e416c975e88fa858591ba"
              target="_blank">Statue Pedestal</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/Spookee" target="_blank">Jonathan. B</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/anna-pokemon-0558e9fce7934b8b94c94552aaa44b4e" target="_blank">Anna
              (Pokemon)</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/Gusifer71" target="_blank">Gusifer719</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pokemon-professor-oak-212d5d395ad14367aacac0be70922acb"
              target="_blank">Pokemon Professor Oak</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/lopuh22721" target="_blank">3D Resource</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <a href="https://sketchfab.com/3d-models/pokemon-trainer-mallow-9ea55cec769e468db24bde0811b37938"
              target="_blank">Pokemon Trainer Mallow</a>
          </dt>
          <dd>
            par
            <a href="https://sketchfab.com/ijackprovostjr" target="_blank">JackTheOhio</a>
            sous
            <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">CC BY 4.0</a>
          </dd>

          <dt>
            <i>Musiques et Sons</i>
          </dt>

          <dt>
            <a href="https://youtu.be/2BQsxO-wUa4?si=cA1qfmOuaOEBxs9-" target="_blank">Pallet Town: Remastered</a>
          </dt>
          <dd>
            par
            <a href="https://www.youtube.com/channel/UCKKKbeAhjKYJfOy5Opg8lcQ" target="_blank">Zame</a>
          </dd>

          <dt>
            <a href="https://youtu.be/qNvhxlgWMK0?si=_GIlOHymA69qGxPy" target="_blank">Pokémon Red/Blue/Yellow - Trainer
              Battle Remix</a>
          </dt>
          <dd>
            par
            <a href="https://www.youtube.com/@Bliitzit" target="_blank">Bliitzit</a>
          </dd>

          <dt>
            <a href="#" target="_blank">Pokéball</a>
          </dt>
          <dd>
            par
            <a href="#" target="_blank">Pokemon Company</a>
          </dd>

          <dt>
            <a href="#" target="_blank">Attaques</a>
          </dt>
          <dd>
            par
            <a href="#" target="_blank">Pokemon Company - Emerald</a>
          </dd>

          <dt>
            <a href="https://www.youtube.com/watch?v=6KA7oa33pgk" target="_blank">Beep</a>
          </dt>
          <dd>
            par
            <a href="https://www.youtube.com/@therelaxer3040" target="_blank">Echoverse Audio</a>
          </dd>


        </dl>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-size: 1.5rem;
}

a {
  color: #eee;
  text-decoration: none;
}

.licences {
  margin: 2rem 0;
  padding-bottom: 1rem;
  font-size: 1rem;
  text-align: left;
}

.licences dt {
  padding-top: 0.75rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.licences dd {
  margin-left: 0;
  font-size: 0.8rem;
}

#onboarding {
  position: absolute;
  top: 0;
  left: 0;
  background-color: #333;
  color: #ccc;
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  font-family: monospace;
  z-index: 10000;
  overflow: auto;
}

#onboarding>* {
  margin: 0 auto;
  max-width: 50rem;
  width: calc(100vw - 10rem);
  text-align: center;
  border-radius: 0.3rem;
  padding: 1rem;
  font-size: 1.3rem;
}

#onboarding button {
  font-size: 1.3rem;
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
}
</style>
#onboarding li { #onboarding li { font-size: 1rem; text-align: left; }
