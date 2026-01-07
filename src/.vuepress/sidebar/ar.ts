import { sidebar } from "vuepress-theme-hope";

export const arSidebar = sidebar({
	"/ar/": [
		"",
		"intro",

		{
			text: "المقالات",
			icon: "book",
			prefix: "posts/",
			children: [
				{
					text: "توجيهات",
					icon: "solar:arrow-left-bold-duotone",
					prefix: "directives/",
					collapsible: true,

					children: [
						{ text: "التوجيه الأول الركن الشديد", icon: "mdi:dot", link: "1" },
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
		{
			text: "عرض توضيحي",
			icon: "laptop-code",
			prefix: "demo/",
			link: "demo/",
			children: "structure",
			collapsible: true,
		},
	],
});
