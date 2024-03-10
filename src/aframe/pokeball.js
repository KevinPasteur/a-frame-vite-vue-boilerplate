AFRAME.registerComponent("pokeball", {
  schema: {
    captured: { type: "boolean", default: false },
  },

  init: function () {
    this.el.setAttribute("visible", false);
    this.onHit = this.onHit.bind(this);
  },

  play: function () {
    this.el.addEventListener("contactbegin", this.onHit);
  },

  pause: function () {
    this.el.removeEventListener("contactbegin", this.onHit);
  },

  onHit: function (evt) {
    var hitEl = evt.detail.otherComponent.el;

    if (!this.data.captured && hitEl.hasAttribute("pokemon")) {
      this.data.captured = true;

      const captureSound = document.getElementById(
        "entity-pokemon-capture-sound"
      );
      if (captureSound) {
        captureSound.components.sound.playSound();
      }

      const pokemonData = {
        name: hitEl.dataset.name,
      };

      hitEl.parentNode.removeChild(hitEl);

      this.el.sceneEl.emit("pokemonCaptured", pokemonData);
    }
  },
});
