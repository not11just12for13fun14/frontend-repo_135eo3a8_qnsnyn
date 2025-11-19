import { Scissors, Brush, Sparkles, Shield } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Corte Clássico',
    desc: 'Do tradicional ao moderno, com atenção aos detalhes.'
  },
  {
    icon: Brush,
    title: 'Barba & Toalha Quente',
    desc: 'Ritual completo para um acabamento perfeito.'
  },
  {
    icon: Sparkles,
    title: 'Acabamentos',
    desc: 'Navalha, camadas e estilização para qualquer ocasião.'
  },
  {
    icon: Shield,
    title: 'Higiene & Cuidado',
    desc: 'Ferramentas esterilizadas e protocolos rigorosos.'
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-neutral-950 text-stone-200 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Serviços</h2>
          <p className="text-stone-400 mt-2">Essenciais de barbearia com inspiração vintage.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-stone-900/60 border border-white/10 rounded-xl p-6 hover:translate-y-[-2px] transition-transform">
              <div className="p-3 w-12 h-12 rounded-lg bg-stone-800 flex items-center justify-center mb-4 border border-white/10">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-white">{s.title}</h3>
              <p className="text-sm text-stone-400 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
