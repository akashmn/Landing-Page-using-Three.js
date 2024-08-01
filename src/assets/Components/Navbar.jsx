import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);

  const togglePopup = () => {
    setPopUp(!popUp);
  };

  return (
    <div className="px-6 pt-4">
      <div className="h-[75px] w-full rounded-full border-2 border-black flex flex-row items-center justify-between px-16">
        <p>Qmark Technolabs</p>
        <div className="flex flex-row gap-10">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Team</a>
          <button onClick={togglePopup}>
            <FontAwesomeIcon
              icon={popUp ? faCaretUp : faCaretDown}
              size='xl'
              beatFade='xl'
              style={{ color: '#000000' }}
              className={`icon-transition ${popUp ? 'transform rotate-180' : ''}`}
            />
          </button>
        </div>
        <button className='transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Get in Touch
        </button>
      </div>
      {popUp && (
        <div className='ml-[750px] -mt-4 p-6 z-20 bg-black h-[200px] w-[250px] absolute rounded-xl transition duration-700 ease-in-out opacity-95 flex flex-col gap-2'>
          <a href="" className='text-white p-3 hover:underline'>Careers</a>
          <a href="" className='text-white p-3 hover:underline'>Explore</a>
          <a href="" className='text-white p-3 hover:underline'>More</a>
        </div>
      )}
    </div>
  );
};

export default Navbar;