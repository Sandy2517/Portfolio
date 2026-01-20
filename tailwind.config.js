/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0D1F23',
        midnight: '#132E35',
        slate: '#2D4A53',
        steel: '#69818D',
        mist: '#AFB3B7',
        smoke: '#5A636A',
        neonBlue: '#4CC9F0',
        neonGreen: '#39FFB0',
        neonPurple: '#8B5CF6',
        glass: 'rgba(19, 46, 53, 0.65)',
        line: 'rgba(175, 179, 183, 0.18)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(105, 129, 141, 0.25)',
        neon: '0 0 20px rgba(57, 255, 176, 0.25)',
        pulse: '0 0 35px rgba(76, 201, 240, 0.35)',
      },
      backgroundImage: {
        'radial-grid':
          'radial-gradient(circle at 1px 1px, rgba(175, 179, 183, 0.1) 1px, transparent 0)',
        'hero-glow':
          'radial-gradient(circle at top, rgba(105, 129, 141, 0.35), transparent 55%)',
        'accent-glow':
          'radial-gradient(circle at 20% 20%, rgba(76, 201, 240, 0.35), transparent 45%), radial-gradient(circle at 80% 10%, rgba(139, 92, 246, 0.25), transparent 50%)',
      },
    },
  },
  plugins: [],
}

