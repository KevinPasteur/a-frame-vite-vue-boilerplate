AFRAME.registerComponent("battle-zone", {
  init: function () {
    this.el.setAttribute("visible", false); // Commencez par rendre la zone invisible

    this.el.sceneEl.addEventListener("combatAccepted", () => {
      this.startBattleMusic();
      this.el.setAttribute("visible", true); // Rendez la zone visible lorsque le combat est accepté
    });

    this.onHit = this.onHit.bind(this);
  },

  play: function () {
    this.el.addEventListener("contactbegin", this.onHit);
  },

  pause: function () {
    this.el.removeEventListener("contactbegin", this.onHit);
  },

  onHit: function (evt) {
    const hitEl = evt.detail.otherComponent.el;

    if (this.el.object3D.visible && hitEl.hasAttribute("pokeball")) {
      //Affiche le menu de combat
      this.el.sceneEl.emit("battleMenu");

      //Commencez le combat
      this.el.sceneEl.emit("startCombat");

      // Cachez la Pokeball
      hitEl.setAttribute("visible", "false");
    }
  },

  startBattleMusic: function () {
    const currentMusic = document.getElementById("entity-pt-music");
    if (currentMusic) {
      currentMusic.components.sound.stopSound();
    }

    const battleMusic = document.getElementById("entity-battle-music");
    if (battleMusic) {
      battleMusic.components.sound.playSound();
    }
  },
});
