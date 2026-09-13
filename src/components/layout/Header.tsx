import { useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { Link } from 'react-scroll'

const Header = ({ toggleDarkMode, isDarkMode }: { toggleDarkMode: () => void; isDarkMode: boolean }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b border-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link to="hero" className="text-xl font-bold text-foreground hover:text-accent transition-colors">
              Portfolio
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {sections.map(section => (
              <Link
                key={section.id}
                to={section.id}
                className={`text-muted hover:text-foreground transition-colors duration-200 ${
                  section.id === 'hero' ? 'text-foreground' : ''
                }`}
                offset={-80}
                smooth
                duration={500}
              >
                {section.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded hover:bg-muted/20"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (
                <FiMoon className="h-5 w-5 text-muted hover:text-foreground transition-colors" />
              ) : (
                <FiSun className="h-5 w-5 text-muted hover:text-foreground transition-colors" />
              )}
            </button>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded hover:bg-muted/20"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <FiSun className="h-5 w-5 text-yellow-400 hover:text-yellow-300 transition-colors" />
              ) : (
                <FiMoon className="h-5 w-5 text-gray-400 hover:text-gray-300 transition-colors" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sections.map(section => (
                <Link
                  key={section.id}
                  to={section.id}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted hover:bg-muted/10 hover:text-foreground"
                  offset={-80}
                  smooth
                  duration={500}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header