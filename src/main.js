import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBoYEy9H06X97TPpCqYcp1Tw8JKGpaPuKk",
    authDomain: "vue-auth-72576.firebaseapp.com",
    projectId: "vue-auth-72576",
    storageBucket: "vue-auth-72576.appspot.com",
    messagingSenderId: "935012605940",
    appId: "1:935012605940:web:fc6ff9fdea36ce9cb6e3a1",
};

firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount("#app");
