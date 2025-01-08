module.exports = {
    presets:[
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/plugin-syntax-jsx",
        "babel-preset-react-app",
        {
            "runtime": "classic"
          }
    ],
    plugins: [
        '@babel/plugin-proposal-private-methods'
      ]
}
