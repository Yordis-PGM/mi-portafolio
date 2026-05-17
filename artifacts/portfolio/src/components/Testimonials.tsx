import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Yordis no solo diseñó nuestra app, la elevó a un nivel que no sabíamos que era posible. Su atención al detalle y el uso del motion design hicieron que nuestro producto destaque en un mercado saturado.",
      name: "Elena Rostova",
      company: "CEO, Finova Tech"
    },
    {
      quote: "Trabajar con Yordis es sinónimo de tranquilidad. Entiende el problema desde la raíz y propone soluciones visuales que comunican exactamente lo que la marca necesita. Un profesional absoluto.",
      name: "Marc Valier",
      company: "Director Creativo, Studio V"
    },
    {
      quote: "La identidad y web que creó para nosotros nos ayudó a duplicar nuestra tasa de conversión. Su diseño es limpio, con propósito y maravillosamente ejecutado.",
      name: "Sofia Lin",
      company: "Founder, Lumina"
    }
  ];

  return (
    <section id="testimonios" className="py-32 px-6 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">Lo que dicen los clientes</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/10 p-8 rounded-3xl backdrop-blur-sm border border-white/20 flex flex-col justify-between"
            >
              <div className="mb-8">
                <svg className="w-8 h-8 text-white/40 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-lg font-medium leading-relaxed">"{t.quote}"</p>
              </div>
              <div>
                <p className="font-bold">{t.name}</p>
                <p className="text-white/70 text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}