/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
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
			}
		},
	},
	plugins: [],
}
