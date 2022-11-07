<template>
  <div class="step">
    <section class="image-section">
      <article class="cooking-image">
        <img
          class="cooking"
          src="@/../public/assets/icons/cooking.svg"
          alt=""
        />
      </article>
    </section>
    <section class="text">
      <article class="title">
        <h1>¡Bienvenido a judge app!</h1>
      </article>
      <article class="subtitle">
        <p>
          La aplicación que te ayudará a saber lo que la gente piensa de ti a
          simple vista.
        </p>
      </article>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "OnboardingIntro",
});
</script>

<style scoped>
.step {
  margin-bottom: 0.2rem;
}
section {
  padding: 1rem;
}
.text {
  color: white;
  text-align: center;
  text-shadow: 0 0.2rem 0.5rem black;
}
.image-section {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 200px;
}
img {
  max-height: 100%;
}
.cooking-image {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: #08f;
}
</style>
