import { useState } from "react"


function App() {
  const [color, setColor] = useState('white')
  return (
    <div className="w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="rounded fixed flex flex-warp justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={()=> setColor("red")}
          >Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={()=> setColor("green")}
          >Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
            onClick={()=> setColor("olive")}
          >Olive</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={()=> setColor("blue")}
          >Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "gray" }}
            onClick={()=> setColor("gray")}
          >Gray</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={()=> setColor("yellow")}
          >Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "pink" }}
            onClick={()=> setColor("pink")}
          >Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "purple" }}
            onClick={()=> setColor("purple")}
          >Purple</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={()=> setColor("lavender")}
          >Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
            onClick={()=> setColor("white")}
          >White</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={()=> setColor("black")}
          >Black</button>
          
        </div>
      </div>
    </div>
  )
}

export default App

{/* <button className="w-15 ml-3 rounded-2xl bg-red-600">Red</button>
<button className="w-15 ml-3 rounded-2xl bg-green-600">Green</button>
<button className="w-15 ml-3 rounded-2xl bg-blue-600">Blue</button>
<button className="w-15 ml-3 rounded-2xl bg-lime-800">Olive</button>
<button className="w-15 ml-3 rounded-2xl bg-gray-600">Gray</button>
<button className="w-15 ml-3 rounded-2xl bg-yellow-600">Yellow</button>
<button className="w-15 ml-3 rounded-2xl bg-pink-600">Pink</button>
<button className="w-15 ml-3 rounded-2xl bg-purple-600">Purple</button>
<button className="w-18 ml-3 rounded-2xl bg-purple-400">Lavender</button>
<button className="w-15 ml-3 rounded-2xl bg-white shadow-2xl">White</button>
<button className="w-15 ml-3 mr-1 text-white rounded-2xl bg-black">Black</button> */}
