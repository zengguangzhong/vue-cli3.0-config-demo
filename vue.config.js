function resolve(dir) {
  return require('path').join(__dirname, dir)
}

const path = require('path')
const webpack = require('webpack')

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [path.resolve(__dirname, './src/styles/variables.less')]
    })
}
module.exports = {
  // 修改Loader选项
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    // 给所有的less文件添加共享的文件
    types.forEach(type =>
      addStyleResource(config.module.rule('less').oneOf(type))
    )
    // 或者
    // 修改它的选项：
    // config.plugin('prefetch').tap(options => {
    //   options[0].fileBlacklist = options[0].fileBlacklist || []
    //   options[0].fileBlacklist.push([/myasyncRoute(.)+?\.js$/])
    //   return options
    // })
  },
  // process.env.BASE_URL
  baseUrl: process.env.NODE_ENV === 'production' ? './' : '/',
  // output.path
  outputDir: process.env.VUE_APP_MODE === 'uat' ? 'uat' : 'dist',
  // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
  indexPath: 'index.html',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: true,
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。  默认''
  assetsDir: 'static',
  // pages: {
  //   index: {
  //     // page 的入口
  //     // entry: {
  //     //   pagea:'src/views/pages/parta/main.js'
  //     // },
  //     entry: 'src/views/pages/parta/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'pagea.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     // title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   },
  //   // 当使用只有入口的字符串格式时，
  //   // 模板会被推导为 `public/subpage.html`
  //   // 并且如果找不到的话，就回退到 `public/index.html`。
  //   // 输出文件名会被推导为 `subpage.html`。
  //   subpage: {
  //     // page 的入口
  //     // entry: {
  //     //   pageb:'src/views/pages/partb/main.js'
  //     // },
  //     entry: 'src/views/pages/partb/main.js',
  //     // 模板来源
  //     template: 'public/index.html',
  //     // 在 dist/index.html 的输出
  //     filename: 'pageb.html',
  //     // 当使用 title 选项时，
  //     // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  //     // title: 'Index Page',
  //     // 在这个页面中包含的块，默认情况下会包含
  //     // 提取出来的通用 chunk 和 vendor chunk。
  //     chunks: ['chunk-vendors', 'chunk-common', 'index']
  //   }
  // },
  productionSourceMap: false,
  devServer: {
    // index: 'page1.html', //默认启动serve 打开page1页面
    open: process.platform === 'darwin',
    // contentBase: path.join(__dirname, "dist/aaa"),
    host: '0.0.0.0',
    port: 8088,
    https: false,
    hotOnly: false,
    disableHostCheck: true
    // proxy: {
    //     '': {
    //       target: '',
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '': ''
    //       }
    //     },
    //     '': {
    //       target: '',
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '': ''
    //       }
    //     }
    // }, // 设置代理
    // before: app => {}
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      //   postcss: {
      //     plugins: [
      //       require('postcss-pxtorem')({
      //         minPixelValue: 2,
      //         rootValue: 75,
      //         replace: true,
      //         // propList: ['*',/*, '!border', '!border-left', '!border-right', '!border-top', '!border-bottom','!font-size'*/]
      //         propList: ['*']
      //       })
      //     ]
      //     // 这里的选项会传递给 postcss-loader
      //   },
      // 给 sass-loader 传递选项
      //   less: {
      //     // 向所有 Sass 样式传入共享的全局变量：
      //     // @/ 是 src/ 的别名
      //     // 所以这里假设你有 `src/variables.scss` 这个文件
      //     data: `@import "@/styles/variables.less";`
      //   }
    },
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // 是否启用dll
  // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
  //   dll: false,

  // 配置webpack
  // 1、 静态配置
  configureWebpack: {
    plugins: [
      // 添加一些全局变量文件，无需每次都手动引入，也无需放在window上
      new webpack.ProvidePlugin({
        // $:'jquery',  //左边是别名，右边是实际需要的依赖
        FJ: require.resolve('./src/lib/utils.js') // 非第三方依赖
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        '@views': resolve('src/views')
      }
    }
  },
  // 2、 动态配置
  //   configureWebpack: config => {
  //     if (process.env.NODE_ENV === 'production') {
  //       // 为生产环境修改配置...
  //     } else {
  //       // 为开发环境修改配置...
  //     }
  //   },
  // vue-loader 配置项
  // https://vue-loader.vuejs.org/en/options.html
  //   vueLoader: {},
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
