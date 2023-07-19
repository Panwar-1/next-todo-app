import {useState} from 'react'

const Login = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('');
   const [error, setError] = useState(null);
   const [isLoggingIn, setIsLoggingIn]= useState(true);

   const submitHandler = ()=>{
      if(!email || !password){
        setError('Please Enter email and password.');
        return;
      }
   }

  return (
    <div className='flex-1 text-xs sm:text-sm flex flex-col items-center justify-center gap-2 sm:gap-4'>
      <h1 className='font-semibold text-2xl sm:text-4xl select-none uppercase'> {isLoggingIn ? 'Login' : 'Register'}</h1>
        
        {error && <div className='w-full max-w-[40ch] text-rose-400 border border-solid border-rose-400 py-2 text-center'>{error}</div>}

      <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} className='outline-none text-slate-800 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Email Address'/>

      <input type="text" value={password} onChange={(e)=> setPassword(e.target.value)}  className='outline-none text-slate-800 p-2 w-full max-w-[40ch] duration-300 border-b-2 border-solid border-white focus:border-cyan-300' placeholder='Password'/>

       <button onClick={submitHandler} className='w-full max-w-[40ch] border border-white border-solid uppercase py-2 font-Poppins'>submit</button>

       <h2 onClick={()=> setIsLoggingIn(!isLoggingIn)} className='duration-300 hover:scale-110 cursor-pointer'>
        {!isLoggingIn ? 'Login' : 'Register'}
       </h2>

    </div>
  )
}

export default Login;