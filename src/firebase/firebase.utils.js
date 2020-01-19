import firebase from 'firebase/app';    
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyADH6bVYEOwd3X5LkNd9_KkH8CGO-fpBC0",
    authDomain: "todolst-db.firebaseapp.com",
    databaseURL: "https://todolst-db.firebaseio.com",
    projectId: "todolst-db",
    storageBucket: "todolst-db.appspot.com",
    messagingSenderId: "740799789249",
    appId: "1:740799789249:web:7989adeafaddea9871bc40"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const {todos} = []
        const createdAt = new Date();
    

    try {
        await userRef.set({
            displayName, 
            email,
            todos,
            createdAt,
            ...additionalData
        })

    } catch (error) {
        console.log('error creating user', error.message);
    }
}

return userRef;
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;


