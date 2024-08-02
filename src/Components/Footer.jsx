import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="h-[500px] w-full px-24 pt-16">
      <div className="h-[400px] w-full bg-black rounded-3xl px-20 py-14 flex flex-row gap-44">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <p className="h-[80px] w-[250px] border-white border-2 bg-green-700 text-4xl text-white rounded-full px-8 py-5">Subscribe</p>
            <p className="h-[80px] w-[345px] border-white border-2 text-4xl text-white rounded-full px-9 py-5">to our updates</p>
          </div>
          <div className="mt-10">
            <input className="h-[65px] w-[380px] bg-black border-2 border-white rounded-2xl text-white placeholder:text-white placeholder:opacity-60 pl-8" type="email" placeholder="Enter your email" name="" id="" />
            <button className="h-[59px] w-[90px] rounded-2xl -ml-[93px] font-semibold hover:bg-black hover:text-white hover:border-white hover:border-2 transition-all duration-300 bg-white">Send</button>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <a href="" className="text-white opacity-70 hover:opacity-100 transition-all duration-300">About</a>
              <a href="" className="text-white opacity-70 hover:opacity-100 transition-all duration-300">Works</a>
              <a href="" className="text-white opacity-70 hover:opacity-100 transition-all duration-300">Team</a>
              <a href="" className="text-white opacity-70 hover:opacity-100 transition-all duration-300">Services</a>
              <a href="" className="text-white opacity-70 hover:opacity-100 transition-all duration-300">More</a>
            </div>
            <div className="flex flex-row gap-5">
              <a href=""><FontAwesomeIcon icon={faFacebookF} className="h-4 w-4 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faXTwitter} className="h-4 w-4 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faInstagram} className="h-4 w-4 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
              <a href=""><FontAwesomeIcon icon={faGithub} className="h-4 w-4 text-opacity-50 border-opacity-50 border-2 border-white text-white p-2 rounded-full hover:text-black hover:bg-white transition-all duration-300"/></a>
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