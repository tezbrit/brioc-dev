import InstagramIcon from "./icons/Instagram"
import GithubIcon from "./icons/Github"

function Footer() {

    return (
        <footer className="flex flex-col gap-2 bg-black border-t border-zinc-800 p-4 text-center text-white">
            <p><span className="font-bold">BRIOC-DEV</span> | Octavio Brittez</p>

            <div className="flex items-center justify-center gap-4">
                <a className="bg-anima" href="https://www.instagram.com/octaviobrittez/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon className="h-10 w-10"/>
                </a>

                <a className="bg-anima" href="https://github.com/tezbrit" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="h-10 w-10"/>
                </a>
                
            </div>
            
        </footer>
    )
}

export default Footer