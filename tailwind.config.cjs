module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: false, // or 'media' or 'class' => use depending on dark mode approach
	theme: {
		
		extend: {
			// Extend colors and themes here
			// If no dark or light theme is available, you can add colors directly to extend
			colors:{
				'color-navbar':{
					base:'#EEF3F8'
				},
				'color-white':{
					base:'#FFFFFF'
				},
				'color-background':{
					base:'#F3F2EF'
				},
				'color-serachbox':{
					base:'#E9EEF3'
				},
				'color-borders':{
					'base':'#A3A3A3'
				},
				'color-hr':{
					'base':'#E8E7E6'
				},
				'color-linkedin':{
					'base':'#0A66C2'
				},
				'color-grey':{
					'base':'#666666'
				}

			},
			

			dark: {
				// Dark Theme colors
			},
			light: {
				// light theme colors
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
