// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// Static site on Vercel via @astrojs/vercel (prerendered HTML/CSS/assets).
// https://docs.astro.build/en/guides/integrations-guide/vercel/
export default defineConfig({
	output: 'static',
	adapter: vercel(),
	site: 'https://bobs-business-bots.vercel.app',
	compressHTML: true,
	build: {
		inlineStylesheets: 'auto',
	},
});
