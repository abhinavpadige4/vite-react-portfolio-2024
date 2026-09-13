import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-muted">&copy; {new Date().getFullYear()} Personal Portfolio. All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-muted hover:text-foreground transition-colors">
              <FiGithub className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">
              <FiLinkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-muted hover:text-foreground transition-colors">
              <FiMail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer