import { defineConfig, normalizePath, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import requireTransform from 'vite-plugin-require-transform'; // 支持require的写法
import viteCompression from 'vite-plugin-compression'; // gzip压缩
import viteImagemin from 'vite-plugin-imagemin'; // 图片压缩
import legacy from '@vitejs/plugin-legacy'; // profill

// const variablePath = normalizePath(path.resolve('src/assets/styles/variable.less'));

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
  return defineConfig({
    base: './',
    plugins: [
      react(),

      requireTransform({ fileRegex: /.ts$|.tsx$/ }),

      // viteCompression({
      //   verbose: true,
      //   disable: false,
      //   // filter:()=>{}, // 那些资源不压缩
      //   threshold: 1024 * 50, // 体积大于 threshold 才会被压缩,单位 b
      //   deleteOriginFile: false, // 压缩后是否删除源文件
      //   algorithm: 'gzip', // 压缩算法,可选 [ 'gzip' , 'brotliCompress' ,'deflate' , 'deflateRaw']
      //   ext: '.gz' // 生成的压缩包后缀
      // }),

      viteImagemin({
        gifsicle: {
          optimizationLevel: 7,
          interlaced: false
        },
        optipng: {
          optimizationLevel: 7
        },
        mozjpeg: {
          quality: 20
        },
        pngquant: {
          quality: [0.8, 0.9],
          speed: 4
        },
        svgo: {
          plugins: [
            {
              name: 'removeViewBox'
            },
            {
              name: 'removeEmptyAttrs',
              active: false
            }
          ]
        }
      }),
      // 加了这个背景图就无法支持，有点奇怪，先注释
      // legacy({
      //   targets: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%']
      // })
      legacy({
        targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
      })
    ],
    // 定义环境变量
    define: {
      'process.env': loadEnv(mode, process.cwd())
    },
    resolve: {
      // 别名配置
      alias: {
        '@': path.join(__dirname, 'src'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@http': path.join(__dirname, 'src/http'),
        '@components': path.join(__dirname, 'src/components'),
        '@pages': path.join(__dirname, 'src/pages')
      },
      extensions: ['.js', 'ts', '.mjs']
    },
    server: {
      proxy: {
        '/api': {
          target: 'https://gateway-test.myscrm.cn/bigdata-api-server', // target host
          changeOrigin: true, // needed for virtual hosted sites
          rewrite: (path) => path.replace(/^\/api/, '/')
        }
      },

      host: '0.0.0.0',
      port: 8080,
      open: true
    },
    // css 相关的配置
    css: {
      preprocessorOptions: {
        // scss: {
        //   // additionalData 的内容会在每个 scss 文件的开头自动注入
        //   additionalData: `@import "${variablePath}";`,
        // },
        // less: {
        //   modifyVars: {
        //     hack: `true; @import (reference) "${variablePath}";`
        //   },
        //   javascriptEnabled: true
        // }
      }
      // postcss: {
      // plugins: [
      //   // 前缀追加
      //   require('autoprefixer')({
      //     overrideBrowserslist: ['Android 4.1', 'iOS 7.1', 'Chrome > 31', 'ff > 31', 'ie >= 8', '> 1%'],
      //     grid: true
      //   }),
      //   require('postcss-flexbugs-fixes')
      // ]
      // }
    },
    build: {
      minify: 'terser',
      //指定输出路径
      outDir: 'dist',
      //生成静态资源的存放路径
      assetsDir: 'assets',
      chunkSizeWarningLimit: 1000,
      //构建后是否生成 source map 文件
      sourcemap: false,
      //启用/禁用 CSS 代码拆分
      cssCodeSplit: true,
      //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
      emptyOutDir: true,
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          // assetFileNames: 'assets/static/[name]-[hash].[ext]',
          manualChunks(id: any) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString();
            }
          }
        }
      },
      terserOptions: {
        compress: {
          //生产环境时移除console
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  });
};
