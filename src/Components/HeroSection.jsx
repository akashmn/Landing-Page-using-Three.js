import googleBadge from '../assets/Images/google_badge.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const HeroSection = () => {

  AOS.init();

  return (
    <div className="z-0 px-6 py-4">
        <div className="h-[620px] w-full rounded-3xl border-black border-2 flex flex-col justify-center items-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <p className="text-7xl" 
                data-aos="fade-up"
                data-aos-duration="1200">
                  The Loud Soluion For</p>
            <p className="text-8xl" 
                data-aos="fade-up"
                data-aos-duration="1600">Unheard Problems.</p>
          </div>

          <div className='flex flex-row gap-5'>
            <div className='h-[115px] w-[300px] flex flex-col items-center justify-end gap-4'>
              <p className='text-base'>A Tech-Thinking Company <br /><center>That Drives <b>50+</b> Brands</center></p>
              <button className='transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black'>
                Join us
              </button>
            </div>
            <div className="h-[115px] w-[300px] border-2 border-black rounded-3xl overflow-hidden">
              <img src={googleBadge} alt="" className="h-full w-full object-fill"/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default HeroSection