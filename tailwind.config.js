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
        'home': "url('/assets/img/bg-home.png')",
        'profildev': "url('/assets/img/bg-profildev.png')",
        'playbtn': "url('/assets/img/bg-playbtn.png')",
        'container-login': "url('/assets/img/container-login.png')",
        'container-daftar': "url('/assets/img/container-daftar.png')",
        'container-timevisit': "url('/assets/img/container-timevisit.png')",
        'container-level': "url('/assets/img/container-level.png')",
        'btn-login': "url('/assets/img/btn-login.png')",
        'btn-nologin': "url('/assets/img/btn-nologin.png')",
        'btn-play': "url('/assets/img/btn-play.png')",
        'btn-footer': "url('/assets/img/btn-footer.png')",
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