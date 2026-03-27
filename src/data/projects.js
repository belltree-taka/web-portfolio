import shopifyProjectThumb from '../assets/images/shopify-project-thumb.avif'
import webTypographyAssignmentThumb from '../assets/images/web-typography-assignment.avif'
import intrinsicWebDesignProjectThumb from '../assets/images/intrinsic-web-design-project-thumb.avif'
import freelancePosterProjectsThumb from '../assets/images/freelance-poster-projects-thumb.avif'


const projects = [
    {
        id: 'shopify',
        title: 'Shopify Development',
        thumb: shopifyProjectThumb,
        overview: [
            'This freelance project involves customizing a Shopify storefront based on the Savor theme, primarily using the Theme Editor to design and structure pages.',
            'To meet client requirements, I extended the default theme with custom CSS and JavaScript, modifying the navigation layout and adjusting the display of third-party app components.',
            'I also organized nearly 200 menu items by combining metafields and collections, enabling efficient content management and structured data usage.',
            'The project is currently in progress. You can view the development site using the password below.',
            'Password: &0@FuUmX4x51'
        ],

        liveUrl: 'https://nomiya-dev.myshopify.com',

        techStack: [
            'Shopify (Liquid, Theme Editor)',
            'Custom CSS & JavaScript',
            'Metafields & Collections',
            'Third-party app customization'
        ],

        insights: [
            'Learned how to structure and manage large-scale menu data using Shopify metafields and collections.',
            'Gained experience customizing a default Shopify theme to meet specific client requirements.',
            'Improved ability to adjust navigation and UI components for better clarity and usability.',
            'Developed a deeper understanding of working within platform constraints while extending functionality with CSS and JavaScript.'
        ]
    },

    {
        id: 'intrinsic',
        title: 'Intrinsic Web Design Development',
        thumb: intrinsicWebDesignProjectThumb,
        overview: [
            '',
            '',
        ],
        liveUrl: 'https://intrinsic-web-design-project.netlify.app/',
        techStack: [],
        insights: []
    },

    {
        id: 'web-typography',
        title: 'Web Typography Development',
        thumb: webTypographyAssignmentThumb,
        overview: [],
        liveUrl: 'https://web-typography-project.netlify.app/',
        techStack: [],
        insights: []
    },

    {
        id: 'freelance-poster',
        title: 'Poster Design',
        thumb: freelancePosterProjectsThumb,
        overview: [],
        liveUrl: 'https://visual-promotional-design-gallery.netlify.app/',
        techStack: [],
        insights: []
    },

];

export default projects