  
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
apiKey: "AIzaSyANTPxlMWDOGaKQK8AwzhDK07Fu_y1kXmE",
authDomain: "crwn-db-32f7b.firebaseapp.com",
databaseURL: "https://crwn-db-32f7b.firebaseio.com",
projectId: "crwn-db-32f7b",
storageBucket: "crwn-db-32f7b.appspot.com",
messagingSenderId: "1092096798637",
appId: "1:1092096798637:web:09b29bbce8aacf9689bb24",
measurementId: "G-L7JG77C7Q4"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;