/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Ensure Tailwind scans your files
    theme: {
        extend: {
            colors: {
                lighter: "#fce6cf",
                darker: "#f0703a",
                darkest: "#cc6235",
            },
            fontFamily: {
                sora: ["Sora", "sans-serif"],
            },
            screens: {
                custom: "1100px",
            },
            keyframes: {
                glow: {
                    "0%, 100%": { boxShadow: "0 0 8px rgba(240, 112, 58, 0.8)" },
                    "50%": { boxShadow: "0 0 16px rgba(240, 112, 58, 1)" },
                },
            },
            animation: {
                glow: "glow 1.5s infinite",
            },
        },
    },
    plugins: [],
};
