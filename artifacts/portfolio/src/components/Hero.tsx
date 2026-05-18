import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import avatarImg from "@assets/WhatsApp_Image_2026-05-16_at_3.43.14_PM_1779055293010.jpeg";

export default function Hero() {
  const roles = ["Asistente Virtual", "Soporte Administrativo Remoto", "Gestión de CRM & Datos", "Atención al Cliente"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="inicio" className="min-h-screen flex flex-col justify-center items-center relative pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 ring-4 ring-primary/20 ring-offset-4 ring-offset-background"
        >
          <img src={avatarImg} alt="Yordis Mestra" className="w-full h-full object-cover" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4"
        >
          YORDIS MESTRA
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-10 md:h-12 overflow-hidden mb-6"
        >
          <AnimatePresence mode="wait">
            <motion.h2
              key={currentRole}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl text-muted-foreground font-medium"
            >
              {roles[currentRole]}
            </motion.h2>
          </AnimatePresence>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12"
        >
          Organización, precisión y comunicación al servicio de tu negocio.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          href="/cv-yordis-mestra.pdf"
          download="CV-Yordis-Mestra.pdf"
          className="inline-flex items-center gap-2 px-6 py-3 mb-10 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
        >
          <Download className="w-4 h-4" />
          Descargar CV
        </motion.a>

        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#servicios"
          className="group flex flex-col items-center text-foreground font-semibold hover:text-primary transition-colors"
        >
          <span>Ver mis servicios</span>
          <span className="block w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300 mt-1 mb-4"></span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
