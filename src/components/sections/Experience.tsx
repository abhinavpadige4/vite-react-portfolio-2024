import { motion } from 'framer-motion'
import { experienceData } from '../../utils/constants'

const Experience = () => {
  return (
    <section id="experience" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-foreground text-center mb-12"
        >
          Experience
        </motion.h2>
        
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute inset-0 w-0.5 bg-accent/20"></div>
          
          {/* Timeline Items */}
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative px-4 py-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 -ml-2.5 w-5 h-5 rounded-full bg-accent border-2 border-background"></div>
              
              <div className="max-w-lg">
                <div className="flex justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.role}</h3>
                  <span className="text-sm text-muted">{exp.date}</span>
                </div>
                
                <h4 className="text-muted font-medium mb-2">{exp.company}</h4>
                
                <p className="text-muted leading-relaxed">{exp.description}</p>
                
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-0.5 bg-muted/20 text-muted text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience