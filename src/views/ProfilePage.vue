<template>
  <ion-page>
    <div class="layout-container">
      <div class="heading"></div>
      <section class="main-top">
        <img
          src="https://avatars0.githubusercontent.com/u/46731483?v=4"
          alt="profile_picture"
          class="avatar"
        />
        <div class="btn btn-settings">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
          <svg
            @click="logout"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path
              d="M12 1l9.5 5.5v11L12 23l-9.5-5.5v-11L12 1zm0 2.311L4.5 7.653v8.694l7.5 4.342 7.5-4.342V7.653L12 3.311zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
        </div>
      </section>
      <section class="main">
        <h1 class="main-title">Yunus Emre Dilber</h1>
        <h5 class="main-subtitle">Denizli, Turkey</h5>
        <div class="relations">
          <div class="relation mr-20">
            <p class="relation-num">59</p>
            <p class="relation-text">Judgeds</p>
          </div>
          <div class="relation">
            <p class="relation-num">321</p>
            <p class="relation-text">Judged you</p>
          </div>
        </div>
      </section>
    </div>
  </ion-page>
</template>

<script type="ts">
import { defineComponent } from 'vue';
import { IonPage } from '@ionic/vue';
import Auth from '@/services/auth.service';
export default defineComponent({
  name: 'ProfilePage',
  components: {
    IonPage,
  },
  data() {
    return {
      auth: new Auth(),
    };
  },
  methods: {
    async logout() {
      const response = await this.auth.logOut();
      this.$router.push("/register")
      location.reload();
      console.log(response);
    },
  },
});
</script>

<style scoped>
.layout-container {
  min-width: 300px;
  min-height: 300px;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  background-size: 100% 120px;
  border-radius: 25px;
}

.heading {
  height: 100px;
}

.main-top {
  position: relative;
  background-color: whitesmoke;
  height: 60px;
  border-radius: 20px 20px 0 0;
  box-shadow: -10px -10px 20px -10px rgba(0, 0, 0, 0.2);
}

.main {
  background-color: whitesmoke;
  min-height: 100px;
}

.main-bottom {
  box-shadow: 0px -4px 6px -4px rgba(0, 0, 0, 0.15);
  background-color: #f7f7f7;
  min-height: 100px;
  padding-top: 10px;
  border-radius: 0 0 25px 25px;
}

.card {
  display: inline-block;
  background-color: black;
  height: 200px;
  width: 140px;
  margin: 15px 0 15px 15px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px -7px rgba(0, 0, 0, 0.75);
}

.card:last-child {
  margin-right: 15px;
}

.main-bottom-contents {
  width: 300px;
  overflow-y: hidden;
  overflow-x: auto;
}

.inner {
  height: 100%;
  white-space: nowrap;
}

.main-title {
  text-align: center;
}

.main-subtitle {
  text-align: center;
  opacity: 0.5;
  transform: translateY(-10px);
}

.main-bottom-title {
  margin-left: 10px;
  font-size: 18px;
}

.main-bottom-head {
  display: flex;
  justify-content: space-between;
}

.main-bottom-action {
  margin-right: 10px;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.relations {
  display: flex;
  justify-content: center;
  align-items: center;
}

.relation {
  display: inline-flex;
  flex-direction: column;
  text-align: center;
}

.relation-text {
  font-size: 14px;
  transform: translateY(-10px);
  opacity: 0.7;
}

.relation-num {
  font-size: 18px;
  font-weight: bold;
  opacity: 0.7;
}

.mr-20 {
  margin-right: 20px;
}

.btn {
  width: 40px;
  height: 40px;
  background-color: whitesmoke;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: #444;
  box-shadow: -6px -6px 12px rgba(white, 0.5), 6px 6px 12px rgba(grey, 0.3);
}

.btn:active {
  box-shadow: inset -6px -6px 12px rgba(white, 1),
    inset 6px 6px 12px rgba(grey, 0.3);
}

.btn-back {
  margin: 15px 0 0 15px;
  fill: black;
  background-color: #fdfbfb;
  box-shadow: -6px -6px 12px rgba(#fbc8d4, 0.3), 6px 6px 12px rgba(grey, 0.3);
}

.btn-back:active {
  box-shadow: inset -6px -6px 12px rgba(#fbc8d4, 0.3),
    inset 6px 6px 12px rgba(grey, 0.3);
}

.avatar {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.5);
}

.btn-settings {
  margin: 10px 10px 0 0;
  position: absolute;
  top: 0;
  right: 0;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.main-bottom-contents::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE and Edge */
.main-bottom-contents {
  -ms-overflow-style: none;
}
</style>
