import React, {useState, useEffect, useRef} from 'react'
import {doc, getDoc} from 'firebase/firestore';
import { db } from '../firebase';
import { useAuth } from '../context/AuthContext';

const fetchTodo = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [todos, setTodos] = useState(null);
    const {currentUser} = useAuth();

    const fetchData = async()=>{
      try {
            const docRef = doc(db, 'users', currentUser.uid);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                setTodos(docSnap.data().todos);
             }

        } catch (error) {
            console.log('error', error);
            setError('Failed to load todos.');
        } finally{
            setLoading(false);
        }
    }


     useEffect(()=>{
        fetchData();
     }, []);

    return {loading, error, todos};
}

export default fetchTodo;