AFRAME.registerComponent("pokeball-attachment", {
  init: function () {
    this.hand = document.querySelector("#left-arm"); // Récupération de l'entité du bras gauche
    this.attached = false; // Indicateur pour savoir si la Pokéball est attachée ou non

    // Liaison des gestionnaires d'événements
    this.onHit = this.onHit.bind(this);
    this.onGripClose = this.onGripClose.bind(this); // Ajout d'un gestionnaire pour l'événement de saisie
  },

  play: function () {
    this.el.addEventListener("contactbegin", this.onHit);
    this.el.addEventListener("gripdown", this.onGripClose); // Écoutez pour quand la Pokéball est saisie
  },

  pause: function () {
    this.el.removeEventListener("contactbegin", this.onHit);
    this.el.removeEventListener("gripdown", this.onGripClose); // Arrête d'écouter l'événement de saisie
  },

  onHit: function (evt) {
    if (this.attached) return; // Si la Pokéball est déjà attachée, ne faites rien

    var hitEl = evt.detail.otherComponent.el; // L'élément avec lequel la Pokéball est entrée en contact
    console.log("Cet element: " + this.el.id);
    console.log("L'autre element: " + hitEl.id);
    if (hitEl.id !== "pokeball") return; // Si l'élément n'est pas le bras gauche, ne faites rien

    console.log("Attaching Pokéball to the left arm");
    //this.attached = true;
    this.addJoint(hitEl, evt.target);
  },

  onGripClose: function () {
    console.log("Grab Started");
    if (!this.attached) return; // Si la Pokéball n'est pas attachée, ne faites rien
    //this.attached = false;
    this.removeJoint(); // Détachez la Pokéball du bras
  },

  addJoint(el, target) {
    this.removeJoint();
    console.log("target id : " + target.id);
    this.joint = document.createElement("a-entity");
    this.joint.setAttribute(
      "physx-joint",
      `type: Fixed; target: #${target.id}`
    );
    console.log(this.joint.outerHTML);
    //console.log(el.outerHTML);
    el.appendChild(this.joint);
  },
  removeJoint() {
    if (!this.joint) return;
    console.log("Enleve la pokemon");
    this.joint.parentElement.removeChild(this.joint);
    this.joint = null;
  },
});
