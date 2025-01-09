/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
				colors: {
						'morado-primario': {
								DEFAULT: '#2e234d',
								100: '#7d6b9e',
								200: '#6f5e8e',
								300: '#62517e',
								400: '#54446e',
								500: '#47375e',
								600: '#3a2a4e',
								700: '#2c1d3e',
								800: '#1f103e',
								900: '#11032e',
						},
						'gris-oscuro': {
								DEFAULT: '#202020',
								100: '#5a5a5a',
								200: '#4d4d4d',
								300: '#404040',
								400: '#333333',
								500: '#262626',
								600: '#191919',
								700: '#0c0c0c',
						},
				},
				animation: {
						scroll: 'scroll 10s linear infinite',
				},
				keyframes: {
						scroll: {
								from: { transform: 'translateX(0)' },
								to: { transform: 'translateX(-100%)' },
						},
				},
		},
},
	plugins: [],
}
