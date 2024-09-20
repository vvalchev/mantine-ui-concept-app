import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'happy-dom',
    // setupFiles: './src/test/setup.ts',
  },
  resolve: {
    alias: {
      '@styles': path.resolve('./src/styles'),
      '@features': path.resolve('./src/features'),
      '@store': path.resolve('./src/store/index.ts'),
      '@utils': path.resolve('./src/utils.tsx'),
    },
  },
});
