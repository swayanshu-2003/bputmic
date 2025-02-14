/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-red": "#f82249",
        "primary-blue": "#060c22fa",
      },
    },
  },
  plugins: [],
};
