"use client";

import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  Heart,
  Users,
  Star,
  ChevronDown,
  Target,
  Zap,
  Trophy,
  Clock,
  Gauge,
  Flame,
  Shield,
  Award,
  MapPin,
  Plus,
  Minus,
} from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cuáles son los horarios del gimnasio?",
      answer:
        "Nuestro gimnasio está abierto de lunes a viernes de 6:00 a 23:00, sábados de 8:00 a 20:00 y domingos de 9:00 a 14:00.",
    },
    {
      question: "¿Necesito experiencia previa para unirme?",
      answer:
        "No, todos son bienvenidos sin importar su nivel de experiencia. Nuestros entrenadores te guiarán desde el primer día con un plan personalizado.",
    },
    {
      question: "¿Ofrecen clases de prueba?",
      answer:
        "¡Sí! Ofrecemos una clase de prueba gratuita para que puedas conocer nuestras instalaciones y metodología de entrenamiento.",
    },
    {
      question: "¿Qué debo traer a mi primera sesión?",
      answer:
        "Te recomendamos traer ropa cómoda, zapatillas deportivas, una toalla y una botella de agua. ¡Nosotros nos encargamos del resto!",
    },
    {
      question: "¿Tienen estacionamiento?",
      answer:
        "Sí, contamos con estacionamiento gratuito para todos nuestros miembros.",
    },
  ];

  return (
    <>
      <section className="hero-section">
        <div className="absolute w-[300px] h-[300px] -left-20 top-1/4 bg-[#39FF14] rounded-full opacity-[0.1] blur-[80px] pointer-events-none z-0" />
        <div className="absolute w-[250px] h-[250px] right-0 top-1/2 -translate-y-1/2 bg-[#39FF14] rounded-full opacity-[0.08] blur-[70px] pointer-events-none z-0" />
        <div className="absolute w-[280px] h-[280px] left-1/3 bottom-1/4 bg-[#0066FF] rounded-full opacity-[0.08] blur-[75px] pointer-events-none z-0" />
        <div className="absolute w-[220px] h-[220px] right-1/4 top-1/4 bg-[#0066FF] rounded-full opacity-[0.07] blur-[65px] pointer-events-none z-0" />
        <div className="relative z-10 w-full h-screen flex flex-col items-center justify-between py-20">
          <div className="flex-grow flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 neon-text-green animate-[float_4s_ease-in-out_infinite]">
              WILLPOWER FIT
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white animate-fade-in">
              Transforma tu cuerpo, fortalece tu mente
            </p>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-[#39FF14] text-[#39FF14] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#39FF14] hover:text-background transition-all duration-300 shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:shadow-[0_0_30px_rgba(57,255,20,0.8)]"
            >
              ¡Comienza Ahora!
            </Link>
          </div>
          <div className="animate-bounce">
            <ChevronDown className="h-8 w-8 text-[#39FF14]" />
          </div>
        </div>
      </section>

      {/* ¿Por qué elegirnos? Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute w-[200px] h-[200px] -left-20 top-20 bg-[#39FF14] rounded-full opacity-[0.08] blur-[60px]" />
        <div className="absolute w-[180px] h-[180px] right-10 bottom-20 bg-[#39FF14] rounded-full opacity-[0.06] blur-[50px]" />
        <div className="absolute w-[190px] h-[190px] left-1/4 bottom-1/3 bg-[#0066FF] rounded-full opacity-[0.07] blur-[55px]" />
        <div className="absolute w-[170px] h-[170px] right-1/3 top-1/3 bg-[#0066FF] rounded-full opacity-[0.06] blur-[45px]" />
        <div className="absolute w-[160px] h-[160px] right-1/4 top-1/4 bg-[#39FF14] rounded-full opacity-[0.05] blur-[45px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h2 className="text-4xl font-bold neon-text-blue mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-forest-mist/80 text-lg max-w-2xl mx-auto">
              Descubre lo que nos hace diferentes y por qué somos la mejor
              opción para alcanzar tus objetivos fitness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="why-choose-card group scroll-reveal fade-left delay-200">
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                  alt="Equipamiento Premium"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="why-choose-icon-wrapper">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#39FF14]">
                  Equipamiento Premium
                </h3>
                <p className="text-gray-300">
                  Máquinas de última generación y equipamiento de alta calidad
                  para un entrenamiento efectivo y seguro.
                </p>
              </div>
            </div>

            <div className="why-choose-card group scroll-reveal scale-up delay-400">
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b"
                  alt="Entrenadores Expertos"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="why-choose-icon-wrapper">
                    <Users className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#39FF14]">
                  Entrenadores Expertos
                </h3>
                <p className="text-gray-300">
                  Personal altamente calificado y certificado para guiarte en
                  cada paso de tu transformación.
                </p>
              </div>
            </div>

            <div className="why-choose-card group scroll-reveal fade-right delay-600">
              <div className="relative overflow-hidden rounded-t-xl h-48">
                <img
                  src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
                  alt="Resultados Garantizados"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="why-choose-icon-wrapper">
                    <Trophy className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <h3 className="text-xl font-semibold mb-3 text-[#39FF14]">
                  Resultados Garantizados
                </h3>
                <p className="text-gray-300">
                  Compromiso total con tu transformación física y mental,
                  respaldado por años de experiencia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-fade" id="exercises" />

      {/* Nuestros Programas Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute w-[220px] h-[220px] left-10 top-1/3 bg-[#39FF14] rounded-full opacity-[0.07] blur-[65px]" />
        <div className="absolute w-[190px] h-[190px] -right-10 bottom-1/4 bg-[#39FF14] rounded-full opacity-[0.06] blur-[55px]" />
        <div className="absolute w-[200px] h-[200px] right-1/4 top-20 bg-[#0066FF] rounded-full opacity-[0.08] blur-[60px]" />
        <div className="absolute w-[180px] h-[180px] left-1/3 bottom-1/4 bg-[#0066FF] rounded-full opacity-[0.07] blur-[50px]" />
        <div className="absolute w-[150px] h-[150px] left-1/4 center bg-[#39FF14] rounded-full opacity-[0.05] blur-[40px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h2 className="text-4xl font-bold neon-text-green mb-4">
              Nuestros Programas
            </h2>
            <p className="text-forest-mist/80 text-lg max-w-2xl mx-auto">
              Programas diseñados para todos los niveles y objetivos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="program-card-new group scroll-reveal rotate-in delay-200">
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
                  alt="Musculación"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="program-icon-new">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#39FF14]">
                    Musculación
                  </h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                    <span className="text-gray-300">60-90 min</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Desarrolla fuerza y masa muscular con nuestro programa
                    especializado
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      Rutinas personalizadas
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      Seguimiento de progreso
                    </span>
                  </div>
                  <Link
                    href="/programs/musculacion"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 group-hover:gap-3 transition-all duration-300"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="program-card-new group scroll-reveal scale-up delay-400">
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3"
                  alt="Cardio"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="program-icon-new">
                    <Gauge className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#39FF14]">Cardio</h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                    <span className="text-gray-300">45-60 min</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Mejora tu resistencia y quema calorías con ejercicios
                    cardiovasculares
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      HIIT
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      Cardio funcional
                    </span>
                  </div>
                  <Link
                    href="/programs/cardio"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 group-hover:gap-3 transition-all duration-300"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="program-card-new group scroll-reveal rotate-in delay-600">
              <div className="relative h-64 rounded-t-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff"
                  alt="CrossFit"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="program-icon-new">
                    <Flame className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="p-6 bg-dark-blue/30 backdrop-blur-md rounded-b-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[#39FF14]">
                    CrossFit
                  </h3>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#39FF14]" />
                    <span className="text-gray-300">50-70 min</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Entrena funcional con alta intensidad para resultados
                    rápidos
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      WOD diario
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#39FF14]/10 text-[#39FF14] text-sm">
                      Técnica Olympic
                    </span>
                  </div>
                  <Link
                    href="/programs/crossfit"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14]/10 group-hover:gap-3 transition-all duration-300"
                  >
                    Conocer más
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-fade my-20" id="findus" />

      {/* Dónde Encontrarnos Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute w-[300px] h-[300px] left-1/4 top-20 bg-[#39FF14] rounded-full opacity-[0.07] blur-[80px]" />
        <div className="absolute w-[280px] h-[280px] right-1/4 bottom-20 bg-[#0066FF] rounded-full opacity-[0.06] blur-[75px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h2 className="text-4xl font-bold neon-text-green mb-6">
              Dónde Encontrarnos
            </h2>
            <p className="text-xl text-forest-mist/80 max-w-3xl mx-auto">
              Ubicados estratégicamente en el corazón de la ciudad
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Información de ubicación */}
            <div className="space-y-6 scroll-reveal fade-right">
              <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-8 border border-[#39FF14]/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#39FF14]">
                    Dirección
                  </h3>
                </div>
                <div className="space-y-4 text-forest-mist">
                  <p className="text-lg">Av. Corrientes 1234</p>
                  <p>Ciudad Autónoma de Buenos Aires</p>
                  <p>Argentina</p>
                  <div className="pt-4">
                    <h4 className="font-semibold text-[#39FF14] mb-2">
                      Horarios
                    </h4>
                    <ul className="space-y-2">
                      <li>Lunes a Viernes: 6:00 - 23:00</li>
                      <li>Sábados: 8:00 - 20:00</li>
                      <li>Domingos: 9:00 - 14:00</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="scroll-reveal fade-left">
              <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-4 border border-[#39FF14]/20 h-[400px] relative overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878895513!2d-58.38375908477038!3d-34.60373446500542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA!5e0!3m2!1ses!2sar!4v1645454545454!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider-fade my-20" />

      {/* FAQ Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute w-[320px] h-[320px] -left-20 top-1/4 bg-[#0066FF] rounded-full opacity-[0.08] blur-[85px]" />
        <div className="absolute w-[300px] h-[300px] right-1/4 bottom-1/3 bg-[#39FF14] rounded-full opacity-[0.07] blur-[80px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h2 className="text-4xl font-bold neon-text-blue mb-6">
              Preguntas Frecuentes
            </h2>
            <p className="text-xl text-forest-mist/80">
              Todo lo que necesitas saber sobre WILLPOWER FIT
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="scroll-reveal fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full backdrop-blur-sm bg-dark-blue/30 rounded-xl p-6 border border-[#39FF14]/20 hover:border-[#39FF14]/40 transition-all duration-300"
                >
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-xl font-semibold text-[#39FF14] text-left">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 ml-4">
                      {openFaq === index ? (
                        <Minus className="w-6 h-6 text-[#39FF14]" />
                      ) : (
                        <Plus className="w-6 h-6 text-[#39FF14]" />
                      )}
                    </div>
                  </div>
                  <div
                    className={`mt-4 text-forest-mist text-left transition-all duration-300 ${
                      openFaq === index
                        ? "block opacity-100"
                        : "hidden opacity-0"
                    }`}
                  >
                    {faq.answer}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function TestimonialCard({
  name,
  text,
  rating,
  image,
}: {
  name: string;
  text: string;
  rating: number;
  image: string;
}) {
  return (
    <div className="testimonial-card">
      <div className="flex items-center gap-4 mb-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold neon-text-green">{name}</p>
          <div className="flex gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-[#39FF14] fill-[#39FF14]" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300">{text}</p>
    </div>
  );
}
