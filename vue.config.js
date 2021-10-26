module.exports = {
    outputDir: process.env.outputDir,
    assetsDir: 'static',
    indexPath: 'index.html',
    publicPath: './',
    lintOnSave: false,
    productionSourceMap:false,
    
  
  
    devServer: {
      port: 8081,
      https: false,
      open:true,
      hotOnly: false,
      //本地请求发生跨域时，使用反向代理解决跨域，取消注释以下代码
      // proxy: {
      //   '/api': {
      //     target: '',
      //     changeOrigin: true,
      //     pathRewrite: {
      //       "^/api": "/"
      //     }
      //   }
      // }
    },
  
  
  }