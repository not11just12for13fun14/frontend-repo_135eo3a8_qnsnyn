const items = [
  { name: 'Corte Masculino', price: '€18' },
  { name: 'Corte + Barba', price: '€28' },
  { name: 'Barba Completa', price: '€15' },
  { name: 'Corte Máquina', price: '€12' },
  { name: 'Corte Infantil', price: '€14' },
]

export default function Prices() {
  return (
    <section id="prices" className="bg-neutral-950 text-stone-200 py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Preços</h2>
          <p className="text-stone-400 mt-2">Transparência e qualidade em cada serviço.</p>
        </div>

        <div className="bg-stone-900/60 border border-white/10 rounded-2xl overflow-hidden">
          {items.map((it, idx) => (
            <div key={it.name} className={`flex items-center justify-between px-6 py-4 ${idx !== items.length - 1 ? 'border-b border-white/10' : ''}`}>
              <span className="text-white">{it.name}</span>
              <span className="font-semibold">{it.price}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-stone-400 text-sm mt-4">Valores podem variar conforme o estilo e complexidade.</p>
      </div>
    </section>
  )
}
