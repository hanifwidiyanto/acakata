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
        'gameplay': "url('/assets/img/bg-gameplay.png')",
        'profildev': "url('/assets/img/bg-profildev.png')",
        'playbtn': "url('/assets/img/bg-playbtn.png')",
        'level': "url('/assets/img/bg-level.png')",
        'info': "url('/assets/img/bg-leaderboard.png')",
        'container-login': "url('/assets/img/container-login.png')",
        'container-daftar': "url('/assets/img/container-daftar.png')",
        'container-timevisit': "url('/assets/img/container-timevisit.png')",
        'container-level': "url('/assets/img/container-level.png')",
        'container-listlevel': "url('/assets/img/container-listlevel.png')",
        'container-gameplay': "url('/assets/img/container-gameplay.png')",
        'container-leaderboard': "url('/assets/img/container-leaderboard.png')",
        'container-top-leaderboard': "url('/assets/img/container-top-leaderboard.png')",
        'container-bottom-leaderboard': "url('/assets/img/container-bottom-leaderboard.png')",
        'container-profile-picture': "url('/assets/img/container-bottom-leaderboard.png')",
        'btn-login': "url('/assets/img/btn-login.png')",
        'btn-nologin': "url('/assets/img/btn-nologin.png')",
        'btn-play': "url('/assets/img/btn-play.png')",
        'btn-footer': "url('/assets/img/btn-footer.png')",
        'btn-level': "url('/assets/img/btn-level.png')",
        'btn-lock': "url('/assets/img/btn-lock.png')",
        'btn-left': "url('/assets/img/btn-left.png')",
        'btn-right': "url('/assets/img/btn-right.png')",
        'btn-done': "url('/assets/img/btn-done.png')",
        'errorsign': "url('/assets/img/bg-error.png')",
        'effect-finish-top': "url('/assets/img/effect-finish-top.png')",
        'effect-finish-bottom': "url('/assets/img/effect-finish-bottom.png')",
        'effect-cfinish-bottom': "url('/assets/img/effect-cfinish-bottom.png')",
        'effect-cfinish-top': "url('/assets/img/effect-cfinish-top.png')",
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
        'bggameplay': '#DAF9FE',
        'kuning': '#FDBE3D',
        'biru': '#3771FF',
        'ping': '#EB6B8E'
        
      },
    },
    
  },
  plugins: [],
}