// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.velvetclean.pl',
  // one URL per page: /polityka-prywatnosci, never /polityka-prywatnosci/
  trailingSlash: 'never',
  build: { format: 'file' },
});
