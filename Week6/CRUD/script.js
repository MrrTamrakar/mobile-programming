import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getDatabase, ref, set, get } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-database.js";

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

function writeUserData(userId, firstname, lastname, age, height, weight, gender, city, email, phone, occupation) {
  set(ref(db, "users/" + userId), {
    fname: firstname,
    lname: lastname,
    age: age,
    height: height,
    weight: weight,
    gender: gender,
    city: city,
    email: email,
    phone: phone,
    occupation: occupation
});
  console.log("User " + userId + " added");
}
window.writeUserData = writeUserData;

function readUser() {
let userId = document.getElementById("userId").value;
get(ref(db, "users/" + userId)).then((snapshot) => {
if (snapshot.exists()) {
console.log("User " + userId + ":", snapshot.val());
} else {
console.log("User not found");
}
});
}

window.readUser = readUser;