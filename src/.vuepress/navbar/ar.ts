import { navbar } from "vuepress-theme-hope";

export const arNavbar = navbar([
	"/ar/",
	"/ar/demo/",
	{
		text: "المقالات",
		icon: "pen-to-square",
		prefix: "/ar/مقالات/",
		children: [
			{
				text: "تفاح",
				icon: "pen-to-square",
				prefix: "تفاح/",
				children: [
					{ text: "تفاح 1", icon: "pen-to-square", link: "1" },
					{ text: "تفاح 2", icon: "pen-to-square", link: "2" },
					"3",
					"4",
				],
			},
			{
				text: "موز",
				icon: "pen-to-square",
				prefix: "banana/",
				children: [
					{
						text: "موز 1",
						icon: "pen-to-square",
						link: "1",
					},
					{
						text: "موز 2",
						icon: "pen-to-square",
						link: "2",
					},
					"3",
					"4",
				],
			},
			{ text: "كرز", icon: "pen-to-square", link: "cherry" },
			{ text: "فاكهة التنين", icon: "pen-to-square", link: "dragonfruit" },
			"tomato",
			"strawberry",
		],
	},
]);
