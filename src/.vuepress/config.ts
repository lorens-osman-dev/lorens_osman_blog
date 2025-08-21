import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "en-US",
			title: "Al Political",
			description: "Everything was impossible until someone did it",
		},
		"/ar/": {
			lang: "ar-SA",
			title: "تَوجِيهاتٌ سِياسِيةَ",
			description: "كل شيئ كان مستحيلاً إلى أن قام به أحد",
		},
	},

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
