AFRAME.registerComponent("hp", {
  schema: {
    maxHp: { type: "number", default: 100 },
    currentHp: { type: "number", default: 100 },
    posX: { type: "number", default: 3 },
    posY: { type: "number", default: 2 },
    posZ: { type: "number", default: 0 },
    rotationX: { type: "number", default: 0 },
    rotationY: { type: "number", default: 90 },
    rotationZ: { type: "number", default: 0 },
  },
  init: function () {
    const position = {
      x: this.data.posX,
      y: this.data.posY,
      z: this.data.posZ,
    };

    const rotation = {
      x: this.data.rotationX,
      y: this.data.rotationY,
      z: this.data.rotationZ,
    };

    const hpBar = document.createElement("a-box");
    hpBar.setAttribute("color", "green");
    hpBar.setAttribute("depth", "0.2");
    hpBar.setAttribute("height", "0.19");
    hpBar.setAttribute("rotation", rotation);
    hpBar.setAttribute("width", "1.9");
    hpBar.setAttribute("position", {
      x: position.x + 0.1,
      y: position.y,
      z: position.z,
    });

    this.el.appendChild(hpBar);
    this.hpBar = hpBar;
  },
  update: function () {
    const hpRatio = this.data.currentHp / this.data.maxHp;

    this.hpBar.setAttribute("width", 1.9 * hpRatio);

    this.hpBar.setAttribute("position", {
      x: this.data.posX - 0.95 + (1.9 * hpRatio) / 2,
      y: this.data.posY,
      z: this.data.posZ + 0.06,
    });

    this.hpBar.setAttribute("color", hpRatio > 0.5 ? "green" : "red");
  },
});
