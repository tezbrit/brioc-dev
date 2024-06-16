
function Projects () {

    return (
        <section className="flex flex-col justify-center text-white p-2 px-5 pt-14">
            <div className="flex justify-start">
                <h1 className="text-2xl border p-2 rounded-xl bg-zinc-900 mb-5">Proyectos</h1>
            </div>
            
            <div className="text-white flex snap-x snap-mandatory overflow-x-auto space-x-4 py-4">
                <div className="bg-zinc-900 p-4 border rounded-xl border-zinc-800 snap-always snap-center min-w-full">
                    <a className="hover:opacity-70" href="https://tezbrit-music.vercel.app" target="_blank">
                        <img className="rounded-xl mb-2" src="/ton-app-screenshot.jpg" alt="TON APP Screenshot" />
                    </a>
                    <p className="font-bold">Tezbrit TON Album</p>
                    <p>Reproductor de música para la preescucha exclusiva del álbum TON de Tezbrit</p>
                    <div className="flex text-xs mt-2 gap-1">
                        <p className="bg-zinc-800 p-1 rounded-lg">React.js</p>
                        <p className="bg-zinc-800 p-1 rounded-lg">HTML</p>
                        <p className="bg-zinc-800 p-1 rounded-lg">CSS</p>
                    </div>
                </div>
                <div className="bg-zinc-900 p-4 border rounded-xl border-zinc-800 snap-always snap-center min-w-full">
                    <img className="rounded-xl mb-2" src="/ton-app-screenshot.jpg" alt="TON APP Screenshot" />
                    <p className="font-bold">Tezbrit TON Album</p>
                    <p>Reproductor de música para la preescucha exclusiva del álbum TON de Tezbrit</p>
                </div>
                <div className="bg-zinc-900 p-4 border border-zinc-800 rounded-xl snap-always snap-center min-w-full">
                    <img className="rounded-xl mb-2" src="/ton-app-screenshot.jpg" alt="TON APP Screenshot" />
                    <p className="font-bold">Tezbrit TON Album</p>
                    <p>Reproductor de música para la preescucha exclusiva del álbum TON de Tezbrit</p>
                </div>
            </div>
        </section>
    )
}

export default Projects