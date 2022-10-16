<template>
  <div class="card">
    <div
      class="top"
      v-bind:style="{
        'background-image': 'url(' + person.picture + ')',
        'background-size': 'cover',
        'background-position': 'center',
        'background-attachment': 'fixed',
        'background-repeat': 'no-repeat',
      }"
    >
      <div class="text">
        <div class="name-wrapper">
          <div class="name">{{ person.name }}</div>
        </div>
        <div class="title">{{ person.ubication }}</div>
      </div>
      <button class="like">
        <div class="hexagon">
          <img
            class="icon"
            src="../../public/assets/icons/checkmark-circle.svg"
            alt=""
          />
        </div>
      </button>
    </div>
    <div class="bottom">
      <ion-grid class="buttons" center text-center>
        <ion-row>
          <ion-col>
            <button class="play" v-if="!unlockedCard" @click="unlockCard()">
              <ion-icon :icon="playCircle" />
            </button>
            <button class="playing" v-if="unlockedCard">
              <ion-icon :icon="pauseCircle" />
            </button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { playCircle, pauseCircle } from "ionicons/icons";
import { IonGrid, IonRow, IonCol, IonIcon } from "@ionic/vue";
export default defineComponent({
  name: "PersonCard",
  emits: ["unlocked-card"],
  props: {
    person: {
      type: Object,
      required: true,
    },
    unlockedCard: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    unlockedCard: function () {
      this.addCustomStyles();
    },
  },
  components: {
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
  },
  setup() {
    return {
      playCircle,
      pauseCircle,
    };
  },
  methods: {
    addCustomStyles() {
      const personCard = document.querySelector(".top");
      if (!this.unlockedCard) {
        personCard?.classList.add("blur");
      } else {
        personCard?.classList.remove("blur");
      }
    },
    unlockCard() {
      this.$emit("unlocked-card", true);
    },
  },
  mounted() {
    this.addCustomStyles();
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500");
* {
  box-sizing: border-box;
  margin: 0;
  font-family: Poppins, sans-serif;
  user-select: none;
}

.card {
  background: #fffff9;
  border-radius: 1rem;
  box-shadow: 0px 30px 20px -10px rgba(0, 0, 0, 0.2);
  height: 70%;
  display: flex;
  flex-direction: column;
  max-width: 90%;
  min-width: 90%;
}

.card button {
  border: none;
  cursor: pointer;
}
.card button:focus {
  outline: 0;
}
.card .top {
  color: #fffff9;
  border-radius: 1rem 1rem 0rem 0rem;
  position: relative;
  height: 30rem;
}
.card .top:after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 33%;
  content: "";
  background-image: linear-gradient(transparent, rgba(0, 0, 0, 0.3));
}
.card .top svg {
  fill: #572a31;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card .top .social-buttons {
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}
.card .top .social-buttons button {
  background-color: transparent;
}
.card .top .social-buttons button img {
  width: 30px;
  height: 30px;
}
.card .top .social-buttons button:hover i {
  color: #ffc629;
}
.card .top button.like {
  z-index: 1;
  position: absolute;
  background-color: transparent;
  bottom: 1.5rem;
  right: 1.5rem;
}

.card .top .text {
  z-index: 1;
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
}
.card .top .text .name-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.25rem;
}

.card .top .text .name-wrapper .name {
  font-weight: 500;
  font-size: 2rem;
}
.card .top .text .title {
  font-size: 1.2rem;
}
.card .bottom {
  display: grid;
  place-content: center;
  padding: 1rem;
  background-color: hsl(260deg 33% 98%);
  border-radius: 0rem 0rem 1rem 1rem;
}
.card .bottom .desc {
  color: #1d252c;
}
.card .bottom .buttons {
  display: flex;
}
.card .bottom .buttons button {
  color: #1d252c;
  font-size: 1.2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 1em;
  padding: 0.2rem;
}
.card .bottom .buttons button i {
  font-size: 1rem;
}
.card .bottom .buttons button:hover {
  filter: brightness(110%);
}
.hexagon {
  display: flex;
  box-shadow: 0px 15px 15px -2px rgba(0, 0, 0, 0.2);
  justify-content: center;
  align-items: center;
  position: relative;
  width: 40px;
  height: 23.09px;
  background-color: #ffc629;
  margin: 11.55px 0;
}
.hexagon:hover {
  box-shadow: 0px 15px 15px -5px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px) scale(1.1);
  filter: brightness(110%);
}
.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
.hexagon:before {
  bottom: 100%;
  border-bottom: 11.55px solid #ffc629;
}
.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 11.55px solid #ffc629;
}
.icon {
  width: 20px;
  height: 20px;
}
ion-grid {
  height: 100%;
}
ion-row {
  display: flex;
  align-items: center;
  justify-content: center;
}
.blur {
  filter: blur(5px);
  transition: all 5s ease-in-out;
  animation: blur 5s ease-in-out;
}
ion-icon {
  font-size: 3.5rem;
}
</style>
