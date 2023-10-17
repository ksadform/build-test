const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: './index.js',
  mode: "production",
    optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    },
    output: {
    filename: 'index.js',
    library: {
      type: 'umd',
      name: 'lib-2',
      },
    
    // prevent error: `Uncaught ReferenceError: self is not define`
    globalObject: 'this',
  },
};