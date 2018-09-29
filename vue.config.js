module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(png|jpg|gif|obj|mtl|gltf)$/,
          use: [
            {
              loader: "file-loader",
              options: { name: "[path][name].[ext]" }
            }
          ]
        }
      ]
    }
  }
};
