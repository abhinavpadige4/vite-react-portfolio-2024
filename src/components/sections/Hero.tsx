import { motion } from 'framer-motion'
import { FiSun, FiMoon } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="hero" className="pt-20 pb-16 min-h-[calc(100vh-64px)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.h1
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Hi, I'm Abhinav
          </motion.h1>
          
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted max-w-2xl"
          >
            Passionate Full-Stack Developer building innovative web applications with React, Node.js, and modern technologies.
          </motion.p>
          
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex space-x-4"
          >
            <button className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors transform hover:scale-105">
              Get in Touch
            </button>
            <button 
              className="px-6 py-3 border border-muted/50 text-muted hover:text-foreground hover:border-transparent transition-all duration-200"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero