import { Phone, MapPin, Mail, Instagram } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="bg-neutral-950 text-stone-200 py-20">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contato</h2>
          <p className="text-stone-400 mt-2">Agende seu horário ou faça uma visita.</p>

          <div className="mt-6 space-y-3">
            <a href="tel:+000000000" className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-stone-800 border border-white/10"><Phone className="w-5 h-5"/></span>
              <span>(00) 0000-0000</span>
            </a>
            <a href="mailto:contato@barbearialambert.com" className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-stone-800 border border-white/10"><Mail className="w-5 h-5"/></span>
              <span>contato@barbearialambert.com</span>
            </a>
            <a href="#" className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-stone-800 border border-white/10"><Instagram className="w-5 h-5"/></span>
              <span>@barbearia.lambert</span>
            </a>
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-stone-800 border border-white/10"><MapPin className="w-5 h-5"/></span>
              <span>Rua Central, 123 - Centro, Sua Cidade</span>
            </div>
          </div>
        </div>

        <form className="bg-stone-900/60 border border-white/10 rounded-2xl p-6 grid gap-4">
          <div>
            <label className="block text-sm text-stone-400 mb-1">Nome</label>
            <input className="w-full bg-stone-800 text-white rounded-md px-3 py-2 border border-white/10 outline-none focus:ring-2 focus:ring-white/20" placeholder="Seu nome"/>
          </div>
          <div>
            <label className="block text-sm text-stone-400 mb-1">Email</label>
            <input type="email" className="w-full bg-stone-800 text-white rounded-md px-3 py-2 border border-white/10 outline-none focus:ring-2 focus:ring-white/20" placeholder="seu@email.com"/>
          </div>
          <div>
            <label className="block text-sm text-stone-400 mb-1">Mensagem</label>
            <textarea rows={4} className="w-full bg-stone-800 text-white rounded-md px-3 py-2 border border-white/10 outline-none focus:ring-2 focus:ring-white/20" placeholder="Como podemos ajudar?"/>
          </div>
          <button type="button" className="bg-white text-black rounded-md px-4 py-2 hover:bg-stone-100 transition">Enviar</button>
        </form>
      </div>
    </section>
  )
}
