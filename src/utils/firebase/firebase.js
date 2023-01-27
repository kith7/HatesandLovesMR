// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
  getDoc,
  setDoc,
  doc,
  serverTimestamp,
} from "@firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "movieloveshates.firebaseapp.com",
  projectId: "movieloveshates",
  storageBucket: "movieloveshates.appspot.com",
  messagingSenderId: "429543853110",
  appId: "1:429543853110:web:97114847c7dbdba158dc97",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//google auth provider
export const user = auth.currentUser;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//create email and password auth

export const addNewUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
};

export const signInWithUserEmail = async (email, password) => {
  if (!email || !password) return;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      return;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signTheUserOut = async () => {
  await signOut(auth)
    .then(() => {
      console.log("signed out successfully");
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
};

export const onAuthStateChangedListener = () =>
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log(user);
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

export const createUserDocFromAuth = async (
  authUser,
  additionalDetails = {}
) => {
  if (!authUser) return;
  const userDocRef = doc(db, "users", authUser.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = authUser;
    const createdDate = serverTimestamp();
    try {
      await setDoc(authUser, {
        displayName,
        email,
        createdDate,
        ...additionalDetails,
      });
    } catch (e) {
      console.log(e.message);
    }
  }
  return userDocRef;
};
