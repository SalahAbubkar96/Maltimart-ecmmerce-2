import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAz_t0NM2Ypkw0xeEvhHvUiAaxtL0MHMOc",
  authDomain: "maltimart-95e37.firebaseapp.com",
  projectId: "maltimart-95e37",
  storageBucket: "maltimart-95e37.firebasestorage.app",
  messagingSenderId: "911998407210",
  appId: "1:911998407210:web:6fbc6cd3d5c375288a6953"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;