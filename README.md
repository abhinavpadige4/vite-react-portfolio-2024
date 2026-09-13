# Vite React Portfolio

A modern, responsive personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Dark/Light Mode** - Automatic detection with manual toggle and persistence
- 📱 **Fully Responsive** - Looks great on all devices from mobile to desktop
- ✨ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- 📬 **Contact Form** - Integrated with EmailJS for seamless communication
- 🚀 **Optimized Performance** - Built with Vite for lightning-fast development and production builds
- 🔧 **TypeScript Support** - Strong typing for better developer experience

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Form Handling**: React Hook Form (simulated)
- **Language**: TypeScript

## Project Structure

```
src/
├── components/
│   ├── layout/           # Header and Footer components
│   └── sections/         # Main page sections (Hero, About, Skills, etc.)
├── hooks/                # Custom React hooks
├── utils/                # Constants and utility functions
└── App.tsx               # Main application component
```

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/abhinavpadige4/vite-react-portfolio-2024.git
   cd vite-react-portfolio-2024
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables** (for EmailJS)
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_USER_ID=your_emailjs_user_id
   VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run serve
   ```

## Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Import repository in Vercel
3. Configure build settings:
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Add environment variables for EmailJS
5. Deploy!

## Customization

- **Personal Information**: Update the content in each section component
- **Skills Data**: Modify `src/utils/constants.ts` to update your skills and proficiency levels
- **Projects**: Add your own projects to the `projectData` array in constants
- **Experience**: Update your work history in `experienceData`
- **Theme Colors**: Adjust the color scheme in `tailwind.config.cjs`

## License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ using Vite, React, and Tailwind CSS