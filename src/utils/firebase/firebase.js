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
  Timestamp,
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
import { async } from "q";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
//create email and password auth

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdDate = serverTimestamp();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdDate,
        ...additionalInfo,
      });
    } catch (err) {
      console.log("error while creating the user", err.message);
    }
  }
  return userDocRef;
};

export const getUserProfileData = async (uid) => {
  if (!uid) return;
  const docRef = doc(db, "users", uid);
  try {
    const docSnap = await getDoc(docRef);
    const loggedUser = docSnap.data();
    console.log(loggedUser);
    return loggedUser;
  } catch (err) {
    console.log(err);
  }
};

export const addReviewsToFirestore = async (movieItem, uid) => {
  if (!uid) return;
  const newReviewRef = doc(collection(db, "reviews"));
  try {
    await setDoc(newReviewRef, {
      ...movieItem,
      uid,
      date: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateReviesFromFireStore = async (filmId, userid) => {
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef, where("id", "==", filmId));
  const qsnapShot = await getDocs(q);
  qsnapShot.forEach((snap) => console.log(snap.data()));
};

export const getUsersReviesFromFireStore = async (userid) => {
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef, where("uid", "==", userid));
  const qsnapShot = await getDocs(q);
  const usersReviews = [];
  qsnapShot.forEach((snap) => usersReviews.push(snap.data()));
  console.log(usersReviews);
  return usersReviews;
};

export const getReviewsFromFirestore = async (uid) => {
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.data());
  });
  console.log(querySnapshot);
};
