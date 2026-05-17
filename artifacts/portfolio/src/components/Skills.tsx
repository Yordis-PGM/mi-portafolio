import { motion } from "framer-motion";
import { Monitor, Globe, MessageSquare, FileSpreadsheet, Calendar, FolderOpen } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "Gestión de correo y comunicación", level: 95 },
    { name: "CRM y bases de datos", level: 85 },
    { name: "Hojas de cálculo (Excel / Google Sheets)", level: 90 },
    { name: "Atención al cliente", level: 92 },
    { name: "Redacción de reportes e informes", level: 80 },
    { name: "Coordinación y gestión de agenda", level: 85 },
  ];

  const tools = [
    { icon: Globe, name: "Gmail / Outlook" },
    { icon: FileSpreadsheet, name: "Google Sheets" },
    { icon: Monitor, name: "CRM Systems" },
    { icon: Calendar, name: "Google Calendar" },
    { icon: MessageSquare, name: "Slack / Zoom" },
    { icon: FolderOpen, name: "Google Drive" },
  ];

  return (
    <section id="habilidades" className="py-32 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-4xl font-bold mb-10 tracking-tight">Habilidades</h2>
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
              {tools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-colors shadow-sm"
                  >
                    <Icon className="w-10 h-10 mb-4 text-primary/70" />
                    <span className="font-medium text-sm text-center">{tool.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
