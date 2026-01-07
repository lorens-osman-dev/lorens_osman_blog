import { navbar } from "vuepress-theme-hope";

export const arNavbar = navbar([
	"/ar/",
	// "/ar/demo/",
	{
		text: "المقالات",
		icon: "pen-to-square",
		prefix: "/ar/posts/",
		children: [
			{
				text: "توجيهات",
				icon: "pen-to-square",
				prefix: "directives/",

				children: [
					{
						text: "التوجيه الأول الركن الشديد",
						icon: "mdi:dot",
						link: "1",
					},
					{
						text: "التوجيه الثاني حتمية الصراع",
						icon: "mdi:dot",
						link: "2",
					},
					{
						text: "التوجيه الثالث عنزة ترمب و وهم القانون",
						icon: "mdi:dot",
						link: "3",
					},
				],
			},
			{ text: "فاكهة التنين", icon: "pen-to-square", link: "dragonfruit" },
			"tarbiya",
			"strawberry",
		],
	},
]);
