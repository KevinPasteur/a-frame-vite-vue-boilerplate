AFRAME.registerComponent("test-anim", {
  init: function () {
    this.el.addEventListener("click", (evt) => {
      const enemyEl = this.el.sceneEl.querySelector("#enemy");

      enemyEl.addEventListener("animationcomplete", (evt) => {
        enemyEl.emit("end-attack", null, false);
      });
      document.getElementById("entity-tackle").components.sound.playSound();

      console.log(document.getElementById("entity-tackle"));
      enemyEl.emit("start-attack", null, false);
    });
  },
});
