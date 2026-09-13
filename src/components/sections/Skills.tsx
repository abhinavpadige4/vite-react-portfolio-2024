import { motion } from 'framer-motion'
import { skillData } from '../../utils/constants'

const Skills = () => {
  return (
    <section id="skills" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-foreground text-center mb-12"
        >
          My Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {['Frontend', 'Backend', 'Tools'].map((category, index) => (
            <motion.div
              key={category}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-foreground">{category}</h3>
              
              <div className="space-y-4">
                {skillData[category.toLowerCase() as keyof typeof skillData].map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted">{skill.name}</span>
                      <span className="text-foreground font-medium">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted/20 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-full bg-accent transition-width duration-1000 ease-out`}
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills