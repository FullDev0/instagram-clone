import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import {getStorage} from 'firebase/storage'


const firebaseConfig = {
     apiKey: "AIzaSyA7b-Zgx5mh1oIXzj76n-_8CfOkpThzKTQ",
     authDomain: "dosjan-688e8.firebaseapp.com",
     projectId: "dosjan-688e8",
     storageBucket: "dosjan-688e8.appspot.com",
     messagingSenderId: "65099987776",
     appId: "1:65099987776:web:3d49f53d0c0541269a98a5"
};
 const firebaseApp=initializeApp(firebaseConfig)
 const db=getFirestore(firebaseApp)
 const auth=getAuth(firebaseApp)
 const storage=getStorage(firebaseApp)

export {db,auth,storage}
