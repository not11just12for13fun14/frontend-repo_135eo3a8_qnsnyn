import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Prices from './components/Prices'
import Gallery from './components/Gallery'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-neutral-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Prices />
        <Gallery />
        <Contact />
        <footer className="bg-neutral-950 text-stone-400 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">© {new Date().getFullYear()} Barbearia Lambert. Todos os direitos reservados.</p>
            <p className="text-sm">Vintage • Marrom • Cinza • Preto • Branco</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
