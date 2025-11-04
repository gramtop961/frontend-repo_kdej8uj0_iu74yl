import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] sm:h-screen pt-28 sm:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* overlay gradient - don't block interaction */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      <div className="relative h-full mx-auto max-w-6xl px-4 sm:px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
            I’m Vishwajeet Kumar
          </h1>
          <p className="mt-4 text-lg sm:text-2xl text-zinc-300/90">
            A Software Developer passionate about scalable systems, AI, and real-time apps.
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl">
            I build reliable, high-performance software — from intelligent backend systems to interactive user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
