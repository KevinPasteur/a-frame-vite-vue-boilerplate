AFRAME.registerComponent("battle-system", {
  init: function () {
    this.isPlayerTurn = true; // Commencer par le tour du joueur

    this.el.sceneEl.addEventListener(
      "playerAttack",
      this.handlePlayerAttack.bind(this)
    );
    this.el.sceneEl.addEventListener(
      "enemyTurn",
      this.handleEnemyTurn.bind(this)
    );

    this.el.sceneEl.addEventListener("startCombat", () => {
      const pokemonOutMusic = document.getElementById("entity-pokemon-out");
      if (pokemonOutMusic) {
        pokemonOutMusic.components.sound.playSound();
      }

      // Accéder au composant level-manager pour récupérer le Pokémon capturé
      const capturedPokemon =
        this.el.sceneEl.getAttribute("level-manager").capturedPokemon;

      if (capturedPokemon) {
        const battlePosition = { x: -13, y: 0.01, z: -4.6 };

        // Fait apparaître le Pokémon capturé pour le combat
        const pokemonEl = document.createElement("a-entity");
        pokemonEl.setAttribute("gltf-model", `#${capturedPokemon.name}`);
        pokemonEl.setAttribute("position", battlePosition);
        pokemonEl.setAttribute("rotation", "0 -90 0");
        pokemonEl.setAttribute("scale", "1 1 1");
        pokemonEl.setAttribute("pokemon", "");
        pokemonEl.setAttribute(
          "physx-body",
          "type: static; emitCollisionEvents: true"
        );
        pokemonEl.setAttribute("id", "myPokemon");
        pokemonEl.setAttribute("hp", {
          maxHp: 100,
          currentHp: 100,
          posX: 0,
          posY: 1.8,
          posZ: 0,
          rotationY: 180,
        });

        pokemonEl.setAttribute(
          "animation__startattack",
          "property: position; to: -15 -0.35 -4.6;dur: 100; easing: linear; startEvents: start-attack;"
        );
        pokemonEl.setAttribute(
          "animation__endattack",
          "property: position; to: -13 0.01 -4.6;dur: 100; easing: linear; startEvents: end-attack;"
        );

        this.el.sceneEl.appendChild(pokemonEl);
      }
    });
  },
  handlePlayerAttack: function (evt) {
    if (!this.isPlayerTurn) return;

    // Logique d'attaque du joueur
    const enemyEl = this.el.sceneEl.querySelector("#enemy");
    const pokemonPlayer = this.el.sceneEl.querySelector("#myPokemon");
    let enemyHp = enemyEl.getAttribute("hp").currentHp;

    pokemonPlayer.addEventListener("animationcomplete", (evt) => {
      pokemonPlayer.emit("end-attack", null, false);
    });

    document.getElementById("entity-tackle").components.sound.playSound();
    pokemonPlayer.emit("start-attack", null, false);

    const damage = evt.detail.damage;

    enemyHp = Math.max(enemyHp - damage, 0);
    enemyEl.setAttribute("hp", "currentHp", enemyHp);

    if (enemyHp <= 0) {
      enemyEl.emit("pokemonDefeated");
      setTimeout(() => {
        enemyEl.emit("pokemonFaded");
        setTimeout(() => {
          enemyEl.parentNode.removeChild(enemyEl); // Supprime le Pokémon ennemi de la scène après la disparition
        }, 500); // Correspond au dur de l'animation de disparition
      }, 500); // Délai après la bascule en arrière avant de commencer à disparaître
      this.endBattle();
    } else {
      this.isPlayerTurn = false; // Passer le tour à l'ennemi
      setTimeout(() => this.el.sceneEl.emit("enemyTurn"), 1500); // Donner un délai avant le tour de l'ennemi
    }
  },

  handleEnemyTurn: function () {
    if (this.isPlayerTurn) return;

    const enemyEl = this.el.sceneEl.querySelector("#enemy");

    enemyEl.addEventListener("animationcomplete", (evt) => {
      enemyEl.emit("end-attack", null, false);
    });

    document.getElementById("entity-tackle").components.sound.playSound();
    enemyEl.emit("start-attack", null, false);

    // Logique d'attaque de l'ennemi
    const myPokemonEl = document.getElementById("myPokemon");
    let myPokemonHp = myPokemonEl.getAttribute("hp").currentHp;
    const damage = 15;

    setTimeout(() => {
      myPokemonHp = Math.max(myPokemonHp - damage, 0);
      myPokemonEl.setAttribute("hp", "currentHp", myPokemonHp);

      if (myPokemonHp <= 0) {
        this.endBattle();
      } else {
        this.isPlayerTurn = true; // Retourner le tour au joueur
      }
    }, 400);
  },

  endBattle: function () {
    // Reset des HP, masquer les boutons de combat, etc.
    const myPokemonEl = document.getElementById("myPokemon");
    myPokemonEl.setAttribute("hp", "currentHp", this.data.maxHp);

    const pokeballEl = document.querySelector("#entity-pokeball");
    if (myPokemonEl) {
      myPokemonEl.setAttribute("visible", "false"); // Masquez le Pokémon
    }
    if (pokeballEl) {
      pokeballEl.setAttribute("visible", "true"); // Réaffichez la Pokeball
      pokeballEl.setAttribute("position", "16 1.65 -3");
    }

    const battleZone = document.getElementById("battleZone");
    battleZone.setAttribute("visible", false);

    this.el.sceneEl.emit("ending");
    this.changeMusic();
  },

  changeMusic: function () {
    const battleMusic = document.getElementById("entity-battle-music");
    if (battleMusic) {
      battleMusic.components.sound.stopSound();
    }
    const ptMusic = document.getElementById("entity-pt-music");
    if (ptMusic) {
      ptMusic.components.sound.playSound();
    }
  },
});
