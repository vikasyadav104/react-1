import New from "./new";

function App() {
  
  
    //<> </> this is called fragment and it is used to avoid unnecessary divs so we can use fragment instead of div if we don't want to add extra div in our html structure

    //one important thing is function name should start with capital letter otherwise it will be treated as html element and it will not work as a component so we should always start our component name with capital letter
  
  return (
    <div>
      <New /><nav></nav>
    </div>

  )
}

export default App
