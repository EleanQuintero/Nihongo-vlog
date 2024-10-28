import typography from '@tailwindcss/typography'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			height: {
				'h-custom': '660px', // añade una altura personalizada
			  },
			screens: { 
				'xs': '350px'
			}
		}
	},
	plugins: [typography],
}
