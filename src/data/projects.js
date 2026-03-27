import shopifyProjectThumb from '../assets/images/shopify-project-thumb.avif'
import webTypographyAssignmentThumb from '../assets/images/web-typography-assignment-thumb.avif'
import intrinsicWebDesignProjectThumb from '../assets/images/intrinsic-web-design-project-thumb.avif'
import freelancePosterProjectsThumb from '../assets/images/freelance-poster-projects-thumb.avif'
import shopifyProjectScreenshot from '../assets/images/shopify-project-screenshot.avif'
import intrinsicWebDesignProjectScreenshot from '../assets/images/intrinsic-web-design-project-screenshot.mp4'
import webTypographyAssignmentScreenshot from '../assets/images/web-typography-assignment-screenshot.avif'
import freelancePosterProjectsScreenshot from '../assets/images/freelance-poser-projects-screenshot.avif'

const projects = [
    {
        id: 'shopify',
        title: 'Shopify Development',
        thumb: shopifyProjectThumb,
        mediaType: 'image',
        screenshot: shopifyProjectScreenshot,
        overview: [
            'This freelance project involved designing and developing a new website for a Japanese restaurant located on Calgary Trail in Edmonton, migrating from an existing WordPress site to Shopify.',
            'The previous site had grown over time with various plugins and theme customizations, which made it challenging to maintain and scale. To improve long-term reliability, I redesigned the structure and rebuilt the site using Shopify.',
            'Since this was my first time working with Shopify, I independently learned Liquid and JSON template files while developing the project. One of the biggest challenges was structuring nearly 200 menu items with complex conditions, such as pickup-only items and dinner-exclusive menus.',
            'To solve this, I designed a data structure using metafields and collections, and created a custom CSV import workflow to efficiently manage large-scale menu data.',
            'Although the final delivery is scheduled alongside a major rebranding update, the site itself has been completed and has received positive feedback from the client.',
            'You can view the development site using the password below.',
            'Password: &0@FuUmX4x51'
        ],

        liveUrl: 'https://nomiya-dev.myshopify.com',

        techStack: [
            'Shopify (Liquid, JSON Templates, Theme Editor)',
            'Custom CSS & JavaScript',
            'Metafields & Collections',
            'Third-party app customization'
        ],

        insights: [
            'Structured and managed large-scale menu data using Shopify metafields and collections',
            'Customized a default Shopify theme to meet specific client requirements ',
            'Improved navigation and UI clarity for better usability',
            'Gained experience working within platform constraints while extending functionality'
        ]
    },

    {
        id: 'intrinsic',
        title: 'Intrinsic Web Design Development',
        thumb: intrinsicWebDesignProjectThumb,
        mediaType: 'video',
        screenshot: intrinsicWebDesignProjectScreenshot,
        overview: [
            'This project was completed as part of the DMIT2033 Web Design and Usability II course, focusing on intrinsic design principles.',
            'Instead of relying on traditional layout techniques such as float, positioning, or media queries, the goal was to create a responsive layout that adapts naturally based on content constraints. I developed a fictional tour company website using modern CSS approaches that emphasize flexibility and scalability.',
            'Initially, I found CSS Grid challenging compared to the Flexbox layouts I was more familiar with. To overcome this, I created a sandbox environment to experiment with real code and better understand how grid behaves in different scenarios.',
            'Although not required for the assignment, I also implemented SCSS using the BEM naming convention for maintainable styling, and explored newer CSS features such as container queries.',
            'The final project achieved a perfect score.',
        ],
        liveUrl: 'https://intrinsic-web-design-project.netlify.app/',
        techStack: [
            'CSS Grid',
            'Clamp-based responsive typography',
            'SCSS (BEM methodology)',
            'Container Queries',
            'Responsive images (img, srcset)',
        ],
        insights: [
            'Developed a deeper understanding of intrinsic design and content-driven layouts',
            'Improved ability to use CSS Grid for complex and flexible layouts',
            'Learned how to structure scalable and maintainable CSS using BEM methodology',
            'Gained experience with modern CSS features such as container queries',
        ]
    },

    {
        id: 'web-typography',
        title: 'Web Typography Development',
        thumb: webTypographyAssignmentThumb,
        mediaType: 'image',
        screenshot: webTypographyAssignmentScreenshot,
        overview: [
            'As part of the DMIT1529 Web Design and Usability I course at NAIT, I developed this project to explore structured typographic systems using a baseline grid.',
            'The focus of this assignment was to build a consistent and structured typographic system using a baseline grid. While early explorations included a 24px baseline grid, the final implementation was developed using a 30px grid system to ensure that all text elements aligned precisely and maintained a clear vertical rhythm.',
            'Rather than selecting font sizes arbitrarily, I applied a systematic approach by referencing typographic scales such as Major Second and Minor Third. Additionally, I explored alternative methods inspired by Tailwind CSS, manually implementing a curated font scale to better understand how design systems define typography in web projects.',
            'To strengthen my understanding, I intentionally worked with pixel-based values instead of relative units such as rem. This helped me clearly understand the mathematical relationship between font size, line height, and vertical rhythm.',
            'Through this process, I developed a deeper understanding of how precise typographic systems contribute to both visual consistency and readability. The image shows a 24px baseline grid example explored during coursework.'
        ],
        liveUrl: 'https://web-typography-project.netlify.app/',
        techStack: [
            'CSS (Typography system design)',
            'Baseline Grid (24px vertical rhythm)',
            'Type Scale (Major Second / Minor Third)',
            'Manual font scale implementation (inspired by Tailwind CSS)'
        ],
        insights: [
            'Learned how to create a consistent typographic system using a baseline grid',
            'Developed a strong understanding of vertical rhythm and spacing relationships',
            'Gained experience applying mathematical type scales instead of arbitrary sizing',
            'Improved attention to detail by aligning all text elements to a strict grid system'
        ]
    },

    {
        id: 'freelance-poster',
        title: 'Poster Design',
        thumb: freelancePosterProjectsThumb,
        mediaType: 'image',
        screenshot: freelancePosterProjectsScreenshot,
        overview: [
            'I worked on designing and delivering a series of promotional posters for a Japanese restaurant located on Calgary Trail in Edmonton.',
            "The initial project focused on creating a 2' x 3' menu poster. One of the biggest challenges during this phase was understanding and extracting the client's design preferences. Although I prepared a structured questionnaire and proposed initial design directions, it took multiple iterations before reaching a solution that truly aligned with the client's expectations.",
            "Through this experience, I realized that successful client work is not only about defining visual requirements, but also about understanding how a client thinks, communicates, and collaborates. I learned that there is no single “correct” process, and adapting to a client's working style became an important part of my approach.",
            "With this shift in mindset, subsequent projects became significantly more efficient. I was able to deliver designs that closely matched the client's vision, leading to consistent positive feedback and a strong working relationship."
        ],
        liveUrl: 'https://visual-promotional-design-gallery.netlify.app/',
        techStack: [
            'Adobe Photoshop',
            'Adobe Illustrator',
            'Adobe Firefly (image generation / stylization)',
            'Canva',
            'Client communication & requirement analysis'
        ],
        insights: [
            "Learned how to adapt design processes based on each client's communication style",
            'Developed the ability to extract implicit client preferences beyond initial requirements',
            'Improved efficiency by refining feedback loops and reducing unnecessary iterations',
            'Gained hands-on experience balancing creative decisions with client expectations.'
        ]
    },

];

export default projects