import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background/90 backdrop-blur-md border-t border-[#39FF14]/20 relative overflow-hidden">
      {/* Subtle glow orbs for footer */}
      <div className="absolute w-[160px] h-[160px] -left-10 top-1/4 bg-[#39FF14] rounded-full opacity-[0.04] blur-[45px]" />
      <div className="absolute w-[140px] h-[140px] right-10 bottom-1/3 bg-[#39FF14] rounded-full opacity-[0.03] blur-[40px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold neon-text-green">WILLPOWER FIT</h3>
            <p className="text-gray-300">
              Transformando vidas a través del fitness y el entrenamiento de
              calidad.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-blue">
              Enlaces
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-[#39FF14] transition-colors"
                >
                  Quiénes Somos
                </Link>
              </li>
              <li>
                <Link
                  href="/exercises"
                  className="text-gray-300 hover:text-[#39FF14] transition-colors"
                >
                  Ejercicios
                </Link>
              </li>
              <li>
                <Link
                  href="/findus"
                  className="text-gray-300 hover:text-[#39FF14] transition-colors"
                >
                  Encontranos
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-blue">
              Contacto
            </h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 Buenos Aires, Argentina</li>
              <li>📞 +54 11 1234-5678</li>
              <li>✉️ info@willpowerfit.com</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 neon-text-blue">
              Síguenos
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#39FF14] transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#39FF14] transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#39FF14] transition-colors"
              >
                <Twitter />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#39FF14]/20 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} WILLPOWER FIT. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
