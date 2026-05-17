import { motion } from "framer-motion";
import { Briefcase, CheckCircle } from "lucide-react";

const experiences = [
  {
    label: "Experiencia 01",
    period: "2024 — 2025",
    title: "Asistente Administrativo",
    subtitle: "Freelance · Trabajo Remoto",
    description:
      "Brindé soporte administrativo integral a múltiples clientes de forma remota, manteniendo altos estándares de organización y comunicación.",
    tasks: [
      "Gestión de correos electrónicos y organización de bandejas de entrada para múltiples clientes",
      "Entrada y actualización de datos en hojas de cálculo y sistemas CRM",
      "Investigación básica de mercado y compilación de informes",
      "Soporte al cliente mediante chat y correo electrónico",
    ],
  },
  {
    label: "Experiencia 02",
    period: "2025 — Actualidad",
    title: "Auxiliar de Servicio al Cliente",
    subtitle: "Empleo Actual",
    description:
      "Atención directa a clientes y apoyo en la gestión administrativa interna, con enfoque en la eficiencia operativa y la satisfacción del cliente.",
    tasks: [
      "Atención presencial y telefónica a clientes, resolución de inquietudes y escalamiento de casos complejos",
      "Registro y actualización de información de clientes en el sistema CRM interno",
      "Archivo de documentos, elaboración de reportes y coordinación de agenda del supervisor",
    ],
  },
];

export default function Process() {
  return (
    <section id="experiencia" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-4 tracking-tight text-center">Experiencia Laboral</h2>
        <p className="text-muted-foreground text-center mb-20 max-w-xl mx-auto">
          Trayectoria enfocada en soporte administrativo remoto, gestión de datos y atención al cliente.
        </p>

        <div className="space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid lg:grid-cols-5 gap-10 items-start"
            >
              <div className="lg:col-span-2">
                <div className="text-primary font-mono text-sm mb-3">{exp.label}</div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5">
                  <Briefcase className="w-4 h-4" />
                  {exp.period}
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>

              <div className="lg:col-span-3 bg-card border border-border rounded-3xl p-8">
                <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-5">Responsabilidades</p>
                <ul className="space-y-4">
                  {exp.tasks.map((task) => (
                    <li key={task} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-foreground/80 leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
