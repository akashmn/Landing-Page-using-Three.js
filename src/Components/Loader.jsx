import '../Styles/Loader.css'
import Typewriter from 'typewriter-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQ } from '@fortawesome/free-solid-svg-icons';

const Loader = () => {
  return (
    <div className="fixed h-screen w-full flex flex-col items-center justify-center gap-3 animate-pulse mt-16">
        <p className="h-[100px] w-[80px] text-8xl font-extrabold z-0 animate-reveal"><FontAwesomeIcon className='bg-none text-white stroke-black stroke-[10px]' size='1x' icon={faQ} /></p>
        <div className='h-[120px] w-[170px] bg-white text-black text-xsl font-light z-20 flex flex-row justify-center'>
          <Typewriter
            onInit={(typewriter) => {
            typewriter.typeString('Qmark Technolabs!')
            .pauseFor(1500)
            .deleteAll()
            .start();
            }}
            options={{
              delay: 100, // Typing speed in milliseconds
              deleteSpeed: 100, // Deleting speed in milliseconds
            }}
          />
        </div>
    </div>
  )
}

export default Loader