// import { useState } from "react" 

// function App() {
//   const [color, setColor] = useState("olive")

//   return (
//     // <></> -> These are Called Fragments !

//     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
//       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
//       <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "red",}} onClick={() => setColor("red")}
//         >Red</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "green",}} onClick={() => setColor("green")}
//         >green</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "Blue",}} onClick={() => setColor("Blue")}
//         >Blue</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "#967BB6",}} onClick={() => setColor("#967BB6")}
//         >Lavender</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "black",}} onClick={() => setColor("black")}
//         >black</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "Grey",}} onClick={() => setColor("Grey")}
//         >Grey</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "orange",}} onClick={() => setColor("orange")}
//         >Orange</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "coral",}} onClick={() => setColor("coral")}
//         >Coral</button>
//         <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
//         style={{backgroundColor: "aqua",}} onClick={() => setColor("aqua")}
//         >Aqua</button>
//       </div>
//       </div>
      
//     </div>
//   )
// }

// export default App

import { useState } from "react"

function App(){
  const [color, setColor] = useState("olive")

  return(
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center shadow-lg bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center shadow-lg bottom gap-3 bg-white rounded-2xl px-3 py-2">
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}} onClick={() => setColor("red")}>
            Red
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "Green"}} onClick={() => setColor("green")}>
            Green
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "Purple"}} onClick={() => setColor("Purple")}>
            Purple
            </button>
          <button className="outline-none px-4 py-1 rounded-full text-white" style={{backgroundColor: "Blue"}} onClick={() => setColor("Blue")}>
          Blue
            </button>
            </div>
      </div>
    </div>
    </>
  )
}

export default App