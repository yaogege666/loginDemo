module.exports = {
    devServer: {
        proxy: 'http://localhost:8081'
    },
    pages: {
        index: {
            // page 的入口
            entry: 'src/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'index.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '系统首页',

            chunks: ['chunk-vendors', 'chunk-common', 'index']
        },
        login: {
            // page 的入口
            entry: 'src/page/main.js',
            // 模板来源
            template: 'public/index.html',
            // 在 dist/index.html 的输出
            filename: 'ygg.html',
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: '登录系统',

            chunks: ['chunk-vendors', 'chunk-common', 'login']
        },
    },
    publicPath: './'
};
