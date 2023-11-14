// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	srcDir: "src/",
	devtools: { enabled: true },
	css: ["~/styles/main.css", "normalize.css"],
	modules: [
		"@nuxt/content",
		"@unocss/nuxt"
	],
	content: {
		documentDriven: true
	}
})
