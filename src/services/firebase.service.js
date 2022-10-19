import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB5SZkVZNgtgm4v9wYJbiHm9dkAVP9mhj8",
  authDomain: "judgeapp-e98d1.firebaseapp.com",
  projectId: "judgeapp-e98d1",
  storageBucket: "judgeapp-e98d1.appspot.com",
  messagingSenderId: "986439521798",
  appId: "1:986439521798:web:5522ad94323f2e4bd91587",
  measurementId: "G-4FZFHVHH7T",
};

export function initializeFirebase() {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}
