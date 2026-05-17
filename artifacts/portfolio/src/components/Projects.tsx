import { motion } from "framer-motion";
import { Mail, Database, MessageCircle, BarChart2, CalendarDays, Search } from "lucide-react";

const services = [
  {
    id: 1,
    icon: Mail,
    title: "Gestión de Email",
    category: "Administración",
    desc: "Organización y gestión de bandejas de entrada para múltiples clientes, filtrado de mensajes y seguimiento de prioridades.",
    className: "md:col-span-2 md:row-span-1",
    accent: "bg-indigo-50",
  },
  {
    id: 2,
    icon: Database,
    title: "CRM & Datos",
    category: "Sistemas",
    desc: "Entrada, actualización y mantenimiento de información en hojas de cálculo y sistemas CRM.",
    className: "",
    accent: "bg-violet-50",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Atención al Cliente",
    category: "Soporte",
    desc: "Soporte mediante chat, correo electrónico y atención telefónica. Resolución de inquietudes y escalamiento de casos.",
    className: "",
    accent: "bg-sky-50",
  },
  {
    id: 4,
    icon: BarChart2,
    title: "Reportes & Documentos",
    category: "Administración",
    desc: "Elaboración de reportes, archivo de documentos y compilación de informes según las necesidades del equipo.",
    className: "",
    accent: "bg-emerald-50",
  },
  {
    id: 5,
    icon: CalendarDays,
    title: "Coordinación de Agenda",
    category: "Gestión",
    desc: "Organización y coordinación del calendario y agenda del supervisor o cliente, programación de reuniones.",
    className: "md:col-span-2 md:row-span-1",
    accent: "bg-amber-50",
  },
  {
    id: 6,
    icon: Search,
    title: "Investigación de Mercado",
    category: "Análisis",
    desc: "Investigación básica de mercado y compilación de informes con información relevante para la toma de decisiones.",
    className: "",
    accent: "bg-rose-50",
  },
];

export default function Projects() {
  return (
    <section id="servicios" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Servicios</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Apoyo administrativo remoto con precisión y atención al detalle para que tu negocio funcione sin fricciones.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                data-testid={`card-service-${service.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-border bg-card p-8 flex flex-col justify-between hover:border-primary/40 hover:shadow-lg transition-all duration-300 cursor-default ${service.className}`}
              >
                <div className={`absolute inset-0 ${service.accent} opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-secondary text-muted-foreground rounded-full">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                </div>

                <p className="relative z-10 text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
