import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const config = {
  apiKey: "AIzaSyAwF14QFJdN9iufCvNyG_We3OQ0i5Xx8vc",
  authDomain: "crown-clothing-86bd9.firebaseapp.com",
  databaseURL: "https://crown-clothing-86bd9.firebaseio.com",
  projectId: "crown-clothing-86bd9",
  storageBucket: "crown-clothing-86bd9.appspot.com",
  messagingSenderId: "152138618694",
  appId: "1:152138618694:web:71ea8e1f86bb52d7857747",
};

firebase.initializeApp(config);
export const timestamp = firebase.firestore.FieldValue.serverTimestamp;



export const createUserProfileDocument = async (userAuth, additionalData) => {
  console.log(userAuth)
  if (!userAuth) return
  if (userAuth) {

    const userData = {
      email: userAuth.email,
      displayName: userAuth.displayName,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      ...additionalData
    }

    const snapshot = await firestore.collection('users').doc(userAuth.uid).get()

    if (!snapshot.exists) {
      try {
        await firestore.collection('users').doc(userAuth.uid).set({ ...userData })
      } catch (err) {
        console.log('error while updaing the firestore database in the users collection', err.message)
      }
    }
    return userData
  }
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()
}

export const addCollectionsSnapshotToMap = (collection) => {
  const transformedCollections = collection.docs.map(doc => {
    const { title, items } = doc.data()

    return {
      routename: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })
  // return transformedCollections

  return transformedCollections.reduce((acc, collection) => {
    acc[collection.title.toLowerCase()] = collection
    return acc
  }, {})
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}

export default firebase;
