import { sidebar } from "vuepress-theme-hope";

export const arSidebar = sidebar({
	"/ar/": [
		"",
		{
			text: "عرض توضيحي",
			icon: "laptop-code",
			prefix: "demo/",
			link: "demo/",
			children: "structure",
		},
		{
			text: "المقالات",
			icon: "book",
			prefix: "مقالات/",
			children: "structure",
		},
		"intro",
	],
});
