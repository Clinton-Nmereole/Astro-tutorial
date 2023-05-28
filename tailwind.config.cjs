/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
               width: {
                    '100' : '25rem',
                    '104' : '26rem',
                    '112' : '28rem',
               }
          },
	},
	plugins: [],
}
