/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black88: "#1f1f1f",
        black80: "#333333",
        green: "#00c896",
      },
      animation: {
        "bounce-fast": "bounce 0.8s infinite", // 3s is the duration you can change it to what you need
      },
    },
  },
  plugins: [],
};
