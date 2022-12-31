import { initializeApp } from "firebase/app";
// import firebase from 'firebase/compat/app'
import "firebase/storage";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0y2T1LJ_cusqIfrutRiTyg4pKCn7U--Q",
    authDomain: "tradefisher-29821.firebaseapp.com",
    databaseURL: "https://tradefisher-29821-default-rtdb.firebaseio.com",
    projectId: "tradefisher-29821",
    storageBucket: "tradefisher-29821.appspot.com",
    messagingSenderId: "625650129569",
    appId: "1:625650129569:web:622670e778c7e28bc4eee0",
    measurementId: "G-4YCDJ3XEDP"
};

const app=initializeApp(firebaseConfig)
const storage=getStorage(app)

export {storage}
