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
				display: ['DIN Pro', ...defaultTheme.fontFamily.sans],
				sans: ['DIN Pro', ...defaultTheme.fontFamily.sans]
			}
		},
		fontSize: {
			xs: 'clamp(0.7813rem, 0.7747rem + 0.0326vw, 0.8rem)',
			sm: 'clamp(0.9375rem, 0.9158rem + 0.1087vw, 1rem)',
			base: 'clamp(1.125rem, 1.0815rem + 0.2174vw, 1.25rem)',
			lg: 'clamp(1.35rem, 1.2761rem + 0.3696vw, 1.5625rem)',
			xl: 'clamp(1.62rem, 1.5041rem + 0.5793vw, 1.9531rem)',
			'2xl': 'clamp(1.9438rem, 1.7707rem + 0.8652vw, 2.4413rem)',
			'3xl': 'clamp(2.3325rem, 2.0823rem + 1.2511vw, 3.0519rem)',
			'4xl': 'clamp(2.7994rem, 2.4461rem + 1.7663vw, 3.815rem)',
			'5xl': 'clamp(3.3594rem, 2.8694rem + 2.45vw, 4.7681rem)',
			'6xl': 'clamp(4.0313rem, 3.3602rem + 3.3554vw, 5.9606rem)',
			'7xl': 'clamp(4.8375rem, 3.9286rem + 4.5446vw, 7.4506rem)',
			'8xl': 'clamp(5.805rem, 4.5848rem + 6.1011vw, 9.3131rem)'
		}
	},
	plugins: []
}
