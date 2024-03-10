AFRAME.registerComponent("dialogue-manager", {
  init: function () {
    this.el.sceneEl.addEventListener("mallowQuest", () => {
      this.createQuestMessage({
        title: "Trouver le Professeur Chen !",
        message:
          "Le Professeur Chen veut te voir, il est devant son laboratoire.",
        name: "mallow",
      });
    });

    this.el.sceneEl.addEventListener("oakQuest", () => {
      this.createQuestMessage({
        title: "Un futur dresseur !",
        message:
          "Rends-toi au lac et utilise la pokeball pour capturer un Pokemon",
        name: "oak",
      });
    });

    this.el.sceneEl.addEventListener("annaQuest", () => {
      this.createQuestMessage({
        title: "Mon premier combat !",
        message:
          "Anna veut t'affronter pour voir si tu es digne de devenir dresseur !",
        name: "anna",
      });
    });

    this.el.sceneEl.addEventListener("battleMenu", () => {
      this.createBattleMenuContent();
      this.playBeepSound();
      this.el.setAttribute("visible", true);
    });

    this.el.sceneEl.addEventListener("ending", () => {
      this.createQuestMessage(
        {
          title: "Le prochain Maitre Pokemon !",
          message:
            "C'est la fin de la demo, tu as fini ton aventure pour le moment !",
        },
        false
      );
    });
  },

  createQuestMessage: function (quest, acceptButton = true) {
    const dialogueContent = this.el.querySelector("#dialogue-content");

    // Effacer le contenu précédent
    this.removeContent();

    // Avertir le joueur avec un son
    this.playBeepSound();

    this.el.setAttribute("visible", true);

    const titleEntity = document.createElement("a-text");
    titleEntity.setAttribute("value", quest.title);
    titleEntity.setAttribute("color", "#f2f2f2");
    titleEntity.setAttribute("align", "center");
    titleEntity.setAttribute("position", "0 0.04 0");
    titleEntity.setAttribute("width", "0.3");
    dialogueContent.appendChild(titleEntity);

    const messageEntity = document.createElement("a-text");
    messageEntity.setAttribute("value", quest.message);
    messageEntity.setAttribute("color", "#f2f2f2");
    messageEntity.setAttribute("align", "center");
    messageEntity.setAttribute("position", "0 0.015 0");
    messageEntity.setAttribute("width", "0.20");
    dialogueContent.appendChild(messageEntity);

    if (acceptButton) {
      const acceptText = document.createElement("a-text");
      acceptText.setAttribute("value", "Accepter la quete");
      acceptText.setAttribute("color", "#f2f2f2");
      acceptText.setAttribute("align", "center");
      acceptText.setAttribute("position", "0 -0.01 0");
      acceptText.setAttribute("width", "0.20");
      dialogueContent.appendChild(acceptText);

      const acceptButton = document.createElement("a-box");
      acceptButton.setAttribute("id", "accept-button");
      acceptButton.setAttribute("clickable", "");
      acceptButton.setAttribute("quest-manager", `quest: ${quest.name}`);
      acceptButton.setAttribute("color", "green");
      acceptButton.setAttribute("position", "0 -0.03 0");
      acceptButton.setAttribute("width", "0.05");
      acceptButton.setAttribute("height", "0.02");
      acceptButton.setAttribute("depth", "0.01");
      dialogueContent.appendChild(acceptButton);
    }
  },

  createBattleMenuContent: function () {
    const dialogueContent = this.el.querySelector("#dialogue-content");

    // Effacer le contenu précédent
    this.removeContent();

    const messageEntity = document.createElement("a-text");
    messageEntity.setAttribute("value", "Quelle attaque utiliser ?");
    messageEntity.setAttribute("color", "#f2f2f2");
    messageEntity.setAttribute("align", "center");
    messageEntity.setAttribute("position", "0 0.04 0");
    messageEntity.setAttribute("width", "0.25");
    dialogueContent.appendChild(messageEntity);

    const attacks = this.el.sceneEl.getAttribute("level-manager").attacks;

    const buttonsPosition = [
      { x: -0.055, y: -0.01, z: 0 },
      { x: 0.055, y: -0.01, z: 0 },
    ];

    attacks.forEach((element, index) => {
      const position = buttonsPosition[index];
      const messageAttackEntity = document.createElement("a-text");
      messageAttackEntity.setAttribute("value", `${element.name}`);
      messageAttackEntity.setAttribute("color", "#f2f2f2");
      messageAttackEntity.setAttribute("align", "center");
      messageAttackEntity.setAttribute(
        "position",
        `${position.x} 0.01 ${position.z}`
      );
      messageAttackEntity.setAttribute("width", "0.25");
      dialogueContent.appendChild(messageAttackEntity);

      const attackButton = document.createElement("a-box");
      attackButton.setAttribute("id", "attack-button");
      attackButton.setAttribute("clickable", "");
      attackButton.setAttribute(
        "attack-action",
        `attackName: ${element.name}; damage: ${element.damage}`
      );
      attackButton.setAttribute("color", `${element.color}`);

      attackButton.setAttribute(
        "position",
        `${position.x} ${position.y} ${position.z}`
      );
      attackButton.setAttribute("width", "0.05");
      attackButton.setAttribute("height", "0.02");
      attackButton.setAttribute("depth", "0.01");
      dialogueContent.appendChild(attackButton);
    });
  },

  removeContent: function () {
    const dialogueContent = this.el.querySelector("#dialogue-content");
    while (dialogueContent.firstChild) {
      dialogueContent.removeChild(dialogueContent.firstChild);
    }
  },

  playBeepSound: function () {
    document.getElementById("dialogue-beep").components.sound.playSound();
  },
});
