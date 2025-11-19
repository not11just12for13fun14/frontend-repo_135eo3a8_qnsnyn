export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1556228578-8ac7d482eb61?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1593702215110-ec6b1a3cf16b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1559599189-95e196b6925b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1614270532514-c71d4ccb8b38?q=80&w=1200&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="bg-neutral-950 text-stone-200 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Galeria</h2>
          <p className="text-stone-400 mt-2">Um pouco do nosso trabalho e ambiente.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((src, i) => (
            <div key={i} className="relative group overflow-hidden rounded-xl border border-white/10">
              <img src={src} alt="Barbearia" className="w-full h-44 md:h-56 object-cover transition duration-300 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
