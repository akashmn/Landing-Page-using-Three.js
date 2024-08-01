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
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work1} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work2} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work3} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work4} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work5} alt="" className='w-full h-full' />
                </div>
            </div>
            <div className="h-[260px] w-[300px] bg-white rounded-3xl border-[3px] border-black p-3 hover:bg-sky-500">
                <div className="h-[150px] bg-white rounded-3xl border-black border-2 hover overflow-hidden">
                    <img src={work1} alt="" className='w-full h-full' />
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Works;