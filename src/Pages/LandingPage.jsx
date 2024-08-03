import About from "../Components/About"
import Footer from "../Components/Footer"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import Works from "../Components/Works"


const LandingPage = () => {
  return (
    <div className="flex flex-col">  
        <Navbar />
        <HeroSection/>
        <About/>
        <Works/>
        <Footer/>
    </div>
  )
}

export default LandingPage