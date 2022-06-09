module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},

    },
    daisyui: {
        themes: [{
            mytheme: {
                primary: "#0000",
                secondary: "#ffffff",
                accent: "#37cdbe",
                neutral: "#3d4451",
                "base-100": "#ffffff",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}