import styles from './nav.module.css';

export default function Navbar(){
    return(
        <>
            <div className="wrapper">
                <div className="container mx-auto">
                    <nav className='flex pt-10 px-12'>
                        <div className="flex w-full justify-center md:w-1/4 md:justify-start">
                            <img src="/logo.svg" alt="comp" className='w-32 md:w-32' />
                        </div>
                        <div className="hidden md:flex relative w-3/4 justify-end space-x-7 py-3 px-12 ">
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Digital Agency</a></h5>
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Service</a></h5>
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Portofolio</a></h5>
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Pages</a></h5>
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Blog</a></h5>
                            <h5 className='text-md hover:-translate-y-1 hover:scale-110 hover:underline underline-offset-8 duration-150'><a>Contact</a></h5>
                        </div>
                    </nav>
                    <div id="bottom">
                        <div className="md:hidden block fixed bg-white shadow-inner inset-x-0 bottom-0 z-10 py-3">
                            <div className="flex justify-center space-x-10 mx-8">
                                <p className='px-3'><img src="/home.svg" alt="home" /></p>
                                <p className='px-3'><img src="/phone.svg" alt="contact" /></p>
                                <p className='px-3'><img src="/info.svg" alt="about" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}