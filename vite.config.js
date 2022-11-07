import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       additionalData: `@import "${path.resolve(__dirname, 'src/theme.module.less')}";`,
  //       javascriptEnabled: true,
  //     }
  //   },
  // },
})
