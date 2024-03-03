AFRAME.registerComponent("quest-manager", {
  schema: {
    quest: { type: "string" },
  },
  init: function () {
    this.el.addEventListener("click", (evt) => {
      this.el.sceneEl
        .querySelector("#dialogue-box")
        .setAttribute("visible", false);

      if (this.data.quest === "mallow") {
        this.el.sceneEl.setAttribute("level-manager", {
          mallowQuestAccepted: true,
        });

        //Faire apparaître le Professeur Chen
        this.el.sceneEl
          .querySelector("#entity-professor-oak")
          .setAttribute("visible", "true");

        //Faire disparaître le point d'exclamation de Mallow
        this.el.sceneEl
          .querySelector("#mallow-exclamation")
          .setAttribute("visible", "false");
      }

      if (this.data.quest === "oak") {
        this.el.sceneEl.setAttribute("level-manager", {
          oakQuestAccepted: true,
        });

        //Faire apparaître les Pokemon
        const entitySquirtle =
          this.el.sceneEl.querySelector("#entity-squirtle");
        entitySquirtle.setAttribute("visible", "true");
        entitySquirtle.setAttribute(
          "physx-body",
          "type: static; emitCollisionEvents: true;"
        );
        const entityBulbasaur =
          this.el.sceneEl.querySelector("#entity-bulbasaur");
        entityBulbasaur.setAttribute("visible", "true");
        entityBulbasaur.setAttribute(
          "physx-body",
          "type: static; emitCollisionEvents: true;"
        );
        const entityCharmander =
          this.el.sceneEl.querySelector("#entity-charmander");
        entityCharmander.setAttribute("visible", "true");
        entityCharmander.setAttribute(
          "physx-body",
          "type: static; emitCollisionEvents: true;"
        );

        //Affiche la pokeball et lui crée un corps physique
        const entityPokeball =
          this.el.sceneEl.querySelector("#entity-pokeball");
        entityPokeball.setAttribute("visible", "true");
        entityPokeball.setAttribute(
          "physx-body",
          "type: dynamic; emitCollisionEvents: true;"
        );
        entityPokeball.setAttribute("physx-grabbable", "");
        entityPokeball.setAttribute("physx-force-pushable", "");

        //Faire disparaître le point d'exclamation d'Oak
        this.el.sceneEl
          .querySelector("#oak-exclamation")
          .setAttribute("visible", "false");
      }

      if (this.data.quest === "anna") {
        this.el.sceneEl.setAttribute("level-manager", {
          annaQuestAccepted: true,
        });

        //Lance le combat contre Anna
        this.el.sceneEl.emit("combatAccepted");

        //Faire disparaître le point d'exclamation d'Anna
        this.el.sceneEl
          .querySelector("#anna-exclamation")
          .setAttribute("visible", "false");
      }
    });
  },
});
