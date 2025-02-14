"use client";
import { useState, useEffect } from "react";

import { Instagram, Twitter, Award, Target, Users, Heart } from "lucide-react";

export default function AboutPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px",
      }
    );

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const coaches = [
    {
      name: "Laura Fernández",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155",
      description:
        "Especialista en entrenamiento funcional y nutrición deportiva. Con más de 8 años de experiencia en el campo del fitness, Laura ha ayudado a cientos de personas a alcanzar sus objetivos de forma saludable y sostenible. Certificada en TRX, CrossFit L2 y Nutrición Deportiva.",
      glowColor: "#39FF14", // verde neón
    },
    {
      name: "Martín López",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883",
      description:
        "Experto en musculación y preparación física. Martín combina técnicas modernas con métodos probados para crear programas personalizados que maximizan resultados. Certificado en Strength & Conditioning y especialista en rehabilitación deportiva.",
      glowColor: "#0066FF", // azul neón
    },
    {
      name: "Ana Martínez",
      image: "https://images.unsplash.com/photo-1609899537878-39d4a48ad468",
      description:
        "Especialista en HIIT y entrenamiento cardiovascular. Con background en atletismo de alto rendimiento, Ana desarrolla programas que mejoran la resistencia y la fuerza de manera efectiva. Certificada en HIIT, Running y Periodización del entrenamiento.",
      glowColor: "#39FF14", // verde neón
    },
  ];

  const stats = [
    {
      icon: Award,
      value: "15+",
      label: "Años de Experiencia",
      description: "Trayectoria comprobada en el mundo del fitness",
      glowColor: "#39FF14",
    },
    {
      icon: Target,
      value: "1000+",
      label: "Objetivos Alcanzados",
      description: "Historias de éxito que nos respaldan",
      glowColor: "#0066FF",
    },
    {
      icon: Users,
      value: "500+",
      label: "Miembros Activos",
      description: "Una comunidad en constante crecimiento",
      glowColor: "#39FF14",
    },
    {
      icon: Heart,
      value: "98%",
      label: "Satisfacción",
      description: "Clientes satisfechos con nuestro servicio",
      glowColor: "#0066FF",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Orbes decorativos */}
        <div className="absolute w-[400px] h-[400px] -left-20 top-1/4 bg-[#39FF14] rounded-full opacity-[0.1] blur-[100px] pointer-events-none" />
        <div className="absolute w-[380px] h-[380px] right-1/4 top-1/3 bg-[#0066FF] rounded-full opacity-[0.08] blur-[95px] pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] left-1/3 bottom-1/4 bg-[#39FF14] rounded-full opacity-[0.09] blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 scroll-reveal fade-up">
            <h1 className="text-4xl md:text-6xl font-bold neon-text-green mb-6">
              Nuestro Equipo
            </h1>
            <p className="text-xl text-forest-mist/80 max-w-3xl mx-auto">
              Conoce a los profesionales que te guiarán en tu camino hacia una
              vida más saludable y activa
            </p>
          </div>

          {/* Separador con gradiente */}
          <div className="section-divider-fade mb-32" />

          {/* Coaches */}
          <div className="space-y-40">
            {coaches.map((coach, index) => (
              <div
                key={coach.name}
                className={`scroll-reveal ${
                  index % 2 === 0 ? "fade-right" : "fade-left"
                } flex flex-col md:flex-row items-center gap-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Imagen Circular con Glow Mejorado */}
                <div className="relative w-96 h-96 md:w-[450px] md:h-[450px] flex-shrink-0">
                  {/* Glow exterior */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at center, ${coach.glowColor}40 0%, ${coach.glowColor}20 30%, transparent 70%)`,
                      filter: "blur(30px)",
                      transform: "scale(1.4)",
                    }}
                  />
                  {/* Glow interior */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: `radial-gradient(circle at center, ${coach.glowColor}30 0%, transparent 70%)`,
                      filter: "blur(20px)",
                      transform: "scale(1.2)",
                    }}
                  />
                  {/* Contenedor de la imagen */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[#39FF14]/20 shadow-[0_0_30px_rgba(57,255,20,0.3)]">
                    <img
                      src={coach.image}
                      alt={coach.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Información */}
                <div className="flex-1 space-y-6 text-center md:text-left">
                  <h2 className="text-5xl font-bold neon-text-green">
                    {coach.name}
                  </h2>
                  <p className="text-lg text-forest-mist/90 leading-relaxed">
                    {coach.description}
                  </p>
                  <div className="flex gap-4 justify-center md:justify-start">
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14]/20 transition-colors"
                    >
                      <Twitter className="w-6 h-6" />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] hover:bg-[#39FF14]/20 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Separador con gradiente */}
      <div className="section-divider-fade my-20" />

      {/* Sección de Estadísticas */}
      <section className="py-20 relative overflow-hidden">
        {/* Orbes decorativos adicionales */}
        <div className="absolute w-[300px] h-[300px] right-0 top-0 bg-[#0066FF] rounded-full opacity-[0.07] blur-[80px] pointer-events-none" />
        <div className="absolute w-[280px] h-[280px] left-1/4 bottom-0 bg-[#39FF14] rounded-full opacity-[0.08] blur-[75px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h2 className="text-4xl font-bold neon-text-blue mb-6">
              Nuestro Impacto
            </h2>
            <p className="text-xl text-forest-mist/80 max-w-3xl mx-auto">
              Números que reflejan nuestro compromiso con tu transformación
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="scroll-reveal scale-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative p-6 rounded-xl backdrop-blur-sm bg-dark-blue/30 border border-[#39FF14]/20 hover:border-[#39FF14]/40 transition-colors group">
                  {/* Glow effect */}
                  <div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${stat.glowColor}10 0%, transparent 70%)`,
                      filter: "blur(20px)",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-full bg-[#39FF14]/10 flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-8 h-8 text-[#39FF14]" />
                    </div>
                    <h3 className="text-4xl font-bold text-[#39FF14] mb-2 text-center">
                      {stat.value}
                    </h3>
                    <p className="text-xl font-semibold text-white mb-2 text-center">
                      {stat.label}
                    </p>
                    <p className="text-forest-mist/80 text-center">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
