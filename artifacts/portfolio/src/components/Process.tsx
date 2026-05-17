import { motion } from "framer-motion";
import img1 from "../assets/project-1.png";
import img4 from "../assets/project-4.png";

export default function Process() {
  return (
    <section id="proceso" className="py-32 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl font-bold mb-16 tracking-tight text-center">En Detalle</h2>
        
        <div className="space-y-32">
          {/* Case 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="text-primary font-mono text-sm mb-4">Caso de Estudio 01</div>
              <h3 className="text-3xl font-bold mb-4">FinDash Evolución</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                El reto era simplificar la complejidad de los datos financieros sin perder profundidad. 
                Mediante entrevistas a usuarios y wireframing iterativo, logramos un dashboard que 
                prioriza la jerarquía visual y utiliza el motion design para guiar la atención.
              </p>
              <ul className="space-y-3 font-mono text-sm text-foreground mb-8">
                <li>→ Arquitectura de información</li>
                <li>→ Prototipado en Alta Fidelidad</li>
                <li>→ Microinteracciones</li>
              </ul>
              <button className="px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-colors">
                Leer Caso Completo
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 rounded-3xl overflow-hidden bg-muted aspect-video lg:aspect-square"
            >
              <img src={img1} alt="FinDash" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Case 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden bg-muted aspect-video lg:aspect-square"
            >
              <img src={img4} alt="Lumina Shop" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="pl-0 lg:pl-12"
            >
              <div className="text-primary font-mono text-sm mb-4">Caso de Estudio 02</div>
              <h3 className="text-3xl font-bold mb-4">Lumina E-Commerce</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Diseño de principio a fin para una marca de iluminación premium. El foco estuvo en 
                crear un flujo de checkout sin fricciones y una presentación de producto que transmitiera 
                elegancia a través del minimalismo extremo.
              </p>
              <ul className="space-y-3 font-mono text-sm text-foreground mb-8">
                <li>→ UI/UX Completo</li>
                <li>→ Sistema de Diseño Modular</li>
                <li>→ Optimización de Conversión</li>
              </ul>
              <button className="px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-primary transition-colors">
                Leer Caso Completo
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}