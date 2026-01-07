import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
	"/",
	// "/demo/",
	{
		text: "Posts",
		icon: "pen-to-square",
		prefix: "/posts/",
		children: [
			{
				text: "directives",
				icon: "pen-to-square",
				prefix: "directives/",
				children: [
					{
						text: "The First Directive - The Strong Support",
						icon: "mdi:dot",
						link: "1",
					},
					{
						text: "The Second Directive - The Inevitability of Conflict",
						icon: "mdi:dot",
						link: "2",
					},
					{
						text: "The Third Directive - Trump's Goats and the Illusion of Law",
						icon: "mdi:dot",
						link: "3",
					},
				],
			},
			{ text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
			"tarbiya",
			"strawberry",
		],
	},
]);
