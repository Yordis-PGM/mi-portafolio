import { motion } from "framer-motion";
import { SiFigma } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "UI/UX Design", level: 95 },
    { name: "Motion Graphics", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Brand Identity", level: 80 },
    { name: "Design Systems", level: 90 },
    { name: "3D/Visual Effects", level: 75 }
  ];

  const tools = [
    { icon: SiFigma, name: "Figma" },
    { icon: null, name: "After Effects" },
    { icon: null, name: "Premiere Pro" },
    { icon: null, name: "Illustrator" },
    { icon: null, name: "Principle" },
    { icon: null, name: "Lottie" }
  ];

  return (
    <section id="habilidades" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Disciplinas</h2>
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-foreground">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-border rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Herramientas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {tools.map((tool, i) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors shadow-sm"
                >
                  {tool.icon ? (
                    <tool.icon className="w-10 h-10 mb-4 text-foreground/80 group-hover:text-primary transition-colors" />
                  ) : (
                    <div className="w-10 h-10 mb-4 flex items-center justify-center font-bold text-xl text-foreground/80">
                      {tool.name[0]}
                    </div>
                  )}
                  <span className="font-medium text-sm text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}