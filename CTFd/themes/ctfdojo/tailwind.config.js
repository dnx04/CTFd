/** @type {import('tailwindcss').Config} */
const daisyui = require("daisyui");
const typography = require("@tailwindcss/typography");

module.exports = {
    content: [
        "./templates/**/*.html",
        "./assets/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        },
    },
    plugins: [typography, daisyui],
    daisyui: {
        themes: ["light", "dark"],
    },
}