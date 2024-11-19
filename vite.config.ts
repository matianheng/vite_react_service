import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import  path  from "path"; // 引入方法
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()
   
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src')
    },
  },
  server: {
    port:2023,  //端口号
    host:true,  //可以设置固定的值或者是布尔值, 设置后,才会有NetWork
    open:true,  //运行自动打开浏览器
    // 配置反向代理，解决跨域
    proxy: {
 
      '/middle_platform': {
        target: 'http://mpl.qa.sgmlink.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/middle_platform/, '')
      }
    },
  },
})
