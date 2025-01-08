module.exports = {
    presets: [
        "@babel/preset-env",
        ["@babel/preset-react", { runtime: "classic" }]
    ],
    plugins: [
        "@babel/plugin-syntax-jsx",
        "@babel/plugin-proposal-private-methods"
    ]
};
