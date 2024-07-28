import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoimport from 'unplugin-auto-import/vite'; // 自动导入 vue 中 hook、reactive 等
import components from 'unplugin-vue-components/vite'; // 自动导入 ui 组件，如 element-plus 等
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'; // 对应组件库引入
// 配置 @ 别名
import { resolve } from "path";


export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        // 自动导入定制化样式进行文件覆盖
        additionalData: `@use "@/assets/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // element 按需导入
    autoimport({
      resolvers: [ElementPlusResolver()], 
      // 安装两行后你会发现在组件中不用再导入 ref，reactive 等
      imports: ['vue', 'vue-router'],
      dts: "src/auto-import.d.ts",
    }),
    components({
      resolvers: [
        // 配置 element-plus 采用 sass 样式配置系统
        ElementPlusResolver({ importStyle: "sass" })
      ],
    }),
  ],
  // 解析配置
  resolve: {
    // 路径别名
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  // 配置代理
  server: {
    port: 8848,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://192.168.3.4:8080', // 接口域名
        changeOrigin: true,  // 是否跨域
        rewrite: (path) => path.replace(/^\/api/, '')   // 重写路径
      }
    },
  },
});