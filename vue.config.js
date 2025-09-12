// test
const path = require("path");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
function resolve(dir) {
  return path.join(__dirname, "./", dir);
}
module.exports = {
  publicPath: "./",
  devServer: {
    historyApiFallback: true,
  },
  chainWebpack: (config) => {
    config.module.rule("svg").exclude.add(resolve("src/assets/icons")).end();

    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/assets/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "myicon-[name]",
      });
  },
  // 配置webpack
  configureWebpack: (config) => {
    // 生产环境配置
    if (process.env.NODE_ENV === "production") {
      // 移除console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

      // 添加包分析插件
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: "disabled", // 不自动打开浏览器
          generateStatsFile: true, // 生成stats.json文件
          statsOptions: {
            source: false,
          },
        })
      );
    }
  },

  // 链式配置
  chainWebpack: (config) => {
    // 生产环境配置
    if (process.env.NODE_ENV === "production") {
      // 代码分割优化
      config.optimization.splitChunks({
        chunks: "all",
        cacheGroups: {
          vendor: {
            name: "chunk-vendors",
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: "initial",
          },
          common: {
            name: "chunk-common",
            minChunks: 2,
            priority: 5,
            chunks: "initial",
            reuseExistingChunk: true,
          },
        },
      });
    }
  },
  // 生产环境source map
  productionSourceMap: false,
};
