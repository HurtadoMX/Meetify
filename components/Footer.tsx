import { Github } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-black/40 backdrop-blur py-2 text-center text-xs text-white/60">
      © {year} · Developed by{" "}
      <span className="font-medium text-white">HurtadoMX</span>{" "}
      <span className="mx-1">·</span>
      <a
        href="https://github.com/HurtadoMX/Meetify"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 underline underline-offset-4 transition-opacity hover:opacity-80"
      >
        <Github className="h-4 w-4" />
        Source code
      </a>
    </footer>
  );
};

export default Footer;
