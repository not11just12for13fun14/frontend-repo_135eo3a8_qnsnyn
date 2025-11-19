import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full bg-neutral-950 text-stone-100 overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay that doesn't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-neutral-950"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 pt-28 pb-20 flex flex-col items-start">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="backdrop-blur-sm bg-black/30 border border-white/10 rounded-2xl p-6 mb-6">
          <p className="uppercase tracking-[0.3em] text-xs text-stone-300">Desde 1998</p>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.9 }} className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Barbearia Lambert
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.9 }} className="mt-4 max-w-2xl text-lg text-stone-300">
          Corte clássico, barba impecável e um bom papo. Um espaço vintage com alma moderna no coração da cidade.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.9 }} className="mt-8 flex flex-wrap gap-3">
          <a href="#prices" className="px-6 py-3 rounded-md bg-stone-800 hover:bg-stone-700 border border-white/10 transition">Ver preços</a>
          <a href="#contact" className="px-6 py-3 rounded-md bg-white text-black hover:bg-stone-100 transition">Agendar agora</a>
        </motion.div>
      </div>
    </section>
  )
}
