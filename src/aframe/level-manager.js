import { pokemonAttacksDB } from "../utils/pokemonData.js";

AFRAME.registerComponent("level-manager", {
  schema: {
    capturedPokemon: { type: "string", default: "" },
    attacks: { type: "array", default: [] },
    mallowQuestAccepted: { type: "boolean", default: false },
    oakQuestAccepted: { type: "boolean", default: false },
    annaQuestAccepted: { type: "boolean", default: false },
    annaFightDone: { type: "boolean", default: false },
  },

  init: function () {
    this.el.addEventListener(
      "pokemonCaptured",
      this.onPokemonCaptured.bind(this)
    );
  },

  onPokemonCaptured: function (evt) {
    const pokemonData = evt.detail;

    this.data.capturedPokemon = pokemonData;
    this.data.attacks = pokemonAttacksDB[pokemonData.name];

    //Faire disparaître le point d'exclamation d'Anna
    this.el.sceneEl
      .querySelector("#anna-exclamation-grey")
      .setAttribute("visible", "false");

    this.el.sceneEl
      .querySelector("#anna-exclamation")
      .setAttribute("visible", "true");
  },
});
