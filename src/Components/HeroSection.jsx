import googleBadge from '../assets/Images/google_badge.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import ParticleRing from '../3D/ParticleRings/ParticleRing';


const HeroSection = () => {

  AOS.init();

  return (
    <div className="z-0 px-6 py-4">
        <div className="h-[620px] w-full rounded-3xl border-black border-2 flex flex-col justify-center items-center gap-8">
          <ParticleRing/>
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="text-8xl" 
                data-aos="fade-up"
                data-aos-duration="1200">
                  The Loud Soluion For</p>
            <p className="text-8xl" 
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-anchor-placement="bottom-bottom"
                  >Unheard Problems.</p>
          </div>

          <div className='flex flex-row gap-5'>
            <div data-aos="zoom-in"
                data-aos-duration="1200" 
                className='h-[115px] w-[300px] flex flex-col items-center justify-end gap-4'>
                  <p className='text-base'>A Tech-Thinking Company <br /><center>That Drives <b>50+</b> Brands</center></p>
              <button className='transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black'>
                Join us
              </button>
            </div>
            <div data-aos="zoom-in"
                 data-aos-duration="1200"
                 className="h-[115px] w-[300px] border-2 border-black rounded-3xl overflow-hidden">
                  <img src={googleBadge} alt="" className="h-full w-full object-fill"/>
            </div>
          </div>
          <a href='#' className='flex flex-row items-center justify-center mt-10 gap-3'>
            <p className='tracking-widest opacity-50'>
              <Typewriter
              onInit={(typewriter) => {
              typewriter.typeString('Come Explore with Us')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Discover New Horizons')
              .pauseFor(1000)
              .deleteAll()
              .typeString('Join Our Journey')
              .pauseFor(1000)
              .start();
              }}
              options={{
                delay: 150, // Typing speed in milliseconds
                loop: true,
              }}
            />
            </p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="opacity-50" style={{color: "#000"}} />
          </a>
        </div>
    </div>
  )
}

export default HeroSection