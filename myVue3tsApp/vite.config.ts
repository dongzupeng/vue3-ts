   import { defineConfig } from 'vite';
   import vue from '@vitejs/plugin-vue';
   // 实现 @ 等于./src--绝对路径
   import path, { resolve } from 'path';
   // 以下三项为配置 Element Plus 按需自动引入
   import autoImport from 'unplugin-auto-import/vite';
   import components from 'unplugin-vue-components/vite';
   import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
   // svg plugin
   import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

   export default defineConfig({
     plugins: [
      vue(),
       // 以下两项为配置 Element Plus 按需自动引入
       autoImport({
         resolvers: (
           // element-plus 主题色配置相关--下面这句 importStyle 一定要写，不要写个空对象在这儿，否则就会不生效
           ElementPlusResolver({
             // 自动引入修改主题色添加这一行，使用预处理样式，不添加将会导致使用 elmessage，elnotification 等组件时默认的主题色会覆盖自定义的主题色
             importStyle: 'sass'
           })
         )
       }),
       components({
         resolvers: (
           // element-plus 主题色配置相关--下面这句 importStyle 一定要写，不要写个空对象在这儿，否则就会不生效
           ElementPlusResolver({
             // 自动引入修改主题色添加这一行，使用预处理样式
             importStyle: 'sass'
           })
         )
       }),
      //  修改 svg 相关配置
       createSvgIconsPlugin({
         // 指定需要缓存的图标文件夹
         iconDirs: [path.resolve(__dirname, './src/icon')]
       })
     ],
     resolve: { 
       alias: {
         '@': resolve(__dirname, './src'),
       }
      },
     css: {
       preprocessorOptions: {
         scss: {
           // element-plus 主题色配置相关--引入 index.scss 文件
           additionalData: `@use "@/assets/styles/element/index.scss" as *;`
         }
       }
     },
     // 服务端渲染
     server: {
       // 端口号
       port: 8848,
       host: '0.0.0.0',
       // 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
       proxy: {
         '/api': {
           target: 'http://192.168.3.4:8080',
           changeOrigin: true,
           rewrite: (path) => path.replace(/^\/api/, '')
         }
       }
     }
   });