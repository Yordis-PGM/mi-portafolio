export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="font-bold text-lg">YORDIS MESTRA <span className="text-muted-foreground font-normal ml-2">© 2026</span></p>
          <p className="text-sm text-muted-foreground mt-1">Asistente Virtual · Soporte Administrativo Remoto</p>
        </div>

        <div className="flex space-x-6 text-sm text-muted-foreground">
          <a href="#inicio" className="hover:text-primary transition-colors">Inicio</a>
          <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
          <a href="#experiencia" className="hover:text-primary transition-colors">Experiencia</a>
          <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
        </div>
      </div>
    </footer>
  );
}
