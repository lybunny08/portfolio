// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
});
