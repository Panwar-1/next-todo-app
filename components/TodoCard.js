import React from 'react'

const TodoCard = ({todo, index, handleDeleteTodo}) => {


    const handleUpdateTodo = ()=>{

    }

  return (
    <div key={index} className='w-full p-2 sm:p-3 border border-solid border-white flex justify-between item-stretch'>
        <div className='flex-1'>
        {todo}
        </div>
        <div className='flex gap-2 sm:gap-3'>
        <img onClick={()=> handleDeleteTodo(index + 1)} src="/images/delete.svg" className='text-xl sm:text-3xl cursor-pointer duration-300 hover:opacity-40'/>
        <img onClick={handleUpdateTodo} src="/images/editTodo.svg" className='text-xl sm:text-3xl cursor-pointer duration-300 hover:opacity-40'/>

        </div>
    </div>
  )
}

export default TodoCard