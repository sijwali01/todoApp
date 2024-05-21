import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/TodoApp' // Replace 'your-repo-name' with the actual name of your GitHub repository
});