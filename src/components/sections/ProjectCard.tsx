import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  github: string
  live: string
}

const ProjectCard = ({ title, description, image, tech, github, live }: ProjectCardProps) => {
  return (
    <motion.div
      whileInView={{ scale: 1, opacity: 1 }}
      initial={{ scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.6, type: "spring" }}
      className="group"
    >
      <div className="bg-background/50 backdrop-blur-sm border border-muted/30 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-w-16 aspect-h-9">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
          
          <p className="text-muted mb-4 line-clamp-3">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((techItem, index) => (
              <span key={index} className="px-2 py-0.5 bg-accent/20 text-accent text-xs rounded font-medium">
                {techItem}
              </span>
            ))}
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex space-x-3">
              <a href={github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                <FaGithub className="h-4 w-4" />
              </a>
              <a href={live} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-foreground transition-colors">
                <FaExternalLinkAlt className="h-4 w-4" />
              </a>
            </div>
            <button 
              className="px-4 py-2 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard