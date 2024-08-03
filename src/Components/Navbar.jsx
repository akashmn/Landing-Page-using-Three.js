import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [popUp, setPopUp] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  const togglePopup = () => {
    setPopUp(!popUp);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false); // Close the menu when a link is clicked
  };

  return (
    <div className="px-6 pt-4 relative">
      <div className="h-[75px] w-full rounded-full border-2 border-black flex flex-row items-center justify-between px-6 lg:px-16">
        <p>Qmark Technolabs</p>
        <div className="hidden lg:flex flex-row gap-10">
          <a
            href="#"
            className={`${activeLink === 'Home' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('Home')}
          >
            Home
          </a>
          <a
            href="#"
            className={`${activeLink === 'Works' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('Works')}
          >
            Works
          </a>
          <a
            href="#"
            className={`${activeLink === 'Team' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('Team')}
          >
            Team
          </a>
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
        <button className="hidden lg:block transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black">
          Get in Touch
        </button>
        <button className="lg:hidden" onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size='xl' />
        </button>
      </div>
      {popUp && (
        <div data-aos="zoom-in-down" className="ml-[750px] -mt-4 p-6 z-20 bg-black h-[200px] w-[250px] absolute rounded-xl transition duration-700 ease-in-out opacity-95 flex flex-col gap-2">
          <a
            href="#"
            className={`text-white p-3 hover:underline ${activeLink === 'Careers' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('Careers')}
          >
            Careers
          </a>
          <a
            href="#"
            className={`text-white p-3 hover:underline ${activeLink === 'Services' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('Services')}
          >
            Services
          </a>
          <a
            href="#"
            className={`text-white p-3 hover:underline ${activeLink === 'More' ? 'font-bold underline' : ''}`}
            onClick={() => handleLinkClick('More')}
          >
            More
          </a>
        </div>
      )}
      <div
        className={`mx-5 mt-8 lg:hidden absolute top-16 left-0 right-0 z-20 transition-all duration-500 ease-in-out overflow-hidden ${
          menuOpen ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-black border-2 rounded-3xl`}
      >
        {menuOpen && (
          <div className="flex flex-col gap-2 bg-black">
            <a
              href="#"
              className={`text-white p-3 border-b border-black ${activeLink === 'Home' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('Home')}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-white p-3 border-b border-black ${activeLink === 'Works' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('Works')}
            >
              Works
            </a>
            <a
              href="#"
              className={`text-white p-3 border-b border-black ${activeLink === 'Team' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('Team')}
            >
              Team
            </a>
            <a
              href="#"
              className={`text-white p-3 border-b border-black ${activeLink === 'Careers' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('Careers')}
            >
              Careers
            </a>
            <a
              href="#"
              className={`text-white p-3 border-b border-black ${activeLink === 'Services' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('Services')}
            >
              Services
            </a>
            <a
              href="#"
              className={`text-white p-3 ${activeLink === 'More' ? 'font-bold underline' : ''}`}
              onClick={() => handleLinkClick('More')}
            >
              More
            </a>
            <button className="max-sm:hidden transition-all duration-300 bg-black text-white h-[40px] w-[150px] px-4 mt-4 rounded-full hover:bg-white hover:text-black hover:border-2 hover:border-black">
              Get in Touch
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
