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
      <!-- <div class="social-buttons">
        <button>
          <img src="../../public/assets/icons/heart.svg" alt="" /></button
        ><button>
          <img src="../../public/assets/icons/heart.svg" alt="" /></button
        ><button>
          <img src="../../public/assets/icons/heart.svg" alt="" />
        </button>
      </div> -->
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
      <div class="desc"></div>
      <div class="buttons">
        <button class="like">
          <!-- <i class="material-icons">person</i> -->
          <div class="height">Altura</div></button
        ><button class="status">
          <!-- <i class="material-icons">search</i> -->
          <div class="height">Edad</div></button
        ><button class="horo">
          <!-- <i class="material-icons">share</i> -->
          <div class="height">Clase Social</div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PersonCard",
  props: {
    person: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
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
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card * {
  transition: all 200ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
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
  width: 100%;
  height: 100%;
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
  background-color: #f3efa1;
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
  background-color: #fdda64;
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
</style>
