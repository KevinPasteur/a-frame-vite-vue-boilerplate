AFRAME.registerComponent("attack-action", {
  schema: {
    attackName: { type: "string" },
    damage: { type: "number" },
  },
  init: function () {
    this.el.addEventListener("click", () => {
      this.el.sceneEl.emit("playerAttack", {
        attackName: this.data.attackName,
        damage: this.data.damage,
      });
    });
  },
});
