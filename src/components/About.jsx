
function About () {

    return (
        <section className="flex flex-col justify-center items-start text-white p-2 mb-5 pt-14">
            <h1 className="text-2xl border p-2 rounded-xl bg-zinc-900 ml-5">Sobre Mí</h1>
            <div className="text-start pt-6">
                <p className="text-xl px-5">
                ¡Hola! Soy <span className="font-bold">Octavio</span>, desarrollador web <span className="text-teal-500">front-end</span> de Argentina, apasionado por el
                diseño de interfaces de usuario atractivas e intuitivas.
                </p>
                <p className="text-xl px-5 pt-2">
                    Siempre me interesó el diseño en todas sus formas. Antes de adentrarme en el desarrollo web,
                    exploré el <span className="text-teal-500">diseño gráfico</span> creando logotipos, editanto videos y modelando en 3D.
                </p>
                <p className="text-xl px-5 pt-2">
                    Encontré mi vocación en la <span className="text-teal-500">programación</span>, aprendiendo
                    diferentes tecnologías y buenas prácticas para
                    retornar a los usuarios la mejor experiencia de usuario posible.
                </p>
            </div>
        </section>
    );
}

export default About