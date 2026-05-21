import { useState } from 'react' //this line is amazing because it allows to change the value of counter in user interface but how lets see that in the code below
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  // let counter=15
// one important thing is react is react on changing the ui so when we change the value of counter it will not re-render the component because react does not know that we have changed the value of counter so we need to use state to re-render the component when we change the value of counter
  let [counter,vikas]=useState(15) // this is how we can use state in react and it will re-render the component when we change the value of counter and it will also update the value of counter in the user interface

  const addvalue=()=>{
    // console.log("add value",Math.random()); // it is just for check that our function is working or not
    console.log("add value",counter); // it is just for check that our function is working or not 
    counter=counter+1;
    vikas(counter); // this is how we can chnage the value of counter in user interface and it will re-render the component when we change the value of counter

  }
  const removevalue=()=>{
    counter=counter-1;
    if(counter<0){
      counter=0;
    }
    vikas(counter); // this is how we can chnage the value of counter in user interface and it will re-render the component when we change the value of counter
  }
  return(
        <>
        <h1> chai or code</h1>
        <h2> counter is {counter}</h2>

        <button
        onClick={addvalue}
        >add value{counter} </button>
        <button
         onClick={removevalue}>
         subtract value {counter} </button>
        
        
        </>
   
  )
}

export default App
