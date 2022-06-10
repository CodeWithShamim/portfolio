module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},

    },
    daisyui: {
        themes: [{
            mytheme: {
                primary: "#000000",
                secondary: "#ffffff",
                accent: "#FF651C",
                neutral: "#3d4451",
                "base-100": "#000000",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}