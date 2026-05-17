import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  return (
    <section id="sobre-mi" className="py-32 px-6 bg-secondary/50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">Filosofía</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-foreground mb-6">
              El buen diseño es invisible, pero sus efectos no lo son. Creo interfaces que no solo se ven bien, sino que se sienten inevitables.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Combinando la precisión de la investigación UX con la emoción del motion graphics, construyo experiencias digitales que conectan marcas con personas de manera memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { label: "Años de experiencia", value: 5, suffix: "+" },
              { label: "Proyectos completados", value: 40, suffix: "+" },
              { label: "Clientes satisfechos", value: 15, suffix: "+" },
              { label: "Premios ganados", value: 3, suffix: "" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-6 bg-card border border-border rounded-2xl shadow-sm"
              >
                <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                  <Counter end={stat.value} />{stat.suffix}
                </div>
                <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}