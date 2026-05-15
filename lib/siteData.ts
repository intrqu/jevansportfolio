import HeroAvatar from "@/public/images/hero-avatar.jpg";
// import PortfolioImg from '@/public/images/portfolio-img.jpg';
// import PortfolioImgWide from '@/public/images/portfolio-img-wide.jpg';

//universal studios images
import UniversalPortfolioImg from "@/public/images/portfolio/universal-studios/us-3.png";
import UniversalPortfolioImg1 from "@/public/images/portfolio/universal-studios/us-2.png";
import UniversalPortfolioImg2 from "@/public/images/portfolio/universal-studios/us-3.png";
import UniversalPortfolioImgWide from "@/public/images/portfolio/universal-studios/us-1.png";

//API DASHBOARD IMAGES
import ApiDashboardImg from "@/public/images/portfolio/dashboard/dashboard-1.png";
import ApiDashboardImg1 from "@/public/images/portfolio/dashboard/dashboard-2.png";
import ApiDashboardImg2 from "@/public/images/portfolio/dashboard/dashboard-3.png";
import ApiDashboardImgWide from "@/public/images/portfolio/dashboard/dashboard-4.png";

//Croquet Corridor
import CorridorImg from "@/public/images/portfolio/corridor/corridor-1.jpg";
import CorridorImg1 from "@/public/images/portfolio/corridor/corridor-2.jpg";
import CorridorImg2 from "@/public/images/portfolio/corridor/corridor-3.png";
import CorridorImgWide from "@/public/images/portfolio/corridor/corridor-4.jpg";
//Microverse
import MicroverseImg from "@/public/images/portfolio/metaverse/microverse-4.png";
import MicroverseImg1 from "@/public/images/portfolio/metaverse/microverse-2.png";
import MicroverseImg2 from "@/public/images/portfolio/metaverse/microverse-3.png";
import MicroverseImgWide from "@/public/images/portfolio/metaverse/microverse-1.png";

//Greenlight
import GreenlightImg from "@/public/images/portfolio/greenlight/greenlight-1.jpg";
import GreenlightImg1 from "@/public/images/portfolio/greenlight/greenlight-2.jpg";
import GreenlightImg2 from "@/public/images/portfolio/greenlight/greenlight-3.png";
import GreenlightImgWide from "@/public/images/portfolio/greenlight/greenlight-4.png";

/*website
import WebsiteImg from "@/public/images/portfolio/website/website-1.png";*/
import WebsiteImg1 from "@/public/images/portfolio/website/website-2.jpg";
import WebsiteImg2 from "@/public/images/portfolio/website/website-3.png";
import WebsiteImgWide from "@/public/images/portfolio/website/website-both.jpg";

/*travel site
import TravelImg from "@/public/images/portfolio/travel/travel-1.png";
import TravelImg1 from "@/public/images/portfolio/travel/travel-2.png";
import TravelImg2 from "@/public/images/portfolio/travel/travel-3.png";
import TravelImgWide from "@/public/images/portfolio/travel/travel-4.png";*/

/*analytics dashboard
import AnalyticsImg from "@/public/images/portfolio/analytics-dashboard/KE-Portfolio1.png";
import AnalyticsImg1 from "@/public/images/portfolio/analytics-dashboard/KE-Portfolio2.png";
import AnalyticsImg2 from "@/public/images/portfolio/analytics-dashboard/KE-Portfolio3.png";
import AnalyticsImgWide from "@/public/images/portfolio/analytics-dashboard/KE-Portfolio4.png";*/
import k20dashboard from "@/public/images/portfolio/analytics-dashboard/k20-2.png";
import k20dashboard2 from "@/public/images/portfolio/analytics-dashboard/k20-1.png";
import k20dashboard3 from "@/public/images/portfolio/analytics-dashboard/k20-3.png";
import k20dashboard4 from "@/public/images/portfolio/analytics-dashboard/k20-4.png";

//brm
import BrmImg from "@/public/images/portfolio/brm-website/brm-1.png";

//juniper
import JuniperImg from "@/public/images/portfolio/juniper/juniper-footer-desktop-focus-hover.png";
/*import JuniperImg2 from "@/public/images/portfolio/juniper/juniper-footer-mobile.png";*/
import JuniperImg3 from "@/public/images/portfolio/juniper/juniper-header-desktop.png";
import JuniperImg4 from "@/public/images/portfolio/juniper/juniper-header-mobile.png";

//ksite
import KsiteImg from "@/public/images/portfolio/k-site/Kyndryl-After.png";

export const headerData = {
	logo: "JE",
	navlinks: [
		{
			url: "/#about",
			title: "About",
		},
		{
			url: "/#services",
			title: "Services",
		},
		{
			url: "/#portfolio",
			title: "Portfolio",
		},
		{
			url: "/#awards",
			title: "Publications",
		},
		{
			url: "/#contact",
			title: "Contact",
		},
	],
};

export const aboutData = {
	mainData: {
		name: "hello, jevans",
		heroAvatar: HeroAvatar,
		biography:
			"Transylvanian-born, Canadian-raised Design Engineer blending UX, frontend development, and interactive storytelling. Half designer, half developer, permanently fueled by caffeine and curiosity. I build digital experiences that feel polished, intentional, and a little bit strange.",
		location: "Vancouver",
		yearsOfExperience: "11",
		shoeSize: "8",
	},
	skills: [
		{
			name: "Software Development",
		},
		{
			name: "UI & UX Design",
		},
		{
			name: "Marketing",
		},
		{
			name: "SEO",
		},
		{
			name: "Management",
		},
	],
	// connect: [
	//     {
	//         url: '#',
	//         bootstrapIcon: 'bi bi-facebook',
	//     },
	//     {
	//         url: '#',
	//         bootstrapIcon: 'bi bi-twitter-x',
	//     },
	//     {
	//         url: '#',
	//         bootstrapIcon: 'bi bi-instagram',
	//     },
	// ]
};

export const servicesData = {
	mainData: {
		title: "Services",
		title2: "What I",
		title2Span: "Do",
	},
	services: [
		{
			number: "01",
			bootstrapIcon: "bi bi-brush",
			title: "Design",
			description:
				"Creating user-centric interfaces with a focus on clarity, consistency, and brand alignment.",
		},
		{
			number: "02",
			bootstrapIcon: "bi bi-code-slash",
			title: "Development",
			description:
				"Implementing scalable, responsive, and maintainable code to deliver high-performance web solutions.",
		},
		{
			number: "03",
			bootstrapIcon: "bi bi-laptop",
			title: "Marketing",
			description:
				"Combining strategic thinking with visual storytelling to enhance engagement and drive measurable results.",
		},
	],
};

export const portfolioData = {
	mainData: {
		title: "Portfolio",
		title2: "Recent",
		title2Span: "Works",
		description:
			"Whether shaping a brand’s visual language or coding it into a living interface, I bring both craft and logic to every build. I design with purpose and develop with precision, ensuring each project is both beautiful and functional. This collection reflects the overlap of my design sensibility and technical execution.",
	},
	projects: [
		{
			title: "Analytics Dashboard",
			slug: "analytics-dashboard",
			description:
				"Designed and developed an enterprise analytics dashboard for Coppertree Analytics, transforming complex building and energy management data into intuitive, data-driven experiences for operational teams and enterprise users.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Analytics Dashboard",
			duration: "300 Hours",
			projectLink: {
				title: "Client-facing SaaS",
				url: "",
			},
			content:
				'<p class="text-white/70">UX/UI Design • Frontend Development • Data Visualization • Dashboard Architecture • Enterprise SaaS</p>',
			mainImage: k20dashboard,
			wideImage: k20dashboard2,
			lightboxImages: [
				{
					image: k20dashboard3,
					alt: "Aggregated Analytics Dashboard Interface",
				},
				{
					image: k20dashboard4,
					alt: "Aggregated Analytics Dashboard Interface",
				},
			],
			trending: true,
		},
		{
			title: "Juniper Networks Navigation Redesign",
			slug: "juniper-networks-navigation-redesign",
			description:
				"Redesigned the navigation structure for Juniper Networks' enterprise software, improving user accessibility and streamlining workflows for technical professionals.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Juniper Networks",
			duration: "300 Hours",
			projectLink: {
				title: "Customer-facing Enterprise Website",
				url: "",
			},
			content:
				'<p class="text-white/70">Led UX and frontend redesign work for Juniper Networks navigation systems, improving information architecture, usability, accessibility, and cross-platform consistency across enterprise-scale web experiences.</p>',
			mainImage: JuniperImg,
			wideImage: JuniperImg,
			lightboxImages: [
				{
					image: JuniperImg3,
					alt: "Juniper Networks Navigation Redesign",
				},
				{
					image: JuniperImg4,
					alt: "Juniper Networks Navigation Redesign",
				},
			],
			trending: true,
		},
		{
			title: "Universal Studios",
			slug: "universal-studios",
			description:
				"A responsive dashboard for internal use at Universal Studios, designed and developed to synchronize audio and video assets with precision. I led both the UX and front-end engineering, building a smooth interface that allowed editors to preview, align, and manage multimedia tracks in real-time. The tool features timeline scrubbing, playback control, and media asset management — all optimized for performance and clarity across devices.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Universal Studios",
			duration: "120 Hours",
			projectLink: {
				title: "N/A - Internal Tool",
				url: "",
			},
			content:
				'<p class="text-white/70">Designed and built a real-time dashboard and mobile interface for Universal Studios, enabling synchronized audio/video playback across multiple devices in group viewing scenarios. The system leveraged Croquet’s real-time collaboration framework to achieve millisecond-level sync and precise volume control across all users.</p>',
			mainImage: UniversalPortfolioImg,
			wideImage: UniversalPortfolioImgWide,
			lightboxImages: [
				{
					image: UniversalPortfolioImg1,
					alt: "Universal Studios dashboard interface",
				},
				{
					image: UniversalPortfolioImg2,
					alt: "Mobile sync screen",
				},
			],
			trending: true,
		},
		{
			title: "Website Redesign",
			slug: "website-redesign",
			description:
				"Redesigned and developed the Croquet platform website to showcase their realtime collaborative “microverse” technology through a bold, playful visual identity and highly interactive frontend experience. Led both the UX/UI direction and frontend implementation, focusing on clear product storytelling, responsive design, motion, and developer-focused usability.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Croquet",
			duration: "120 Hours",
			projectLink: {
				title: "Website Redesign",
				url: "",
			},
			content:
				'<p class="text-white/70">Designed and built a modern marketing experience and developer portal for Croquet’s realtime metaverse platform, combining playful visual systems, interactive frontend development, and product-focused UX to communicate complex multiplayer technology in a clear and engaging way.</p>',
			mainImage: WebsiteImgWide,
			wideImage: WebsiteImg1,
			lightboxImages: [
				{
					image: WebsiteImg2,
					alt: "Website interface",
				},
				{
					image: WebsiteImgWide,
					alt: "Website interface",
				},
			],
			trending: true,
		},
		{
			title: "Website Redesign",
			slug: "website-redesign",
			description:
				"Redesigned website for ai-native technology company, focusing on a bold, playful visual identity and highly interactive frontend experience. Led both the UX/UI direction and frontend implementation, focusing on clear product storytelling, responsive design, motion, and developer-focused usability.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Kyndryl",
			duration: "120 Hours",
			projectLink: {
				title: "Website Redesign",
				url: "",
			},
			content:
				'<p class="text-white/70">Designed and built a modern marketing experience and developer portal for Kyndryl’s AI-native platform, combining playful visual systems, interactive frontend development, and product-focused UX to communicate complex technology in a clear and engaging way.</p>',
			mainImage: KsiteImg,
			wideImage: KsiteImg,
			lightboxImages: [
				{
					image: KsiteImg,
					alt: "Website interface",
				},
				{
					image: KsiteImg,
					alt: "Website interface",
				},
			],
			trending: true,
		},
		{
			title: "API Dashboard",
			slug: "api-dashboard",
			description:
				"Designed and built a responsive API dashboard for Croquet, enabling developers to explore endpoints, track usage, and securely manage API keys in real time.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Croquet Corporation",
			duration: "200 Hours",
			projectLink: {
				title: "Croquet Account",
				url: "https://croquet.io/account/",
			},
			content:
				'<p class="text-white/70">I designed and developed a responsive API dashboard for Croquet to support developers integrating with their real-time collaboration engine. The interface allows users to view API endpoints, monitor usage, and securely manage their API keys. I focused on creating a clean, intuitive user experience while collaborating closely with backend teams to integrate real-time data streams.</p>',
			mainImage: ApiDashboardImg,
			wideImage: ApiDashboardImgWide,
			lightboxImages: [
				{
					image: ApiDashboardImg1,
					alt: "Api Dashboard Interface",
				},
				{
					image: ApiDashboardImg2,
					alt: "API Key Management Screen",
				},
			],
			trending: true,
		},
		{
			title: "Backroad Mapbooks",
			slug: "backroad-mapbooks",
			description:
				"Redesigned the Backroad Mapbooks homepage to modernize the brand experience, improve content discovery, and create a more immersive outdoor-focused digital journey for users exploring maps, trails, and adventure guides.",
			keywords: "key1, key2, key3",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Backroad Mapbooks",
			duration: "300 Hours",
			projectLink: {
				title: "Backroad Mapbooks Website",
				url: "",
			},
			content:
				'<p class="text-white/70">UX/UI Design • Frontend Development • Brand Experience • Responsive Design • Outdoor & Travel Ecommerce</p>',
			mainImage: BrmImg,
			wideImage: BrmImg,
			lightboxImages: [
				{
					image: BrmImg,
					alt: "Backroad Mapbooks Redesign",
				},
			],
			trending: true,
		},
		{
			title: "Corridor",
			slug: "corridor",
			description:
				"Designed a dynamic, immersive experience for Croquet's Corridor demo — a spatial chat environment merging design, code, and real-time communication. I led the front-end build with WebGL-enhanced visuals and interactive UI layers.",
			keywords: "Croquet, WebGL, Spatial UI",
			categories: [
				{ name: "Design" },
				{ name: "UX" },
				{ name: "Development" },
			],
			client: "Croquet Corporation",
			duration: "90 Hours",
			projectLink: {
				title: "Corridor Demo",
				url: "https://croquet.io/corridor",
			},
			content:
				'<p class="text-white/70">I led front-end development for Croquet’s spatial Corridor demo, blending real-time presence with WebGL-powered interaction layers. The experience centered on creating a natural-feeling virtual environment while maintaining real-time sync and usability.</p>',
			mainImage: CorridorImg,
			wideImage: CorridorImgWide,
			lightboxImages: [
				{
					image: CorridorImg1,
					alt: "Corridor interface view",
				},
				{
					image: CorridorImg2,
					alt: "Interactive environment with avatars",
				},
			],
			trending: false,
		},
		{
			title: "Microverse",
			slug: "microverse",
			description:
				"Contributed UX and UI development to Croquet’s Microverse demo — an experimental 3D world showcasing persistent multiplayer collaboration. Focused on performance tuning, avatar rendering, and real-time user feedback integration.",
			keywords: "Croquet, 3D, Avatar",
			categories: [{ name: "Development" }, { name: "3D UX" }],
			client: "Croquet Corporation",
			duration: "140 Hours",
			projectLink: {
				title: "Microverse Demo",
				url: "https://croquet.io/microverse",
			},
			content:
				'<p class="text-white/70">Built key UX components for Croquet’s Microverse, a persistent multiplayer 3D environment. Worked on avatar controls, UI performance tuning, and rendering optimizations for a seamless experience.</p>',
			mainImage: MicroverseImg,
			wideImage: MicroverseImgWide,
			lightboxImages: [
				{
					image: MicroverseImg1,
					alt: "Microverse 3D space",
				},
				{
					image: MicroverseImg2,
					alt: "Avatar interaction scene",
				},
			],
			trending: false,
		},
		{
			title: "Greenlight",
			slug: "greenlight",
			description:
				"Created the visual and interactive front-end for Greenlight, Croquet’s lightweight onboarding experience. Emphasized performance, accessibility, and simplicity, helping users get started with real-time shared experiences.",
			keywords: "Greenlight, Onboarding, UI",
			categories: [{ name: "Design" }, { name: "Frontend" }],
			client: "Croquet Corporation",
			duration: "70 Hours",
			projectLink: {
				title: "Greenlight",
				url: "https://croquet.io/greenlight",
			},
			content:
				'<p class="text-white/70">Designed and implemented Greenlight, Croquet’s entry-level onboarding tool for new users. Built with accessibility and speed in mind, Greenlight helps developers and creators quickly test shared environments in real time.</p>',
			mainImage: GreenlightImg,
			wideImage: GreenlightImgWide,
			lightboxImages: [
				{
					image: GreenlightImg1,
					alt: "Greenlight walkthrough",
				},
				{
					image: GreenlightImg2,
					alt: "Greenlight onboarding UI",
				},
			],
			trending: false,
		},
	],
};

export const awardsData = {
	mainData: {
		title: "Achievements",
		title2: "Public",
		title2Span: "ations",
	},
	awards: [
		{
			title: "Programming Conference",
			date: "2022",
			description:
				"An Experiment in Live Collaborative Programming on the Croquet Shared Experience Platform.",
			link: "https://2022.programming-conference.org/",
		},
		{
			title: "Modern Dog / Modern Cat Magazine",
			date: "2018",
			description:
				"Two full page spread advertisements for the organic pet health care brand Vetisse.",
		},
		{
			title: "Surrey Memorial Hospital",
			date: "2014",
			description:
				"Designed a large scale window decal installation to support their new youth center program.",
		},
	],
};

export const contactData = {
	mainData: {
		title: "Contact",
		title2: "Let's",
		title2Span: "Talk",
		email: "peachy@hellojevans.com",
	},
};

export const footerData = {
	copyWriteText: "Hello Jevans",
};
