module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    globalObject: 'this',
    library: 'Morsey',
    libraryExport: 'default',
    libraryTarget: 'umd',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
