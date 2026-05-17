import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
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
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-primary tracking-tight">Sobre mí</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-medium text-foreground mb-6">
              Profesional organizado y proactivo con excelentes habilidades de comunicación y capacidad de autogestión.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Apasionado por el soporte administrativo remoto, con fuerte ética de trabajo y facilidad para aprender rápidamente. Busco contribuir al éxito del equipo mediante una gestión eficiente y atención al detalle.
            </p>

            <div className="space-y-5">
              <h3 className="text-lg font-bold tracking-tight">Formación académica</h3>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex gap-4 p-5 bg-card border border-border rounded-2xl"
              >
                <div className="mt-1 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Desarrollo de Software</p>
                  <p className="text-sm text-muted-foreground">SENA — Medellín · Graduado 2024</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex gap-4 p-5 bg-card border border-border rounded-2xl"
              >
                <div className="mt-1 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-semibold">Bachillerato — Informática y Administración</p>
                  <p className="text-sm text-muted-foreground">Preparatoria Borcelle · 2021</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Años de experiencia", value: 2, suffix: "+" },
              { label: "Clientes atendidos", value: 20, suffix: "+" },
              { label: "Tareas completadas", value: 500, suffix: "+" },
              { label: "Idiomas", value: 1, suffix: "" },
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
