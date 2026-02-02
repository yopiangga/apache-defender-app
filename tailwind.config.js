/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#C9F31D",
        secondary: "",
        text: "#FFFFFFA6",
        accent: "#FFFFFF1A",
        dark: {
          100: "#1F1F1F",
          200: "#131313",
          300: "#070707",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
    },
  },
  plugins: [],
};
