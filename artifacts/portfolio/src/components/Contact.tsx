import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, CheckCircle2, Phone, MapPin } from "lucide-react";
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
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

  const onCopyEmail = () => {
    navigator.clipboard.writeText("yordismestra123@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const onCopyPhone = () => {
    navigator.clipboard.writeText("+573044649494");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
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
              ¿Necesitas apoyo administrativo?
            </motion.h2>
            <p className="text-xl text-muted-foreground mb-12">
              Hablemos. Estoy disponible para proyectos remotos, freelance o colaboración a tiempo completo.
            </p>

            <div className="space-y-5 mb-12">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Email</p>
                <div className="flex items-center gap-3">
                  <a
                    href="mailto:yordismestra123@gmail.com"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
                    data-testid="link-email"
                  >
                    <Mail className="w-5 h-5" />
                    yordismestra123@gmail.com
                  </a>
                  <button
                    onClick={onCopyEmail}
                    className="p-2 bg-secondary rounded-full hover:bg-border transition-colors text-muted-foreground hover:text-foreground"
                    title="Copiar email"
                    data-testid="button-copy-email"
                  >
                    {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Teléfono / WhatsApp</p>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+573044649494"
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
                    data-testid="link-phone"
                  >
                    <Phone className="w-5 h-5" />
                    +57 304 464 9494
                  </a>
                  <button
                    onClick={onCopyPhone}
                    className="p-2 bg-secondary rounded-full hover:bg-border transition-colors text-muted-foreground hover:text-foreground"
                    title="Copiar número"
                    data-testid="button-copy-phone"
                  >
                    {copiedPhone ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Ubicación</p>
                <div className="flex items-center gap-2 text-lg font-medium">
                  <MapPin className="w-5 h-5 text-primary" />
                  Medellín, Antioquia — Colombia
                </div>
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
                        <Input placeholder="Tu nombre" className="bg-secondary/50 border-transparent focus:bg-background" {...field} data-testid="input-name" />
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
                        <Input placeholder="tu@email.com" type="email" className="bg-secondary/50 border-transparent focus:bg-background" {...field} data-testid="input-email" />
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
                          placeholder="Cuéntame sobre tu proyecto o necesidad..."
                          className="min-h-[150px] bg-secondary/50 border-transparent focus:bg-background resize-none"
                          {...field}
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full text-base" disabled={isSubmitting} data-testid="button-submit">
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
