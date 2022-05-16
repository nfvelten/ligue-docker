import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

//vitejs.dev/config
export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [react(), tsconfigPaths()],
});
