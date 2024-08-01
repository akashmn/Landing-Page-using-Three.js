import About from "../Components/About"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import Works from "../Components/Works"


const LandingPage = () => {
  return (
    <>  
        <Navbar />
        <HeroSection/>
        <About/>
        <Works/>
    </>
  )
}

export default LandingPage