import googleBadge from '../assets/Images/google_badge.png'

const HeroSection = () => {
  return (
    <div className="z-0 px-6 py-4">
        <div className="h-[620px] w-full rounded-3xl border-black border-2 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl">The Loud Soluion For</p>
            <p className="text-8xl">Unheard Problems.</p>
          </div>

          <div>
            <div className="h-[115px] w-[300px] border-2 border-black rounded-3xl overflow-hidden">
              <img src={googleBadge} alt="" className="h-full w-full object-fill"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection