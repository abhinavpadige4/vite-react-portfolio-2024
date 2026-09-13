import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center"
          >
            <div className="w-48 h-48 bg-gradient-to-br from-accent/20 to-accent/10 rounded-xl overflow-hidden border border-accent/20">
              {/* Placeholder for profile image */}
              <div className="flex h-full w-full items-center justify-center text-accent text-2xl">
                <span>👨‍💻</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Me
            </h2>
            
            <p className="text-muted leading-relaxed mb-6">
              I'm a passionate Full-Stack Developer with expertise in building scalable web applications using modern technologies. My journey in software development began with a fascination for creating intuitive user experiences, and I've since honed my skills in frontend and backend development.
            </p>
            
            <p className="text-muted leading-relaxed mb-8">
              I specialize in crafting responsive, accessible, and performant applications that solve real-world problems. When I'm not coding, you can find me contributing to open-source projects, learning new technologies, or mentoring aspiring developers.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">JavaScript</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">TypeScript</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">React</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">Node.js</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">Tailwind CSS</span>
              <span className="px-3 py-1 bg-accent/20 text-accent rounded text-sm font-medium">MongoDB</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About