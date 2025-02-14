'use client';

import './globals.css';
import { useEffect } from 'react';
import { Rajdhani } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Función para manejar las animaciones de scroll
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };

    // Ejecutar inmediatamente para elementos visibles en la carga inicial
    setTimeout(handleScroll, 100); // Pequeño delay para asegurar que el DOM está listo

    // Agregar el event listener para el scroll
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="es">
      <body className={rajdhani.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}