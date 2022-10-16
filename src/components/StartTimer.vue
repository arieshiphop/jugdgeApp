<template>
  <article class="timer bounceInRight" v-if="unlockedCardData">
    <h3>{{ countDownTime }}</h3>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { playCircleSharp } from "ionicons/icons";

export default defineComponent({
  name: "StartTimer",
  emits: ["locked-card"],
  props: {
    unlockedCard: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      countDownTime: 5,
      unlockedCardData: this.unlockedCard,
    };
  },
  watch: {
    unlockedCard: function (value) {
      this.unlockedCardData = value;
      this.startCounter();
    },
  },
  methods: {
    startCounter() {
      const interval = setInterval(() => {
        if (!this.unlockedCard) {
          clearInterval(interval);
        }
        if (this.countDownTime <= 0) {
          this.stopCounter(interval);
        }
        this.countDownTime--;
      }, 1000);
    },
    stopCounter(interval: any) {
      clearInterval(interval);
      const timer = document.querySelector(".timer");
      timer?.classList.add("bounceOutLeft");
      this.countDownTime = 20;
      setTimeout(() => {
        this.unlockedCardData = false;
        this.$emit("locked-card", this.unlockedCardData);
      }, 350);
      return;
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
.timer {
  margin: 0px auto;
  width: 80%;
  border-radius: 0.4rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
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
