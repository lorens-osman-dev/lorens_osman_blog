import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
	base: "/",

	locales: {
		"/": {
			lang: "en-US",
			title: "Blog fffff Demo",
			description: "A blog demo for vuepress-theme-hope",
		},
		"/ar/": {
			lang: "ar-SA",
			title: "عرض للمدونة",
			description: "عرض لمدونة VuePress-Theme-Hope",
		},
	},

	theme,

	// Enable it with pwa
	// shouldPrefetch: false,
});
