import HeroAvatar from '@/public/images/hero-avatar.jpg';
import PortfolioImg from '@/public/images/portfolio-img.jpg';
import PortfolioImgWide from '@/public/images/portfolio-img-wide.jpg';

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
            title: 'Project Title 1',
            slug: 'project-title-1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 2',
            slug: 'project-title-2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 3',
            slug: 'project-title-3',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 4',
            slug: 'project-title-4',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: true
        },
        {
            title: 'Project Title 5',
            slug: 'project-title-5',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: false
        },
        {
            title: 'Project Title 6',
            slug: 'project-title-6',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
            keywords: 'key1, key2, key3',
            categories: [
                { name: 'Category' },
                { name: 'Category' },
                { name: 'Category' }
            ],
            services: [
                { name: 'Item' },
                { name: 'Item' },
            ],
            client: 'FlaTheme',
            duration: '235 Hours',
            projectLink: {
                title: 'www.flatheme.net',
                url: 'https://www.flatheme.net'
            },
            content: '<p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <h5 class="text-2xl font-outfit font-medium text-white mt-6 mb-2">Heading</h5> <p class="text-white/70">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
            mainImage: PortfolioImg,
            wideImage: PortfolioImgWide,
            imagesLightbox: {
                image: PortfolioImg,
                alt: 'Image Alt'
            },
            video: {
                thumbnail: PortfolioImg,
                url: 'https://www.youtube.com/watch?v=V8yu12uRpBA'
            },
            trending: false
        },
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
