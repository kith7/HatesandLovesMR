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
  updateDoc,
  serverTimestamp,
  deleteDoc,
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

const getDocumentId = async (filmId, userId) => {
  if (!userId) return;
  const collectionRef = collection(db, "reviews");
  const q = query(
    collectionRef,
    where("uid", "==", userId),
    where("id", "==", filmId)
  );
  const qsnapShot = await getDocs(q);
  let documentId;
  qsnapShot.forEach((snap) => (documentId = snap.id));
  return documentId;
};

export const removeReviewFromFirestore = async (filmId, userId) => {
  const docId = await getDocumentId(filmId, userId);
  if (!docId) return;

  try {
    await deleteDoc(doc(db, "reviews", docId));
    console.log("item removed from firebase");
  } catch (err) {
    console.log(err);
  }
};

export const updateReviewsToFireStore = async (
  filmId,
  userId,
  likes,
  hates
) => {
  const docId = await getDocumentId(filmId, userId);
  if (!docId) return;

  const docRef = doc(db, "reviews", docId);
  const itemData = {
    likes: likes,
    hates: hates,
  };
  updateDoc(docRef, itemData)
    .then((docRef) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserReviesFromFireStore = async (userid) => {
  if (!userid) return;
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef, where("uid", "==", userid));
  const qsnapShot = await getDocs(q);
  const usersReviews = [];
  qsnapShot.forEach((snap) => usersReviews.push(snap.data()));
  console.log(usersReviews);
  return usersReviews;
};

export const getAllReviewsFromFirestore = async (userid) => {
  if (!userid) return;
  const collectionRef = collection(db, "reviews");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
  });
  console.log(querySnapshot);
};
