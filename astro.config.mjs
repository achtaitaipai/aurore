import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
	site: 'https://achtaitaipai.github.io',
	base: '/aurore/',
	integrations: [
		tailwind({
			applyBaseStyles: false
		}),
		svelte()
	]
})
