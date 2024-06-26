import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	site: 'https://main--cerulean-kitsune-e3b8f7.netlify.app/',
	output: 'server',
	integrations: [solidJs(), react(), mdx()],
	adapter: netlify(),
});
