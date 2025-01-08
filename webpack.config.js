module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,               // Files to apply this loader to (JavaScript files)
          exclude: /node_modules/,     // Excludes node_modules from transformation
          use: {
            loader: 'babel-loader',    // Loader to apply
            options: {                 // Loader options
              presets: ['@babel/preset-react']
            }
          }
        }
      ]
    }
  };
  