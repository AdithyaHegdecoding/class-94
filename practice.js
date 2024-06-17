var firebaseConfig = {
    apiKey: "AIzaSyD3xM8_HMucbyv6kwsNDfn4_QYS9Ri85og",
    authDomain: "kwitter-data-dca3c.firebaseapp.com",
    databaseURL: "https://kwitter-data-dca3c-default-rtdb.firebaseio.com",
    projectId: "kwitter-data-dca3c",
    storageBucket: "kwitter-data-dca3c.appspot.com",
    messagingSenderId: "393357308113",
    appId: "1:393357308113:web:001c40adb8c9466000d5f0"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function add(){
    Name = document.getElementById("name").value
    firebase.database().ref("/").child(Name).update({
        Purpose:"adding user"
    })
}