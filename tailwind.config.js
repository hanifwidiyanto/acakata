/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login': "url('/assets/img/bg-login.png')",
        'container-login': "url('/assets/img/container-login.png')",
        'container-daftar': "url('/assets/img/container-daftar.png')",
        'btn-login': "url('/assets/img/btn-login.png')",
        'btn-nologin': "url('/assets/img/btn-nologin.png')",
        'errorsign': "url('/assets/img/bg-error.png')",
      },
      fontFamily: {
        'cubano': ['cubano', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'bingu': '#1E2760',
        'bgform': '#D9D9D9',
      },
    },
    
  },
  plugins: [],
}