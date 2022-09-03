import path from 'path';
import { UserConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import vuePlugin from '@vitejs/plugin-vue';
// import { visualizer } from 'rollup-plugin-visualizer';

export default {
  port: 300,
  plugins: [
    // visualizer({ open: false, template: 'treemap' }),
    vuePlugin(
      {
        template: {
          ssr: true,
          compilerOptions: {}
        }
      }
    ),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.ts', 'src/**/*.tsx']
    })
  ],
  optimizeDeps: {
    exclude: ['/node_modules/vue-meta/ssr'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
} as UserConfig;
