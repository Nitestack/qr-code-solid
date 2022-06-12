/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                "custom-white": "hsl(0, 0%, 100%)",
                "custom-light-gray": "hsl(212, 45%, 89%)",
                "custom-grayish-blue": "hsl(220, 15%, 55%)",
                "custom-dark-blue": "hsl(218, 44%, 22%)"
            }
        }
    },
    plugins: []
};
