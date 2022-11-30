import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, 'users');
    const unsub = onSnapshot(usersCollectionRef, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
    return unsub
  }, []);

  return (
    <>
      <h1>Vite + React + Firebase</h1>
      {users.map((user) => (
        <ul key={user.id}>
          <li>id: {user.id}</li>
          <li>name: {user.name}</li>
          <li>auth: {user.email}</li>
        </ul>
      ))}
    </>
  );
}

export default App;
