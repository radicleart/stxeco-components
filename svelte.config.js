import sveltePreprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

export default {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  kit: {
    // other SvelteKit config options
  },
};