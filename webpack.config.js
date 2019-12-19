const path = require('path');

const SRC_DIR = path.join(__dirname, `src`);
const DIST_DIR = path.join(__dirname, `dist`);

module.exports = {
  entry: `${SRC_DIR}/App.tsx`,
  output: {
    filename: 'index.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        include: SRC_DIR,
        test: /\.tsx?/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  }
}