import React, { useEffect , useRef } from "react";
import { useCallback } from "react";
import { useState } from "react";

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumbersAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passWordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }

    setPassword(pass);
  }, [numberAllowed, charAllowed, length , setPassword]);


   

    const handleCopyInClipbord = useCallback(()=>{
      passWordRef.current?.select();
      window.navigator.clipboard.writeText(password)
    },[password])
  useEffect(() => {
    passwordGenerator()
  }, [numberAllowed, charAllowed, length, passwordGenerator]);
  return (
    <>
      <div className="mx-auto border-2 border-black shadow-sm rounded-md w-2/3 my-16 h-2/4 bg-slate-500 text-white">
        <h1 className="text-center text-2xl font-bold">Password Generator</h1>
        <div className="flex items-center justify-center">
          <input type="text" value={password} 
            className="text-orange-600"
            placeholder="password"
            ref={passWordRef}
            readOnly
           />
          <button 
          onClick={handleCopyInClipbord}
          >Copy</button>
        </div>
        <div className="flex items-center justify-center">
          <input 
          type="range"
           min={8} 
           max={20} 
           id="length" 
           onChange={(e)=>{setlength(e.target.value)}}
           />
           <label htmlFor="length">Length {length}</label>
          <input 
          type="checkbox" 
          defaultChecked={numberAllowed}
          id="number"
          onChange={() => {
            setNumbersAllowed((prev) => !prev);
        }}
          />
          <label htmlFor="number">Number</label>
          <input 
          type="checkbox" 
          defaultChecked={charAllowed}
          id="Char"
          onChange={() => {
            setCharAllowed((prev) => !prev);
        }}
          />
          <label htmlFor="Char">Char</label>
        </div>
      </div>
    </>
  );
}

export default App;
