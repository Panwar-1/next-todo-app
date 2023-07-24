import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import TodoCard from './TodoCard';
import {doc, setDoc, deleteField} from 'firebase/firestore';
import {db} from '../firebase';
import fetchTodo from '../hook/fetchTodo';

const UserDashBoard = () => {
    const {userInfo, currentUser} = useAuth();
    const [addTodo, setAddTodo] = useState(false);
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState({});

    const {todos, loading, error} = fetchTodo();

 
    useEffect(()=>{
        if(!userInfo || Object.keys(userInfo).length === 0){
            setAddTodo(true);
        }
    }, [userInfo])


    const addTodoHandler = async()=>{
       if(!todo)return;
       const newKey = Object.keys(todoList).length !== 0 ? Math.max(...Object.keys(todoList)) + 1 : 1;
       setTodoList({...todoList, [newKey] : todo});
       setTodo('');
        
       const userRef = doc(db, 'users', currentUser.uid);
        await setDoc(userRef, {
          'todos': {
            [newKey]: todo
          }
        }, {merge: true});
    }


    useEffect(()=>{
       if(todos){
        setTodoList(todos);
       }
    }, [todos])

     const handleDeleteTodo = async(todoKey)=>{
      return async()=> {
          const tempObj = {...todoList};
          delete tempObj[todoKey];
          setTodoList(tempObj);
          
          const userRef = doc(db, 'users', currentUser.uid);
          await setDoc(userRef, {
            'todos': {
              [todoKey]: deleteField()
            }
          }, {merge: true});
      }
     }



  return (
    <div className='w-full max-w-[65ch] mx-auto flex flex-col items-center justify-center  gap-3 sm:gap-5 text-xs sm:text-sm'>
      {
      !addTodo && <div className='w-full flex item-stretch'>
     <input type="text" placeholder='Enter Todo' value={todo} onChange={(e)=> setTodo(e.target.value)} 
     className='outline-none p-2 text-base sm:text-lg text-slate-900 flex-1'/>
     <button onClick={addTodoHandler} className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-30'>ADD</button>
     </div>
     }

     {(userInfo && !loading) && <>
       {
         Object.values(todoList).map((todo, index)=>{
            return <TodoCard todo={todo} index={index} handleDeleteTodo={handleDeleteTodo}/>
        })
       }
     </>}

         {/* {!addTodo && <button onClick={()=> setAddTodo(true)} className='w-full text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase font-medium duration-300 hover:opacity-30'>Add Todo</button>} */}
   
    </div>
  )
}

export default UserDashBoard;