import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen pt-24 sm:pt-28">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* soft gradient overlay to blend with dark theme */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/80" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
            I’m Vishwajeet Kumar
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-zinc-300">
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
