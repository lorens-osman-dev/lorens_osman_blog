import { hopeTheme } from "vuepress-theme-hope";

import { enNavbar, arNavbar } from "./navbar/index.js";
import { enSidebar, arSidebar } from "./sidebar/index.js";

export default hopeTheme({
	hostname: "https://mister-hope.github.io",

	author: {
		name: "Lorens Osman",
		url: "https://mister-hope.com",
		email: "asdas@gg.com",
	},
	prevLink: false,
	nextLink: false,
	logo: "/444.svg",

	// repo: "vuepress-theme-hope/vuepress-theme-hope",
	hideSiteNameOnMobile: false,
	docsDir: "src",
	print: false,

	blog: {
		medias: {
			Email: "mailto:info@example.com",
			Reddit: "https://example.com",
			Twitter: "https://example.com",
			Whatsapp: "https://example.com",
			Youtube: "https://example.com",
			VuePressThemeHope: {
				icon: "https://theme-hope-assets.vuejs.press/logo.svg",
				link: "https://theme-hope.vuejs.press",
			},
		},
	},

	locales: {
		"/": {
			// navbar
			navbar: enNavbar,

			// sidebar
			sidebar: enSidebar,

			footer: "There is no victor except Allah",

			displayFooter: true,

			blog: {
				description: "A FrontEnd programmer",
				intro: "/intro.html",
			},

			metaLocales: {
				editLink: "Edit this page on GitHub",
			},
		},

		/**
		 * Arabic locale config
		 */
		"/ar/": {
			// navbar

			navbar: arNavbar,
			rtl: true,
			// sidebar
			sidebar: arSidebar,

			footer: "لا غالب الا الله",

			displayFooter: true,

			blog: {
				description: "مطور واجهة أمامية",
				intro: "/ar/intro.html",
				timeline: "الخط الزمني",
			},

			// arabic locales
			metaLocales: {
				editLink: "عدل هذه الصفحة على GitHub",
				author: "المؤلف",
				date: "تاريخ النشر",
				category: "الفئة",
				tag: "الوسم",
				readingTime: "وقت القراءة",
				contributors: "المساهمون",
				origin: "المصدر",
				next: "التالي",
				prev: "السابق",
				print: "طباعة",
				views: "المشاهدات",
				toc: "محتويات المقال",
				words: "عدد الكلمات",
			},
			navbarLocales: {
				langName: "العربية",
				selectLangAriaLabel: "اختر لغة",
			},
			paginationLocales: {
				next: "التالي",
				prev: "السابق",
				errorText: "لا توجد مقالات أخرى",
				action: "قم بالانتقال",
				navigate: "انتقل إلى",
			},
			blogLocales: {
				article: "مقالات",
				tag: "وسوم",
				category: "فئات",
				timeline: "تايم لاين",
				intro: "مقدمة",
				star: "مميزة",
				all: "الكل",
				articleList: "قائمة المقالات",
				timelineTitle: "الخط الزمني",
				empty: "لا توجد مقالات",
			},
			outlookLocales: {
				darkmode: "لون السمة",
				fullscreen: "ملء الشاشة",
				themeColor: "لون السمة",
			},
			routerLocales: {
				skipToContent: "تخط إلى المحتوى الرئيسي",
				notFoundTitle: "لم يتم العثور على الصفحة",
				notFoundMsg: [
					"لا يوجد شيء هنا.",
					"كيف وصلنا إلى هنا؟",
					"هذا خطأ 404.",
					"يبدو أن لدينا بعض الروابط المعطلة.",
				],
				back: "العودة",
				home: "العودة إلى الصفحة الرئيسية",
			},
			encryptLocales: {
				placeholder: "أدخل كلمة المرور",
				errorHint: "كلمة المرور غير صحيحة",
				iconLabel: "محتوى محمي بكلمة مرور",
				remember: "تذكر كلمة المرور",
			},
		},
	},

	encrypt: {
		config: {
			"/demo/encrypt.html": {
				hint: "Password: 1234",
				password: "1234",
			},
			"/ar/demo/encrypt.html": {
				hint: "Password: 1234",
				password: "1234",
			},
		},
	},

	// enable it to preview all changes in time
	// hotReload: true,

	// These features are enabled for demo, only preserve features you need here
	markdown: {
		align: true,
		attrs: true,
		codeTabs: true,
		component: true,
		demo: true,
		figure: true,
		gfm: true,
		imgLazyload: true,
		imgSize: true,
		include: true,
		mark: true,
		plantuml: true,
		spoiler: true,
		stylize: [
			{
				matcher: "Recommended",
				replacer: ({ tag }) => {
					if (tag === "em")
						return {
							tag: "Badge",
							attrs: { type: "tip" },
							content: "Recommended",
						};
				},
			},
		],
		sub: true,
		sup: true,
		tabs: true,
		tasklist: true,
		vPre: true,

		// uncomment these if you need TeX support
		// math: {
		//   // install katex before enabling it
		//   type: "katex",
		//   // or install mathjax-full before enabling it
		//   type: "mathjax",
		// },

		// install chart.js before enabling it
		// chartjs: true,

		// install echarts before enabling it
		// echarts: true,

		// install flowchart.ts before enabling it
		// flowchart: true,

		// install mermaid before enabling it
		// mermaid: true,

		// playground: {
		//   presets: ["ts", "vue"],
		// },

		// install @vue/repl before enabling it
		// vuePlayground: true,

		// install sandpack-vue3 before enabling it
		// sandpack: true,

		// install @vuepress/plugin-revealjs and uncomment these if you need slides
		// revealjs: {
		//   plugins: ["highlight", "math", "search", "notes", "zoom"],
		// },
	},

	plugins: {
		blog: true,

		// Install @waline/client before enabling it
		// Note: This is for testing ONLY!
		// You MUST generate and use your own comment service in production.
		// comment: {
		//   provider: "Waline",
		//   serverURL: "https://waline-comment.vuejs.press",
		// },

		components: {
			components: ["Badge", "VPCard"],
		},
		readingTime: false,
		icon: {
			prefix: "fa6-solid:",
		},
		copyright: {
			disableCopy: true,
			disableSelection: true,
			author: "Lorens Osman",
		},

		// install @vuepress/plugin-pwa and uncomment these if you want a PWA
		// pwa: {
		//   favicon: "/favicon.ico",
		//   cacheHTML: true,
		//   cacheImage: true,
		//   appendBase: true,
		//   apple: {
		//     icon: "/assets/icon/apple-icon-152.png",
		//     statusBarColor: "black",
		//   },
		//   msTile: {
		//     image: "/assets/icon/ms-icon-144.png",
		//     color: "#ffffff",
		//   },
		//   manifest: {
		//     icons: [
		//       {
		//         src: "/assets/icon/chrome-mask-512.png",
		//         sizes: "512x512",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-mask-192.png",
		//         sizes: "192x192",
		//         purpose: "maskable",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-512.png",
		//         sizes: "512x512",
		//         type: "image/png",
		//       },
		//       {
		//         src: "/assets/icon/chrome-192.png",
		//         sizes: "192x192",
		//         type: "image/png",
		//       },
		//     ],
		//     shortcuts: [
		//       {
		//         name: "Demo",
		//         short_name: "Demo",
		//         url: "/demo/",
		//         icons: [
		//           {
		//             src: "/assets/icon/guide-maskable.png",
		//             sizes: "192x192",
		//             purpose: "maskable",
		//             type: "image/png",
		//           },
		//         ],
		//       },
		//     ],
		//   },
		// },
	},
});
