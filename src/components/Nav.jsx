

function Nav ({scrollToSection, refs}) {

    return (
        <nav className='flex fixed items-center justify-center w-full h-14 border-b border-zinc-800 top-0 backdrop-blur-md'>
            <ul className="flex gap-4 font-light text-sm md:text-xl items-center justify-center">
                <li 
                    onClick={() => scrollToSection(refs.headerRef)} 
                    className="bg-anima transition cursor-pointer hover:scale-110">
                        Home
                </li>
                <li 
                    onClick={() => scrollToSection(refs.projectsRef)} 
                    className="bg-anima transition cursor-pointer hover:scale-110">
                        Projects
                </li>
                <li 
                    onClick={() => scrollToSection(refs.aboutRef)} 
                    className="bg-anima transition cursor-pointer hover:scale-110">
                        About
                </li>
                <li className="bg-anima transition cursor-pointer hover:scale-110">Contact</li>
            </ul>
        </nav>
    )
}

export default Nav