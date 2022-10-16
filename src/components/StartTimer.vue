<template>
  <article class="timer-full bounceInRight" v-if="unlockedCardData">
    <ion-text>Tiempo restante:</ion-text>
    <article class="timer">
      <ion-progress-bar :value="countDownTimeProgress"></ion-progress-bar>
    </article>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { playCircleSharp } from "ionicons/icons";
import { IonProgressBar, IonText } from "@ionic/vue";
import global from "../helpers/global.js";
export default defineComponent({
  name: "StartTimer",
  emits: ["locked-card"],
  props: {
    unlockedCard: {
      type: Boolean,
      required: true,
    },
  },

  components: {
    IonProgressBar,
    IonText,
  },

  data() {
    return {
      countDownTimeDefault: 5,
      countDownTime: 6, // 1 segundo extra, porqué es el segundo que tarda en salir la animación del slider.
      countDownTimeProgress: 1,
      unlockedCardData: this.unlockedCard,
      periodMs: 50,
      funcs: global.methods,
    };
  },
  mounted() {
    this.funcs.preloadAudio("glock", "glock.mp3", false);
  },
  watch: {
    unlockedCard: function (value) {
      this.unlockedCardData = value;
      if (value === true) {
        this.startCounter();
      }
    },
  },

  methods: {
    startCounter() {
      this.funcs.reproduceAudio("glock", 0.6);
      const interval = setInterval(() => {
        this.updateProgressTimer();
        if (!this.unlockedCard) {
          clearInterval(interval);
        }
        if (this.countDownTime <= 0) {
          this.stopCounter(interval);
        }
      }, this.periodMs);
    },

    updateProgressTimer() {
      this.countDownTime -= this.periodMs / 1000;
      this.countDownTimeProgress =
        this.countDownTime / this.countDownTimeDefault;
    },

    stopCounter(interval: any) {
      this.funcs.stopAudio("glock");
      clearInterval(interval);
      this.addBounceOutClassToTimer();
      setTimeout(() => {
        this.lockCard();
        this.resetTimes();
      }, 350);
      return;
    },

    resetTimes() {
      this.countDownTimeProgress = 1;
      // 1 segundo extra, porqué es el segundo que tarda en salir la animación del slider.
      this.countDownTime = this.countDownTimeDefault + 1;
    },

    addBounceOutClassToTimer() {
      const timer = document.querySelector(".timer");
      timer?.classList.add("bounceOutLeft");
    },

    lockCard() {
      this.unlockedCardData = false;
      this.$emit("locked-card", this.unlockedCardData);
    },
  },

  setup() {
    return {
      playCircleSharp,
    };
  },
});
</script>

<style scoped>
.timer-full {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 15rem;
  text-align: center;
}
.timer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0rem 2rem;
  width: 100%;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  height: 3rem;
  background: rgba(255, 244, 0, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
.timer h3 {
  font-size: 2rem;
}
.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes bounceInRight {
  0%,
  60%,
  75%,
  90%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes bounceInRight {
  0%,
  60%,
  75%,
  90%,
  100% {
    -webkit-transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }
  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }
  100% {
    -webkit-transform: none;
    transform: none;
  }
}
.bounceOutLeft {
  -webkit-animation-name: bounceOutLeft;
  animation-name: bounceOutLeft;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
@-webkit-keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
@keyframes bounceOutLeft {
  20% {
    opacity: 1;
    -webkit-transform: translate3d(20px, 0, 0);
    transform: translate3d(20px, 0, 0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(-2000px, 0, 0);
    transform: translate3d(-2000px, 0, 0);
  }
}
</style>
