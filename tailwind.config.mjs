/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
				roboto: ['Roboto', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']
			},
			colors: {
				'carnation': {
					'50': '#fff1f1',
					'100': '#ffe1e1',
					'200': '#ffc7c7',
					'300': '#ffa1a0',
					'400': '#ff5c5b',
					'500': '#f83c3b',
					'600': '#e51e1d',
					'700': '#c11514',
					'800': '#a01514',
					'900': '#841918',
					'950': '#480707',
				},
				'wild-sand': {
					'50': '#f5f5f5',
					'100': '#efefef',
					'200': '#dcdcdc',
					'300': '#bdbdbd',
					'400': '#989898',
					'500': '#7c7c7c',
					'600': '#656565',
					'700': '#525252',
					'800': '#464646',
					'900': '#3d3d3d',
					'950': '#292929',
				},
			},
			backgroundImage: {
				'triangule': 'url("./svg/triangle.svg")',
				'responsive-phone-preview': 'url("./images/phone-preview-responsive.png")',
				'phone-preview': 'url("./images/phone-preview.png")'
			}
		},
		screens: {
			'2xl': { 'max': '1535px' },
			// => @media (max-width: 1535px) { ... }

			'xl': { 'max': '1279px' },
			// => @media (max-width: 1279px) { ... }

			'lg': { 'max': '1023px' },
			// => @media (max-width: 1023px) { ... }

			'md': { 'max': '767px' },
			// => @media (max-width: 767px) { ... }

			'sm': { 'max': '639px' },
			// => @media (max-width: 639px) { ... }
		}
	},
	plugins: [],
}
