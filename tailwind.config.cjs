const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			aspectRatio: {
				gold: '1.618',
				paysage: '1.414',
				portrait: '1 / 1.414'
			},
			gridTemplateColumns: {
				gold: '1fr 1.618fr',
				'portrait-paysage': '1fr 2fr',
				'paysage-portrait': '2fr 1fr',
				'square-paysage': '1fr 1.414fr',
				'paysage-square': '1.414fr 1fr',
				'square-portrait': '1fr 0.707fr',
				'portrait-square': '0.707fr 1fr'
			},
			spacing: {
				header: '6rem',
				withheader: 'calc(100vh - 6rem)'
			},
			minHeight: {
				withheader: 'calc(100vh - 6rem)'
			},
			colors: {
				cream: 'hsl(30, 20%, 92%)',
				night: 'hsl(216, 33%, 16%)'
			},
			fontFamily: {
				sans: ['DIN Pro Cond', ...defaultTheme.fontFamily.sans]
			}
		},
		fontSize: {
			xs: 'clamp(0.3819rem, 0.3651rem + 0.0837vw, 0.43rem)',
			sm: 'clamp(0.6181rem, 0.5914rem + 0.1337vw, 0.695rem)',
			base: 'clamp(1rem, 0.9565rem + 0.2174vw, 1.125rem)',
			lg: 'clamp(1.6181rem, 1.5479rem + 0.3511vw, 1.82rem)',
			xl: 'clamp(2.6181rem, 2.5044rem + 0.5685vw, 2.945rem)',
			'2xl': 'clamp(4.2356rem, 4.0515rem + 0.9207vw, 4.765rem)',
			'3xl': 'clamp(6.8538rem, 6.5559rem + 1.4891vw, 7.71rem)',
			'4xl': 'clamp(11.0887rem, 10.6066rem + 2.4109vw, 12.475rem)',
			'5xl': 'clamp(17.9419rem, 17.1617rem + 3.9011vw, 20.185rem)',
			'6xl': 'clamp(29.03rem, 27.7678rem + 6.3109vw, 32.6588rem)',
			'7xl': 'clamp(46.9706rem, 44.9285rem + 10.2109vw, 52.8419rem)',
			'8xl': 'clamp(75.9988rem, 72.6944rem + 16.5217vw, 85.4988rem)'
		}
	},
	plugins: []
}
