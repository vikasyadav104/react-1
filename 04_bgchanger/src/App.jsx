import { useState } from 'react'

function App() {

  const [color, setColor] = useState("olive")

  return (
    <>
      <div
        className="w-full h-screen duration-500"
        style={{ backgroundColor: color }}
      >

        <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 bg-white rounded-xl">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={()=> setColor("red")}>
              Red
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => setColor("blue")}>
              Blue
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg" onClick={() => setColor("green")}>
              Green
            </button>

            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg" onClick={() => setColor("orange")}>
             orange
            </button>

          </div>

        </div>

      </div>
    </>
  )
}

export default App