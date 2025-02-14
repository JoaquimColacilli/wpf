"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Mensaje enviado con éxito!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Orbes decorativos */}
        <div className="absolute w-[400px] h-[400px] -left-20 top-1/4 bg-[#39FF14] rounded-full opacity-[0.1] blur-[100px] pointer-events-none" />
        <div className="absolute w-[380px] h-[380px] right-1/4 top-1/3 bg-[#0066FF] rounded-full opacity-[0.08] blur-[95px] pointer-events-none" />
        <div className="absolute w-[360px] h-[360px] left-1/3 bottom-1/4 bg-[#39FF14] rounded-full opacity-[0.09] blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal fade-up">
            <h1 className="text-4xl md:text-6xl font-bold neon-text-green mb-6">
              Contacto
            </h1>
            <p className="text-xl text-forest-mist/80 max-w-3xl mx-auto">
              Estamos aquí para ayudarte. Contáctanos y sé parte de la familia
              WILLPOWER FIT
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div className="scroll-reveal fade-right h-full">
              <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-8 border border-[#39FF14]/20 h-full flex flex-col">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 flex-grow flex flex-col"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-forest-mist mb-2"
                    >
                      Nombre
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-[#39FF14]/30 text-white focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-forest-mist mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-[#39FF14]/30 text-white focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-forest-mist mb-2"
                    >
                      Asunto
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-[#39FF14]/30 text-white focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors"
                      placeholder="Asunto del mensaje"
                    />
                  </div>
                  <div className="flex-grow">
                    <label
                      htmlFor="message"
                      className="block text-forest-mist mb-2"
                    >
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full h-[calc(100%-2rem)] min-h-[150px] px-4 py-3 rounded-lg bg-background/50 border border-[#39FF14]/30 text-white focus:border-[#39FF14] focus:ring-1 focus:ring-[#39FF14] transition-colors resize-none"
                      placeholder="Tu mensaje..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-lg bg-[#39FF14]/20 hover:bg-[#39FF14]/30 border border-[#39FF14] text-[#39FF14] font-semibold transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed mt-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Enviar Mensaje</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Información de Contacto y Mapa */}
            <div className="space-y-8 scroll-reveal fade-left">
              {/* Tarjetas de Información */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-6 border border-[#39FF14]/20">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Teléfono
                  </h3>
                  <p className="text-forest-mist">+54 11 1234-5678</p>
                </div>
                <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-6 border border-[#39FF14]/20">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Email
                  </h3>
                  <p className="text-forest-mist">info@willpowerfit.com</p>
                </div>
                <div className="backdrop-blur-sm bg-dark-blue/30 rounded-xl p-6 border border-[#39FF14]/20 md:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-[#39FF14]/10 flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-[#39FF14]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Ubicación
                  </h3>
                  <p className="text-forest-mist">Av. Corrientes 1234, CABA</p>
                </div>
              </div>

              {/* Mapa */}
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
    </div>
  );
}
