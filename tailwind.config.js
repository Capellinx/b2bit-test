/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue_b2bit: "#02274F",
      yellow_b2bit: "#FDCF00",
      white_light: "#FAFAFA",
      white_input: "#F1F1F1",
      white_auth: "#F1F5F9",
      white: "#FFFFFF",
      black: "#262626",
    },
    extend: {
      fontFamily: {
        "nunito": ["Nunito", "sans-serif"]
      },
    },
  },
  plugins: [],
};
