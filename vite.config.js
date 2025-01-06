import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsx: {
        factory: 'React.createElement',
        fragment: 'React.Fragment',
      },
      esbuild: {
        jsc: {
          transform: {
            react: {
              throwIfNamespace: false, // Disable the namespace error in JSX
            },
          },
        },
      },
    }),
  ],
})
