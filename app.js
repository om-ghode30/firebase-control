// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCuY3P3c-Rkk0Dy017wUzNbtaw8zg3JWnE",
  authDomain: "notpad-3d676.firebaseapp.com",
  projectId: "notpad-3d676",
  storageBucket: "notpad-3d676.firebasestorage.app",
  messagingSenderId: "66178659039",
  appId: "1:66178659039:web:35f23f05e092e5c0762f6a",
  measurementId: "G-5L5ZQKGK8M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Save Data
function saveData(){

    let key = document.getElementById("key").value;
    let value = document.getElementById("value").value;

    database.ref(key).set({
        value: value
    });

    alert("Data Saved");
}


// Read Data
function readData(){

    let key = document.getElementById("key").value;

    database.ref(key).once("value")
    .then((snapshot)=>{

        document.getElementById("output").innerHTML =
            JSON.stringify(snapshot.val(), null, 2);

    });

}