const path = require('path');

module.exports = {
  entry: './src/app.js',
  mode: 'development',
  output: {
    // need absolute path
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
};
