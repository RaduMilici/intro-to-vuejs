module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|obj)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  }
};