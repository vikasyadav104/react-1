import { useState, useCallback,useEffect,useRef } from 'react'   

//here we use four thing useState for state management like for counter 
// we use callback for memorizing the function and avoid unnecessary re-rendering of the function
//useeffect is used for updating the password whenever the length or number allowed or character allowed is changed it always run after the render
//use ref is used for accessing the dom element in react and it is used for copying the password to clipboard

import './App.css'

function App() {
  const [length, setLength] = useState(8); //it set the length by default 8 and it is the state variable for length of password
  const [numberAllowed, setNumberAllowed] = useState(false); //number allowed or not
  const[characterAllowed, setCharacterAllowed] = useState(false); // character allowed or not
  const[password, setPassword] = useState(""); //it is the state variable for paassword



  //password generator function
  //NOW USECALLBACK COME INTO THE PICTURE  CALLBACK FUNTION IS A TYPE OF HOOK
  //format of call back is

  // we can also write teh password generator function without use callback but it will make performance issues beacause everytime we change the length or number allowed or character allowed it will re-render the function and it will cause performance issues but with use callback it will only re-render the function when the dependencies change and it will return the memorized function and it will not re-render the function if the dependencies do not change
  //but if use callback then callback help to memoize the function and not re-RENDER the function again and again
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed){ //for number allowed we add the number in the string
      str+="0123456789";
    }
    if(characterAllowed){ //for character allowed we add the special character in the string
      str+="!@#$%^&*()-+";
    }
    for(let i=0;i<length;i++){
      let char= Math.floor(Math.random() * str.length); //it will help to generate a random number
      pass+=str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed,setPassword]
)
const passwordRef=useRef(null); //use ref

///this below function is used for copying the password after clicking the copy button
const copyToClipboard=()=>{
  passwordRef.current.select();  //it show to user that the password is selected by highlighting the password
  passwordRef.current.setSelectionRange(0, 101); //for mobile device

  window.navigator.clipboard.writeText(password); //it will copy the password
}

// this use effect is used for updating the password whenever the length or number alloed or character allowed
useEffect(()=>{
  passwordGenerator();
}, [length, numberAllowed, characterAllowed, passwordGenerator]) //it show dependency on length, number allowed, character allowed and password generator function whenever any of these change it will update the password

  return (
    <>
<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-600 text-white">

  <h1 className="text-center text-2xl font-bold text-black-400 mb-4">
    Password
  </h1>

  <div className="flex shadow rounded-lg overflow-hidden bg-white">
    
    <input
      type="text"
      value={password} //it will show the password in the input field
      className="outline-none w-full py-1 px-3 text-black"
      placeholder="Your Password" //it will show the placeholder when there is no password
      readOnly //it will make the input field read only so that user cannot change the password
      ref={passwordRef} //it will help to take the reference of password input field for copying the password to clipboard
    />
    <button 
    onClick={copyToClipboard}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-3 border border-blue-700 shrink-0">
      copy
    </button>

  </div>

  <div className="flex text-sm gap-x-2">
    <div className="flex items-center gap-x-1">
      <input
      type="range"
      min={8}
      max={60}
      value={length}
      className="outline-none w-full py-1 px-3 text-black"
      onChange={(e) => setLength(e.target.value)}
      className="outline-none w-full py-1 px-3 text-black"
      />
      <label className="text-black">Length: {length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={numberAllowed}
      id="numberAllowed"
      onChange={(e) => setNumberAllowed(e.target.checked)}
      />
      <label htmlFor="numberAllowed" className="text-black">Numbers</label>

    </div>
    <div className="flex items-center gap-x-1">
      <input
      type="checkbox"
      defaultChecked={characterAllowed}
      id="characterAllowed"
      onChange={(e) => setCharacterAllowed(e.target.checked)}
      />
      <label htmlFor="characterAllowed" className="text-black">Characters</label>
    </div>
  </div>

</div>
    </>
  )
}

export default App