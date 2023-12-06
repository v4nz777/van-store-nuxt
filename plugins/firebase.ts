// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries




export default defineNuxtPlugin((nuxtApp):any => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyC8BLBLUucu8xnfMfUyshLMzmVgDwm325g",
        authDomain: "vanstore-c473f.firebaseapp.com",
        projectId: "vanstore-c473f",
        storageBucket: "vanstore-c473f.appspot.com",
        messagingSenderId: "405918553775",
        appId: "1:405918553775:web:835a484f0a3e12915e665a",
        measurementId: "G-JJE6L1GL6G"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
})
