import React,{useContext, useState} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [userName , setUserName ] = useState('')
    const [password , setPassword ] = useState('')
    const {setUser} = useContext(UserContext);
    const handleAddData=(e)=>{
        e.preventDefault()
        setUser({userName, password})
    }
  return (
    <>
        <input value={userName} onChange={(e)=>setUserName(e.target.value)} style={{padding:5, margin:6}} type="text" placeholder='UserName'  />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} style={{padding:5,margin:6}} type="text" placeholder='Password'  />
        <button onClick={handleAddData}>Submit</button>
    </>
  );
}

export default Login