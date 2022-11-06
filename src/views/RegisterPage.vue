<template>
  <ion-page>
    <div class="login-page">
      <button @click.prevent="register">
        <span class="shadow"></span>
        <span class="edge"></span>

        <span class="front text">
          <span>
            <img src="../../public/assets/icons/google-logo.svg" alt="" />
          </span>
          <p>Iniciar sesión</p>
        </span>
      </button>
    </div>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonPage } from "@ionic/vue";
import Auth from "@/services/auth.service";
export default defineComponent({
  name: "RegisterPage",
  components: {
    IonPage,
  },
  data() {
    return {
      password: "",
      email: "",
      auth: new Auth(),
    };
  },
  methods: {
    async register() {
      await this.auth.loginWithGoogle();
    },
  },
});
</script>

<style scoped>
button {
  position: relative;
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
  outline-offset: 4px;
  transition: filter 250ms;
  user-select: none;
  touch-action: manipulation;
}

.shadow {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: hsl(0deg 0% 0% / 0.25);
  will-change: transform;
  transform: translateY(2px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

.edge {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  background: linear-gradient(
    to left,
    rgb(255, 255, 255) 0%,
    rgb(215, 215, 215) 8%,
    rgb(111, 111, 111) 2%,
    rgb(204, 204, 204) 100%
  );
}

.front {
  display: flex;
  gap: 1rem;
  text-align: center;
  position: relative;
  padding: 12px 27px;
  border-radius: 12px;
  font-size: 1.1rem;
  color: rgb(19, 19, 19);
  background: rgb(212, 212, 212);
  will-change: transform;
  transform: translateY(-4px);
  transition: transform 600ms cubic-bezier(0.3, 0.7, 0.4, 1);
}

button:hover {
  filter: brightness(110%);
}

button:hover .front {
  transform: translateY(-6px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .front {
  transform: translateY(-2px);
  transition: transform 34ms;
}

button:hover .shadow {
  transform: translateY(4px);
  transition: transform 250ms cubic-bezier(0.3, 0.7, 0.4, 1.5);
}

button:active .shadow {
  transform: translateY(1px);
  transition: transform 34ms;
}

button:focus:not(:focus-visible) {
  outline: none;
}
.google {
  background-color: #dc4c39;
  color: #fff;
}
.login-page {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,
.form button:active,
.form button:focus {
  background: #43a047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4caf50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before,
.container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #ef3b3a;
}
body {
  background: #76b852; /* fallback for old browsers */
  background: rgb(141, 194, 111);
  background: linear-gradient(
    90deg,
    rgba(141, 194, 111, 1) 0%,
    rgba(118, 184, 82, 1) 50%
  );
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
