/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-orange': '510px 5px 10px orange',
      },
      colors: {
        orange: "#fd9512",
        white: "#ffffff",
        red: "#FF0408",
        customs: "#a3a2a0",
        darkorange:"#ff7b00",
        darkblue:"#3474bc",
        slash:"#75757d",
        light:"#9cd6ea",

      },
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        spacemono: ["Space Mono", "Arial", "Serif"],
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      animation: {
        bounce: "bounce 1s infinite",
      },
      animationDelay: {
        100: "0.1s",
        200: "0.2s",
        300: "0.3s",
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
