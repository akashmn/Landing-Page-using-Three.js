import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="h-[500px] max-sm:h-screen w-full px-24 max-sm:px-3 pt-16 max-sm:pt-3 max-sm:pb-3">
      <div className="w-full bg-black rounded-3xl px-20 py-14 max-sm:px-10 max-sm:py-7 flex flex-row max-sm:flex-col gap-44 max-sm:gap-10">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="h-[80px] w-[250px] max-sm:h-[45px] max-sm:w-[150px] border-white border-2 bg-green-700 text-4xl max-sm:text-2xl text-white rounded-full px-8 py-5 max-sm:px-3 max-sm:py-1">Subscribe</p>
            <p className="h-[80px] w-[345px] max-sm:h-[45px] max-sm:w-[220px] border-white border-2 text-4xl max-sm:text-2xl text-white rounded-full px-9 py-5 max-sm:px-4 max-sm:py-1">to our updates</p>
          </div>
          <div className="mt-10 max-sm:mt-3">
            <input className="h-[65px] w-[380px] max-sm:h-[35px] max-sm:w-[255px] bg-black border-2 border-white rounded-2xl text-white max-sm:text-sm placeholder:text-white placeholder:opacity-60 pl-8 max-sm:pl-4" type="email" placeholder="Enter your email" name="" id="" />
            <button className="h-[59px] w-[90px] max-sm:h-[30px] max-sm:w-[45px] rounded-2xl -ml-[93px] max-sm:-ml-[48px] font-semibold hover:bg-black hover:text-white max-sm:text-sm hover:border-white hover:border-2 transition-all duration-300 bg-white">Send</button>
          </div>
        </div>
        <div className='flex flex-row max-sm:flex-col-reverse'>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col max-sm:flex-row gap-5 max-sm:gap-3 max-sm:-ml-2">
              <a href="" className="text-white max-sm:text-sm opacity-70 hover:opacity-100 transition-all duration-300">About</a>
              <a href="" className="text-white max-sm:text-sm opacity-70 hover:opacity-100 transition-all duration-300">Works</a>
              <a href="" className="text-white max-sm:text-sm opacity-70 hover:opacity-100 transition-all duration-300">Team</a>
              <a href="" className="text-white max-sm:text-sm opacity-70 hover:opacity-100 transition-all duration-300">Services</a>
              <a href="" className="text-white max-sm:text-sm opacity-70 hover:opacity-100 transition-all duration-300">More</a>
            </div>
            <div className="flex flex-row gap-5 max-sm:gap-3 max-sm:ml-10">
              <a href=""><FontAwesomeIcon icon={faFacebookF} className="h-4 w-4 max-sm:h-3 max-sm:w-3 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faXTwitter} className="h-4 w-4 max-sm:h-3 max-sm:w-3 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} className="h-4 w-4 max-sm:h-3 max-sm:w-3 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faGithub} className="h-4 w-4 max-sm:h-3 max-sm:w-3 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
            </div>
          </div>
          <div className='ml-28 mt-[170px]'>
            <p className="text-white opacity-50 mt-10">© 2024 Qmark Technolabs. <br />All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer