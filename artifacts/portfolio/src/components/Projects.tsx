import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import img1 from "../assets/project-1.png";
import img2 from "../assets/project-2.png";
import img3 from "../assets/project-3.png";
import img4 from "../assets/project-4.png";
import img5 from "../assets/project-5.png";
import img6 from "../assets/project-6.png";

const projects = [
  { id: 1, title: "FinDash App", category: "UI/UX", desc: "Dashboard financiero intuitivo", img: img1, className: "md:col-span-2 md:row-span-2 aspect-square md:aspect-auto" },
  { id: 2, title: "Nexus Title Sequence", category: "Motion", desc: "Secuencia de títulos cinemática", img: img2, className: "aspect-square" },
  { id: 3, title: "Aura Branding", category: "Branding", desc: "Sistema de identidad visual", img: img3, className: "aspect-square" },
  { id: 4, title: "Lumina Shop", category: "E-Commerce", desc: "Experiencia de compra minimalista", img: img4, className: "aspect-square" },
  { id: 5, title: "Abstract Visions", category: "3D/VFX", desc: "Visualización de producto en 3D", img: img5, className: "md:col-span-2 aspect-[2/1] md:aspect-auto" },
  { id: 6, title: "HealthSync UX", category: "Research", desc: "Investigación y mapeo de usuario", img: img6, className: "aspect-square" },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-32 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 md:flex justify-between items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Trabajo Seleccionado</h2>
            <p className="text-muted-foreground text-lg max-w-xl">Una muestra de proyectos donde la forma y la función se encuentran.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[300px]">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl bg-muted cursor-pointer ${project.className}`}
            >
              <img 
                src={project.img} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-primary text-white rounded-full">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 mb-6">{project.desc}</p>
                  <div className="flex items-center text-white font-medium hover:text-primary transition-colors">
                    Ver proyecto <ArrowRight className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}