import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAYtspl3YGajk7mlKjmmaiPmA4zu7dwAUc",
    authDomain: "proyecto-telematica3-2c755.firebaseapp.com",
    projectId: "proyecto-telematica3-2c755",
    storageBucket: "proyecto-telematica3-2c755.appspot.com",
    messagingSenderId: "179316879561",
    appId: "1:179316879561:web:a36b3a44490edc65a85d18"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };