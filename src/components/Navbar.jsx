import { useState, useEffect } from 'react'
import { Menu, X, Scissors, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-neutral-950/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 text-stone-100">
          <div className="p-2 rounded-full bg-stone-800/80 border border-white/10">
            <Scissors className="w-5 h-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold tracking-wider uppercase text-sm">Barbearia</p>
            <p className="text-xl font-bold tracking-wide">Lambert</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-stone-200">
          <a href="#services" className="hover:text-white transition">Serviços</a>
          <a href="#prices" className="hover:text-white transition">Preços</a>
          <a href="#gallery" className="hover:text-white transition">Galeria</a>
          <a href="#contact" className="hover:text-white transition">Contato</a>
          <a href="tel:+000000000" className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-4 py-2 rounded-md border border-white/10 transition">
            <Phone className="w-4 h-4" /> Reservar
          </a>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden text-stone-100 p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-neutral-950/95 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-4 grid gap-3 text-stone-200">
            <a href="#services" onClick={() => setOpen(false)} className="py-2">Serviços</a>
            <a href="#prices" onClick={() => setOpen(false)} className="py-2">Preços</a>
            <a href="#gallery" onClick={() => setOpen(false)} className="py-2">Galeria</a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2 flex items-center gap-2"><MapPin className="w-4 h-4"/>Localização</a>
            <a href="tel:+000000000" onClick={() => setOpen(false)} className="py-2 inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white px-4 rounded-md border border-white/10"> <Phone className="w-4 h-4"/> Reservar</a>
          </div>
        </div>
      )}
    </header>
  )
}
