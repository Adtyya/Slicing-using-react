import Navbar from "../components/navbar/nav";


const Home = ()=>{
  return(
    <>
      <div className='wrapper'>
        <div className="hidden md:flex justify-end">
          <div className="absolute">
            <img src="/bubble.svg" alt="a" width={390}/>
          </div>
        </div>
        <Navbar />
        <div className="container mx-auto">
          <div className="hero">
            <div className="flex">
              <div className="isHero flex justify-center pt-12 flex-col mx-5 w-full md:w-2/4 md:mx-12 md:pt-0">
                <div className="md:hidden">
                  <img src="/hero.svg" alt="hero" />
                </div>
                <div className="my-5">
                  <h3 className="text-2xl font-bold md:text-3xl">Think the design</h3>
                  <h3 className="text-2xl font-bold md:text-3xl">design the think</h3>
                </div>
                <p className="paraf">Create live segmentd and target the right people for message based
                on their behaviors.</p>
                <div className="my-8">
                  <div className="flex justify-center w-max">
                    <p className="buton px-12 py-2 rounded text-white shadow-lg shadow-indigo-500/50">View More</p>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex relative w-2/4 mx-10">
                <img src="/hero.svg" alt="a" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  
  )
}

export default Home;