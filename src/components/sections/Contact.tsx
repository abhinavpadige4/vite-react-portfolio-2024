import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate EmailJS submission
    setTimeout(() => {
      // In a real app, you would use EmailJS here
      setSubmitStatus({ 
        type: 'success', 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      })
      setIsSubmitting(false)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitStatus && (
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className={`px-4 py-3 rounded-lg text-center mb-8 ${
              submitStatus.type === 'success' 
                ? 'bg-accent/20 text-accent' 
                : 'bg-red-500/20 text-red-500'
            }`}
          >
            {submitStatus.message}
          </motion.div>
        )}
        
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-foreground text-center mb-12"
        >
          Get In Touch
        </motion.h2>
        
        <motion.form
          onSubmit={handleSubmit}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-3">
            <label htmlFor="name" className="block text-sm font-medium text-muted mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="email" className="block text-sm font-medium text-muted mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
              placeholder="Enter your email address"
            />
          </div>
          
          <div className="space-y-3">
            <label htmlFor="message" className="block text-sm font-medium text-muted mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              required
              className="w-full px-4 py-3 bg-muted/20 border border-muted/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 text-foreground placeholder-muted/50"
              placeholder="Enter your message"
            />
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors disabled:bg-muted/50 disabled:cursor-not-allowed ${
              isSubmitting ? 'animate-pulse' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </motion.form>
        
        <div className="text-center text-muted mt-8">
          <p>Or reach me directly at:</p>
          <a href="mailto:abhinav@example.com" className="text-accent hover:text-accent/80 transition-colors">
            abhinav@example.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact