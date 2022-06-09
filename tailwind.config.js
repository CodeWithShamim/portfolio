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
                accent: "#F472B6",
                neutral: "#3d4451",
                "base-100": "#252525",
            },
        }, ],
    },
    plugins: [require("daisyui")],
}