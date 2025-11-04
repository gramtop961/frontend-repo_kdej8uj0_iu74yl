import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Sections from './components/Sections';
import Footer from './components/Footer';

export default function App() {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      setSpotlight({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', update);
    return () => window.removeEventListener('mousemove', update);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Global cursor spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-40"
        style={{
          background: `radial-gradient(550px at ${spotlight.x}px ${spotlight.y}px, rgba(124,58,237,0.22), transparent 60%)`,
        }}
      />

      {/* Subtle ambient gradients */}
      <div className="pointer-events-none fixed inset-0" aria-hidden>
        <div className="absolute inset-0 opacity-80 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.12),transparent_45%),radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.10),transparent_45%),radial-gradient(circle_at_50%_85%,rgba(168,85,247,0.10),transparent_45%)]" />
      </div>

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Sections />
        </div>
      </main>

      <Footer />
    </div>
  );
}
