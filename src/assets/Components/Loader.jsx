import '../Styles/Loader.css'

const Loader = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center gap-3 animate-pulse">
        <p className="h-[100px] w-[80px] text-8xl font-extrabold text-orange-500 z-0 animate-reveal">Q</p>
        <p className="h-[100px] w-[150px] bg-white text-black text-xsl font-light z-20 mb-16">Qmark Technolabs</p>
    </div>
  )
}

export default Loader