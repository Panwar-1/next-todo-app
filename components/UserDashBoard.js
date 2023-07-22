import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

const UserDashBoard = () => {
    const {userInfo} = useAuth();
    const [addTodo, setAddTodo] = useState(false);
    const [todo, setTodo] = useState('');
    const [todoList, setTodoList] = useState({});


    useEffect(()=>{
        console.log('userInfo', userInfo);
        if(!userInfo || Object.keys(userInfo).length === 0){
            setAddTodo(true);
        }
    }, [userInfo])


    const addTodoHandler = async()=>{

    }



  return (
    <div className='w-full max-w-[65ch] mx-auto flex flex-col items-center justify-center  gap-3 sm:gap-5 text-xs sm:text-sm'>
      {
      addTodo && <div className='flex  item-stretch'>
     <input type="text" placeholder='Enter Todo' value={todo} onChange={(e)=> setTodo(e.target.value)} 
     className='outline-none p-2 text-base sm:text-lg text-slate-900 flex-1'/>
     <button className='w-fit px-4 sm:px-6 py-2 sm:py-3 bg-amber-400 text-white font-medium text-base duration-300 hover:opacity-30'>ADD</button>
     </div>
     }

     {userInfo && <>
     
     </>}


         {!addTodo && <button onClick={()=> setAddTodo(true)} className='w-full text-cyan-300 border border-solid border-cyan-300 py-2 text-center uppercase font-medium duration-300 hover:opacity-30'>Add Todo</button>}
   
    </div>
  )
}

export default UserDashBoard;