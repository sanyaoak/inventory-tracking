import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQG2KHubeQi4OzvtlUy-6BX989ThPJq58",
  authDomain: "pantry-tracker-project-3b090.firebaseapp.com",
  projectId: "pantry-tracker-project-3b090",
  storageBucket: "pantry-tracker-project-3b090.appspot.com",
  messagingSenderId: "994766125104",
  appId: "1:994766125104:web:5755ac425377b57e3155f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };
