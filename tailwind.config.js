/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	daisyui: {
		themes: [
			{
				fasco: {
					primary: "#000000",
					"primary-content": "#ffffff",
					secondary: "#8a8a8a",
					accent: "#fafafa",
					neutral: "#f3f3f3",
					"base-100": "#ffffff",
					"base-content": "#000000",
				},
			},
		],
	},
	plugins: [require("daisyui")],
	theme: {
		container: { center: true, screens: { "2xl": "1440px" } },
		extend: { screens: { "2xl": "1440px" } },
	},
};
