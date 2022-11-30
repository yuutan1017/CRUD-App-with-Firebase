import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgtXtzkZirHQT1DCSjNfCuh_7m77J15-E',
  authDomain: 'react-with-firebase-43d88.firebaseapp.com',
  projectId: 'react-with-firebase-43d88',
  storageBucket: 'react-with-firebase-43d88.appspot.com',
  messagingSenderId: '954702676067',
  appId: '1:954702676067:web:daed1f4c88b69bb87e3856',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();

export default app;
