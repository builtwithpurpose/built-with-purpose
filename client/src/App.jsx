import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Grainient from './components/Grainient'

function App() {
  return (
    <>
      <Navbar />

      {/* Dynamic Animated Grainient Background */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0.16
        }}
      >
        <Grainient
          color1="#FF9FFC"
          color2="#5227FF"
          color3="#B497CF"
          timeSpeed={0.12}
          colorBalance={0.0}
          warpStrength={1.0}
          warpFrequency={4.0}
          warpSpeed={1.0}
          warpAmplitude={40.0}
          blendAngle={45.0}
          blendSoftness={0.08}
          rotationAmount={250.0}
          noiseScale={1.5}
          grainAmount={0.05}
          grainScale={1.5}
          grainAnimated={true}
          contrast={1.3}
          gamma={1.0}
          saturation={1.0}
          centerX={0.0}
          centerY={0.0}
          zoom={1.0}
        />
      </div>

      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
