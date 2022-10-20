import { NativeAudio } from "@capacitor-community/native-audio";

export default {
  methods: {
    reproduceAudio(id, volume, loop) {
      if (volume) {
        NativeAudio.setVolume({
          assetId: id,
          volume: volume,
        });
      }
      if (loop) {
        NativeAudio.loop({
          assetId: id,
        });
      }
      NativeAudio.play({
        assetId: id,
      });
    },
    preloadAudio(id, audio, isUrl) {
      NativeAudio.preload({
        assetId: id,
        assetPath: audio,
        audioChannelNum: 1,
        isUrl: isUrl,
      });
    },
    unloadAudio(id) {
      NativeAudio.unload({
        assetId: id,
      });
    },
    stopAudio(id) {
      NativeAudio.stop({
        assetId: id,
      });
    },
  },
};
