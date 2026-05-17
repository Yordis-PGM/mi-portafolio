import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, CheckCircle2 } from "lucide-react";
import { Globe, Linkedin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "El nombre es requerido"),
  email: z.string().email("Correo electrónico inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onCopy = () => {
    navigator.clipboard.writeText("hello@yordismestra.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <section id="contacto" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16">
          
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-black tracking-tight mb-6"
            >
              ¿Tienes un proyecto en mente?
            </motion.h2>
            <p className="text-xl text-muted-foreground mb-12">
              Hablemos. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades.
            </p>

            <div className="mb-12">
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Email Directo</p>
              <div className="flex items-center space-x-4">
                <a href="mailto:hello@yordismestra.com" className="text-2xl font-medium hover:text-primary transition-colors flex items-center">
                  <Mail className="mr-3 w-6 h-6" /> hello@yordismestra.com
                </a>
                <button 
                  onClick={onCopy}
                  className="p-2 bg-secondary rounded-full hover:bg-border transition-colors text-muted-foreground hover:text-foreground"
                  title="Copiar email"
                >
                  {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Redes</p>
              <div className="flex space-x-6">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-3 bg-secondary rounded-full">
                  <Globe className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-3 bg-secondary rounded-full">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-3 bg-secondary rounded-full">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-10 rounded-3xl shadow-sm"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nombre</FormLabel>
                      <FormControl>
                        <Input placeholder="Tu nombre" className="bg-secondary/50 border-transparent focus:bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="tu@email.com" type="email" className="bg-secondary/50 border-transparent focus:bg-background" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensaje</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Cuéntame sobre tu proyecto..." 
                          className="min-h-[150px] bg-secondary/50 border-transparent focus:bg-background resize-none" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </Form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}