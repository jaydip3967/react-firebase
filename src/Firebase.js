import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyD_8y926AKI6fTFWxTN_aG9pU6xbrDTO0c",
    authDomain: "app-3701e.firebaseapp.com",
    projectId: "app-3701e",
    storageBucket: "app-3701e.appspot.com",
    messagingSenderId: "632791879077",
    appId: "1:632791879077:web:b9015ccdaac6cf1d22ac4c",
    databaseURL:'https://app-3701e-default-rtdb.firebaseio.com/'
  };


  export const app = initializeApp(firebaseConfig);