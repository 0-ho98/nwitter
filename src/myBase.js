import firebase from "firebase/app"
import "firebase/auth";
const firebaseConfig = {
  apiKey: process.env.React_APP_API_KEY,
  authDomain: process.env.React_APP_AUTH_DOMAIN,
  databaseURL:process.env.React_APP_DATABASE_URL,
  projectId: process.env.React_APP_PROJECT_ID,
  storageBucket: process.env.React_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_MESSAGIN_ID,
  appId: process.env.React_APP_APP_ID
};
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();