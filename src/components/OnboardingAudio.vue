<template>
  <div>
    <h2>{{ recordingSecondsTime }}</h2>
    <ion-icon :icon="micCircleSharp" @click="recordAudio"></ion-icon>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonIcon } from "@ionic/vue";
import { micCircleSharp } from "ionicons/icons";
import {
  VoiceRecorder,
  VoiceRecorderPlugin,
  RecordingData,
  GenericResponse,
  CurrentRecordingStatus,
} from "capacitor-voice-recorder";
import { uploadAudioFile } from "@/services/supabase.service";
export default defineComponent({
  name: "OnboardingAudio",
  components: {
    IonIcon,
  },
  data() {
    return {
      recording: false,
      userData: JSON.parse(sessionStorage.getItem("user-data")),
      //le añadimos un segundo a la duración del audio para que no se corte
      recordingSecondsTime: 11,
      recordingTimer: 11,
    };
  },
  mounted() {
    VoiceRecorder.requestAudioRecordingPermission();
  },
  methods: {
    recordAudio() {
      if (this.recording) {
        return;
      }
      console.log("Recording...");
      this.recording = true;
      VoiceRecorder.startRecording();
      setTimeout(() => {
        this.recordingSecondsTime -= 1;
      }, 1000);
      if (this.recordingSecondsTime === 0) {
        this.stopRecording();
      }
    },
    async stopRecording() {
      if (!this.recording) {
        return;
      }
      VoiceRecorder.stopRecording().then(async (result: RecordingData) => {
        if (result.value && result.value.recordDataBase64) {
          const recordData = result.value.recordDataBase64;
          const fileName = `audio-${this.userData.id}`;
          this.recoding = false;
          console.log("Recording stopped");
          await uploadAudioFile(
            recordData,
            "audios",
            fileName,
            this.userData.id
          );
          console.log("Audio uploaded");
        }
      });
    },
  },
  setup() {
    return {
      micCircleSharp,
    };
  },
});
</script>

<style scoped>
ion-icon {
  font-size: 10rem;
}
</style>
