import ThreeScene from "./assets/ThreeScene"

const App = () => {
  return (
    <div className='text-4xl bg-black flex flex-col items-center'>
      <h2 className="text-white">vite.js + tailwindCSS + Three.js</h2>
      <ThreeScene/>
    </div>
  )
}

export default App