import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';


// https://vite.dev/config/
export default defineConfig({
  // For GitHub Pages (repository page) set the base to the repository name.
  // Change this if you deploy to a different subpath or want a different default.
  base: '/reparatubanera/',
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        trabajos: 'trabajos.html',
        servicios: 'servicios.html',
        contacto: 'contacto.html',
      },
    },
  },
});
