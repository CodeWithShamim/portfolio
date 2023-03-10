module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},

    },
    daisyui: {
        themes: [{
            mytheme: {
                primary: "#10121B",
                secondary: "#ffffff",
                accent: "#FF33FF",
                neutral: "#10121B",
                "base-100": "#10121B",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}