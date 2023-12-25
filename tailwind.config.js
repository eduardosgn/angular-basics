/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      //ajustar os breakpoints da classe container
      container: {
        screens: {
          sm: "640px",
          md: "850px",
          lg: "900px",
          xl: "1200px",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
