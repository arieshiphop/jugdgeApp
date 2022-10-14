<template>
  <div
    class="user-card example"
    :style="{ backgroundImage: `url(${person.picture})` }"
  >
    <b>{{ person.name }}</b> {{ person.ubication }}
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
.example {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  --height: 420px;
  display: block;
  background-size: cover;
  background-position: center;
  width: 290px;
  height: var(--height);
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.36);
  margin: 0 auto;
  color: white;
  padding-top: calc(var(--height) - 40px);
  padding-left: 20px;
}
.example:hover {
  box-shadow: 2px 4px 12px rgba(0, 0, 0, 0.36);
}
.example b {
  margin-right: 4px;
  font-size: 1.15em;
}

.example::before {
  content: "";
  opacity: 0;
  position: absolute;
  top: 10%;
  transform: rotate(-18deg);
  font-size: 1.4em;
  font-weight: bold;
  border: 4px solid;
  padding: 0 6px;
  line-height: 40px;
  border-radius: 5px;
}

.card {
  width: 20rem;
  height: 30rem;
  overflow: hidden !important;
}
</style>
