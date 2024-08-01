import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="px-6 pt-4">
      <div className="h-[75px] w-full rounded-full border-2 border-black flex flex-row items-center justify-between px-16">
        <p className=''>Qmark Technolabs</p>
        <div className="flex flex-row gap-10">
          <a href="">Home</a>
          <a href="">Projects</a>
          <a href="">Team</a>
          <button>
            <FontAwesomeIcon icon={faCaretDown} size='xl' beatFade='xl' style={{ color: '#000000' }} />
          </button>
        </div>
        <button className='transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black'>
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Navbar;