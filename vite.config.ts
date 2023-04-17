import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// const renderChunks = (deps: Record<string, string>) => {
//   const chunks = {};
//   Object.keys(deps).forEach((key) => {
//     if (['react', 'react-router-dom', 'react-dom', 'pretendard'].includes(key)) {
//       return;
//     }

//     if (key === 'firebase') {
//       chunks[key + '/app'] = [key + '/app'];
//       chunks[key + '/storage'] = [key + '/storage'];
//     } else {
//       chunks[key] = [key];
//     }
//   });

//   return chunks;
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  // build: {
  //   sourcemap: false,
  //   rollupOptions: {
  //     output: {
  //       manualChunks: {
  //         vendor: ['react', 'react-router-dom', 'react-dom'],
  //         ...renderChunks(dependencies),
  //       },
  //     },
  //   },
  // },
});
