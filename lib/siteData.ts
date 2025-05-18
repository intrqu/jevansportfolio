import HeroAvatar from '@/public/images/hero-avatar.jpg';
// import PortfolioImg from '@/public/images/portfolio-img.jpg';
// import PortfolioImgWide from '@/public/images/portfolio-img-wide.jpg';

import UniversalPortfolioImg from '@/public/images/portfolio/universal-studios/us-3.png';
import UniversalPortfolioImg1 from '@/public/images/portfolio/universal-studios/us-2.png';
import UniversalPortfolioImg2 from '@/public/images/portfolio/universal-studios/us-3.png';
import UniversalPortfolioImgWide from '@/public/images/portfolio/universal-studios/us-1.png';

export const headerData = {
    logo: 'JE',
    navlinks: [
        {
            url: '/#about',
            title: 'About',
        },
        {
            url: '/#services',
            title: 'Services',
        },
        {
            url: '/#portfolio',
            title: 'Portfolio',
        },
        {
            url: '/#awards',
            title: 'Publications',
        },
        {
            url: '/#contact',
            title: 'Contact',
        },
    ],
};

export const aboutData = {
    mainData: {
        name: "hello, jevans",
        heroAvatar: HeroAvatar,
        biography: "Transylvanian-born, Canadian-raised Creative Developer. Half designer, half developer, full-time keyboard gremlin. I make websites that look good and work better — no dark magic (just dark mode). May or may not turn into a bat when debugging.",
        location: "Vancouver",
        yearsOfExperience: "11",
        shoeSize: "8",
    },
    skills: [
        {
            name: 'Software Development',
        },
        {
            name: 'UI & UX Design',
        },
        {
            name: 'Marketing',
        },
        {
            name: 'SEO',
        },
        {
            name: 'Management',
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
            number: '01',
            bootstrapIcon: 'bi bi-brush',
            title: 'Design',
            description: 'Creating user-centric interfaces with a focus on clarity, consistency, and brand alignment.',
        },
        {
            number: '02',
            bootstrapIcon: 'bi bi-code-slash',
            title: 'Development',
            description: 'Implementing scalable, responsive, and maintainable code to deliver high-performance web solutions.',
        },
        {
            number: '03',
            bootstrapIcon: 'bi bi-laptop',
            title: 'Marketing',
            description: 'Combining strategic thinking with visual storytelling to enhance engagement and drive measurable results.',
        },
    ]
};


export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "Recent",
        title2Span: "Works",
        description: "Whether shaping a brand’s visual language or coding it into a living interface, I bring both craft and logic to every build. I design with purpose and develop with precision, ensuring each project is both beautiful and functional. This collection reflects the overlap of my design sensibility and technical execution."
    },
    projects: [
        {
            title: 'Universal Studios',
            slug: 'universal-studios',
            description: 'A responsive dashboard for internal use at Universal Studios, designed and developed to synchronize audio and video assets with precision. I led both the UX and front-end engineering, building a smooth interface that allowed editors to preview, align, and manage multimedia tracks in real-time. The tool features timeline scrubbing, playback control, and media asset management — all optimized for performance and clarity across devices.',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Design' },
                { name: 'UX' },
                { name: 'Development' }
            ],
            client: 'Universal Studios',
            duration: '120 Hours',
            projectLink: {
                title: 'N/A - Internal Tool',
                url: ''
            },
            content: '<p class="text-white/70">Designed and built a real-time dashboard and mobile interface for Universal Studios, enabling synchronized audio/video playback across multiple devices in group viewing scenarios. The system leveraged Croquet’s real-time collaboration framework to achieve millisecond-level sync and precise volume control across all users.</p>',
            mainImage: UniversalPortfolioImg,
            wideImage: UniversalPortfolioImgWide,
            
            lightboxImages: [
            {
                image: UniversalPortfolioImg1,
                alt: 'Universal Studios dashboard interface',
            },
            {
                image: UniversalPortfolioImg2,
                alt: 'Mobile sync screen',
            },
            ],
            trending: true
        }
    ]
};


export const awardsData = {
    mainData: {
        title: "Achievements",
        title2: "Public",
        title2Span: "ations",
    },
    awards: [
        {
            title: 'Programming Conference',
            date: '2022',
            description:
            'An Experiment in Live Collaborative Programming on the Croquet Shared Experience Platform.',
            link: 'https://2022.programming-conference.org/',
        },
        {
            title: 'Modern Dog / Modern Cat Magazine',
            date: '2018',
            description: 'Two full page spread advertisements for the organic pet health care brand Vetisse.',
        },
        {
            title: 'Surrey Memorial Hospital',
            date: '2014',
            description: 'Designed a large scale window decal installation to support their new youth center program.',
        },
    ]
};


export const contactData = {
    mainData: {
        title: "Contact",
        title2: "Let's",
        title2Span: "Talk",
        email: "peachy@hellojevans.com",
    }
};


export const footerData = {
    copyWriteText: 'Hello Jevans',
};
