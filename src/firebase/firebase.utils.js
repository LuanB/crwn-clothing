import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCq-xjkrhPf-9arwIpCVmpRKH63tFcIIEM',
  authDomain: 'crwn-db-b38c7.firebaseapp.com',
  databaseURL: 'https://crwn-db-b38c7.firebaseio.com',
  projectId: 'crwn-db-b38c7',
  storageBucket: '',
  messagingSenderId: '686131241486',
  appId: '1:686131241486:web:14ed10ac2917be07'
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ promt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
