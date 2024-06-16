import { useRef } from 'react'
import './index.css'
import Nav from './components/Nav'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'


function App() {

  const headerRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='select-none'>

      <div 
      className="fixed inset-0 -z-10 
      h-full w-full 
      items-center px-5 py-24 
      [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#a900fd_100%)]">  
      </div>
      <Nav scrollToSection={scrollToSection} refs={{ headerRef, aboutRef, projectsRef }} />
      <div className="m-auto max-w-xl bg-black border-x border-zinc-800 mt-14">
        <section ref={headerRef}>
          <Header />
        </section>

        <section ref={aboutRef}>
          <About />
        </section>

        <section ref={projectsRef}>
          <Projects />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App
