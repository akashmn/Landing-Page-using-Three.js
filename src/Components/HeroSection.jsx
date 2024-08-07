import { useEffect } from 'react';
import googleBadge from '../assets/Images/google_badge.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import Typewriter from 'typewriter-effect';
import ParticleRing from '../3D/ParticleRings/ParticleRing';

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-screen max-sm:h-[1000px] flex justify-center items-center">
      <div className="relative w-full h-[620px] max-sm:h-[800px] rounded-3xl border-black border-2 overflow-hidden select-none mx-5 -mt-20 max-sm:-mt-36">
        <div className='max-sm:hidden'>
          <ParticleRing className="absolute inset-0 max-sm:hidden" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center gap-8 px-6 py-4 max-sm:py-0 bg-white bg-opacity-0 h-full pointer-events-none">
          <div className="flex flex-col items-center justify-center mt-20">
            <p className="text-8xl max-sm:text-6xl pointer-events-auto"
                data-aos="fade-up"
                data-aos-duration="1200">
                  The Loud Solution For
            </p>
            <p className="text-8xl max-sm:text-6xl pointer-events-auto" 
                data-aos="fade-up"
                data-aos-duration="1600"
                data-aos-anchor-placement="bottom-bottom">
                  Unheard Problems.
            </p>
          </div>

          <div className="flex flex-row max-sm:flex-col gap-5">
            <div data-aos="zoom-in"
                 data-aos-duration="1200" 
                 className="h-[115px] w-[300px] flex flex-col items-center justify-end gap-4 pointer-events-auto">
              <p className="text-base">
                A Tech-Thinking Company 
                <br />
                <center>That Drives <b>50+</b> Brands</center>
              </p>
              <button className="transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black">
                Join us
              </button>
            </div>
            <div data-aos="zoom-in"
                 data-aos-duration="1200"
                 className="h-[115px] w-[300px] border-2 border-black rounded-3xl overflow-hidden pointer-events-auto">
              <img src={googleBadge} alt="Google Badge" className="h-full w-full object-fill"/>
            </div>
          </div>

          <a href="#" className="flex flex-row bg-white border-black border-2 p-2 rounded-xl items-center justify-center mt-10 max-sm:mt-0 max-sm:text-xs gap-3 pointer-events-auto">
            <p className="tracking-widest max-sm:tracking-wider opacity-70">
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
                  delay: 150,
                  loop: true,
                }}
              />
            </p>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="opacity-50" style={{color: "#000"}} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
