import work1 from '../assets/Images/work1.png'
import work2 from '../assets/Images/work2.png'
import work3 from '../assets/Images/work3.png'
import work4 from '../assets/Images/work4.png'
import work5 from '../assets/Images/work5.png'

const Works = () => {
    return (
      <div className="py-4">
        <div className="bg-yellow-200 h-screen w-full py-10 z-20">
          <center className="">
            <p className="text-6xl text-black">Our Works</p>
          </center>
          <div className="flex flex-wrap items-center mt-10 justify-center px-[200px]">
            
            <div className="h-[280px] w-[320px] bg-white rounded-3xl border-[3px] border-black p-2 hover:bg-sky-500 transition-all duration-300">
                <div className="h-[170px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work1} alt="" className='w-full h-full' />
                </div>
                <div className='flex flex-row items-center justify-between px-2 pr-4'>
                    <div className='mt-3 flex flex-col items-start px-2'>
                        <p className='text-sm opacity-70'>Web Development</p>
                        <p className='mt-7 text-lg'>SP-MEDIPORT</p>
                    </div>
                    <button className='bg-slate-200 hover:bg-black border-2 border-black rounded-2xl h-[50px] w-[60px]'>👀</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Works;