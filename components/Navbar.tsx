
export default function navbar() {
    return (
        <nav className="w-screen h-[10vh] fixed text-white bg-[rgba(0,0,0,0)] backdrop-blur-lg z-50">

            <div className="mx-30 h-full flex flex-row items-center justify-between border-b border-white/40">
                <div className="text-white/85 roboto tracking-wide text-[1.2rem] hover:cursor-pointer transform transition-transform duration-200 ease-out hover:scale-102">
                    YATHARTHA AARUSH 
                </div>
                <div className=" text-white/70 tracking-wide font-light">
                    <ul className="flex flex-row gap-11"> 
                        <li className="hover:cursor-pointer hover:text-white transform transition-transform duration-200 ease-out hover:scale-102 ">About</li>
                        <li className="hover:cursor-pointer hover:text-white transform transition-transform duration-200 ease-out hover:scale-102 ">Work</li>
                        <li className="hover:cursor-pointer hover:text-white transform transition-transform duration-200 ease-out hover:scale-102 ">Gallery</li>
                        <li className="hover:cursor-pointer hover:text-white transform transition-transform duration-200 ease-out hover:scale-102 ">Get in touch</li>
                    </ul>
                </div>
            </div>

        </nav>
    );
}