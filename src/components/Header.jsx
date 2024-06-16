import GithubIcon from "../components/icons/Github"
import LinkedInIcon from "../components/icons/Linkedin"
import PinIcon from "../components/icons/Pin"
import CodeIcon from "../components/icons/Code"

const Header = () => {

    return (
        <header className="flex flex-col justify-start p-2 h-screen">

            <div className="flex flex-col items-center text-center gap-3 pt-4">

                <img className="border-anima rounded-full h-52 w-52 md:h-80 md:w-80" src="/profile.jpg" alt="Foto de perfil" loading="lazy" />

                <div className="inline-block">
                    <h1 className="typing text-3xl md:text-4xl text-white">
                        &lt;Octavio Brittez /&gt;
                    </h1>
                </div>

                <p className="text-2xl font-light text-white bg-zinc-900 border-anima rounded-xl p-2">Frontend Developer</p>


                <div className="flex mt-2 justify-center items-center gap-6 font-light">
                    <a className="flex items-center gap-2 transition hover:scale-110 hover-border rounded-xl p-2" href="https://github.com/tezbrit" target="_blank" rel="noopener noreferrer">
                        <GithubIcon className="h-5 w-5 "/>
                        <p>Github</p>
                    </a>
                    <a className="flex items-center gap-2 transition hover:scale-110 hover-border rounded-xl p-2" href="https://www.linkedin.com/in/octavio-brittez/" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon className="h-5 w-5"/>
                        <p>LinkedIn</p>
                    </a>
                </div>

                <div className="flex items-center justify-center pt-6 gap-1">
                    <CodeIcon className="h-8 w-8 text-white"/>
                    <p className="text-white text-xl">Diseño y desarrollo.</p>
                </div>
                
                <div className="flex items-center justify-center pt-6 pb-6">
                    <PinIcon className="h-8 w-8 text-white"/>
                    <p className="text-white text-xl w-10/12">Argentina.</p>
                </div>

                

                
                <div className="w-2/3 h-0.5 bg-zinc-900"></div>

            </div>

            
        </header>
    )
}

export default Header;