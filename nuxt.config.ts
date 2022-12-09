// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ["@/assets/css/main.scss"],
	app: {
		head: {
			link: [
				{ rel: "icon", href: "./flave-static.jpg" }
			]
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
