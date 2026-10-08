import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase, ref, push, set, get } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDzhwAn7RPESEDVlpiVrFo8j01SsIveZ6Q",
  authDomain: "mobile-prg.firebaseapp.com",
  projectId: "mobile-prg",
  storageBucket: "mobile-prg.firebasestorage.app",
  messagingSenderId: "387273019977",
  appId: "1:387273019977:web:7b0a23a528ba3a9dca598",
  measurementId: "G-G14DCF67ZE",
  databaseURL: "https://mobile-prg-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function sendMessage(name, email, message) {

    const FormRef = ref(db, "contacts");
    const newFormRef = push(FormRef);

    set(newFormRef, {
        name: name,
        email: email,
        message: message
    })
    .then(() => {
        console.log("Message sent successfully");
    })
    .catch((error) => {
        console.error("Error sending message:", error);
    });
}

window.sendMessage = sendMessage;