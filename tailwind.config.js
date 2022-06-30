module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},

    },
    daisyui: {
        themes: [{
            mytheme: {
                primary: "#373B40",
                secondary: "#ffffff",
                accent: "#FF33FF",
                neutral: "#3d4451",
                "base-100": "#373B40",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}