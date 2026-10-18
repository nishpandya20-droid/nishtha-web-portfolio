/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, TimelineItem, Certificate, Testimonial, Service, ProcessStep } from './types';

export const AVATAR_PATH = '/nishtha.jpg';

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Elite Coders Winter of Code (ECWOC)',
    category: 'Open Source',
    description: 'Open Source Community Management & Content Design',
    longDescription: 'Elite Coders Winter of Code (ECWOC) is an open-source community with 8,000+ participants, dedicated to helping students learn, collaborate, and contribute to open-source projects. As a Content Team Member, I created engaging announcement posters, educational graphics, and promotional content that made community updates and technical concepts easy to understand. My designs also supported event promotions, increased community engagement, and strengthened the program\'s online presence.',
    image: '/src/assets/images/ecwoc pics/Pink 3D Important Announcement Poster.png',
    gallery: [
      '/src/assets/images/ecwoc pics/Pink 3D Important Announcement Poster.png',
      '/src/assets/images/ecwoc pics/Green and White Modern Workshop Speakers Promo Instagram Post (1).png',
      '/src/assets/images/ecwoc pics/Green White Minimalis Webinar Digital Marketing Expert Instagram Post .png',
      '/src/assets/images/ecwoc pics/Peach Modern Meet Our Team Instagram Post.png',
      '/src/assets/images/ecwoc pics/White Pink boho Background Instagram Post (1).png',
      '/src/assets/images/ecwoc pics/Yellow and White Simple Minimalist Mind Mapping Chart Presentation Poster.png',
      '/src/assets/images/ecwoc pics/2.png',
      '/src/assets/images/ecwoc pics/4.png',
      '/src/assets/images/ecwoc pics/Black and White Suspense Thriller Criminal and Mystery Investigation Bumper Video (1).mp4',
      '/src/assets/images/ecwoc pics/Pink and Green Floral Illustration Wedding Invitation Video .mp4'
    ],
    software: ['Canva'],
    client: 'Elite Coders Winter of Code (ECWOC)',
    date: 'Nov 2025 - Mar 2026'
  },
  {
    id: 'proj-2',
    title: 'Elite HER',
    category: 'Open Source',
    description: 'Women\'s Hackathon Community | Content Coordination & Community Engagement',
    longDescription: 'Elite HER is a women-focused hackathon that empowers aspiring women in technology through learning, collaboration, and innovation. As a Content Team Member, I coordinated with new team members, guided them in creating engaging content, and managed the organization\'s LinkedIn presence. I also designed promotional content and community updates that helped increase visibility, encourage participation, and strengthen the community\'s online engagement. (Approx. Participants: 2500+)',
    image: '/src/assets/images/elite her/Screenshot 2026-08-02 143454.png',
    gallery: [
      '/src/assets/images/elite her/Screenshot 2026-08-02 143454.png',
      '/src/assets/images/elite her/Copy of White Minimalist This year I learned to Work Tiktok Video (2).mp4'
    ],
    software: ['Canva', 'LinkedIn'],
    client: 'Elite HER',
    date: 'March 2026 - April 2026'
  },
  {
    id: 'proj-3',
    title: 'Colab Nation',
    category: 'Brand Identity',
    description: 'Design Leadership & Brand Management',
    longDescription: 'Serving as Head of Design & Brand at Colab Nation, I lead the organization\'s visual identity, oversee creative direction, and design comprehensive branding assets, recruitment campaigns, social media creatives, event announcements, and partnership marketing collaterals. I collaborate cross-functionally to ensure a cohesive and professional brand presence across every touchpoint.',
    image: '/src/assets/images/colab nation/1.png',
    gallery: [
      '/src/assets/images/colab nation/1.png',
      '/src/assets/images/colab nation/ChatGPT Image Jul 13, 2026, 12_56_58 AM.png',
      '/src/assets/images/colab nation/DoraDAO.png',
      '/src/assets/images/colab nation/WhatsApp Image 2026-05-14 at 12.14.11 PM.jpeg',
      '/src/assets/images/colab nation/WhatsApp Image 2026-07-11 at 4.13.41 PM.jpeg',
      '/src/assets/images/colab nation/WhatsApp Image 2026-08-01 at 3.32.45 AM (11).jpeg',
      '/src/assets/images/colab nation/WhatsApp Image 2026-08-01 at 3.32.45 AM (12).jpeg'
    ],
    software: ['Canva', 'LinkedIn'],
    client: 'Colab Nation',
    date: '2026 - Present'
  },
  {
    id: 'proj-4',
    title: 'Campus Leadership & Creative Contributions',
    category: 'Poster Design',
    description: 'Content Design & Digital Communication',
    longDescription: 'Contributed as a Content Team Member across the College Social Media Club, Google Developer Groups (GDG) on Campus, NEC E-Cell IIT Bombay, and the College Magazine Committee. Designed promotional posters, social media creatives, festival greetings, hackathon announcements, and event campaigns that enhanced communication, increased participation, and maintained a consistent visual identity across student-led initiatives.',
    image: '/src/assets/images/Campus leadership & creative contribution/Hackathon.png',
    gallery: [
      '/src/assets/images/Campus leadership & creative contribution/Hackathon.png',
      '/src/assets/images/Campus leadership & creative contribution/2.png',
      '/src/assets/images/Campus leadership & creative contribution/Basant Panchmi.png',
      '/src/assets/images/Campus leadership & creative contribution/Bhai Dooj .png',
      '/src/assets/images/Campus leadership & creative contribution/Makar Sankranti .png',
      '/src/assets/images/Campus leadership & creative contribution/Untitled design (2).png',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (1).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (2).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (4).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (5).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/Typographic Geometric Monogram Professional Modern Logo.png',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (9).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM (10).jpeg',
      '/src/assets/images/Campus leadership & creative contribution/WhatsApp Image 2026-08-01 at 3.32.45 AM.jpeg',
      '/src/assets/images/Campus leadership & creative contribution/White Simple Merry Christmas Poster (Portrait).png',
      '/src/assets/images/Campus leadership & creative contribution/abhinandan.png',
      '/src/assets/images/Campus leadership & creative contribution/Innovation is loading….mp4'
    ],
    software: ['Canva', 'LinkedIn'],
    client: 'College Clubs & Committees',
    date: '2024 - Present'
  },
  {
    id: 'proj-5',
    title: 'Elite Coders Summer of Code (ECSOC)',
    category: 'Open Source',
    description: 'Open Source Program | Content Creation & Community Engagement',
    longDescription: 'Elite Coders Summer of Code (ECSOC) is an open-source program that brings together students to learn, collaborate, and contribute to open-source projects. As a Content Team Member, I designed announcement posters, educational content, achievement certificates, and promotional creatives that simplified important updates, increased participant engagement, and strengthened the program\'s online presence.',
    image: '/src/assets/images/ecsoc/Blue Classic Classroom Announcement (1).png',
    gallery: [
      '/src/assets/images/ecsoc/Blue Classic Classroom Announcement (1).png',
      '/src/assets/images/ecsoc/White Minimalist Certificate Of Achievement.png'
    ],
    software: ['Canva', 'LinkedIn'],
    client: 'Elite Coders Summer of Code (ECSOC)',
    date: '2026 - Present'
  },
  {
    id: 'proj-6',
    title: 'EcoSphere – AI-Powered Sustainability Platform',
    category: 'Presentation',
    description: 'Designed a unified platform that helps users adopt sustainable habits by tracking waste, water, energy, and carbon emissions in one place.',
    longDescription: 'Designed a unified platform that helps users adopt sustainable habits by tracking waste, water, energy, and carbon emissions in one place. The solution uses AI-powered insights, real-time monitoring, and community-driven challenges to make environmental actions simple, measurable, and rewarding. \n\n🏆 Awarded Rank 1 in the In-House Hackathon.\n\nProject Details:\n- Category: Sustainability & Environmental Technology\n- Achievement: 🏆 Rank 1 – In-House Hackathon\n- Role: Team Leader & UI/Presentation Designer\n- Duration: July 2026',
    image: '/src/assets/images/EcoSphere/Screenshot 2026-08-02 143653.png',
    gallery: [
      '/src/assets/images/EcoSphere/Screenshot 2026-08-02 143653.png'
    ],
    software: ['Canva', 'Vercel', 'AI Tools'],
    client: 'In-House Hackathon',
    date: 'July 2026',
    documentUrl: '/src/assets/images/EcoSphere/EcoSphere Development.pdf'
  },
  {
    id: 'proj-7',
    title: 'Brand Identity & Logo Design Showcase',
    category: 'Logo Design',
    description: 'Custom Logo Concepts, Brand Marks & Modern Visual Identity',
    longDescription: 'A curated collection of distinctive logo marks, vector emblems, brand mockups, and visual identity designs. Each design balances typography, minimal geometry, and memorable brand symbolism crafted for versatile digital and print applications.',
    image: '/src/assets/images/logos/Untitled Design.png',
    gallery: [
      '/src/assets/images/logos/Untitled Design.png',
      '/src/assets/images/logos/1.png',
      '/src/assets/images/logos/2.png',
      '/src/assets/images/logos/3.png',
      '/src/assets/images/logos/4.png',
      '/src/assets/images/logos/White Black Minimalist Mockup Cup Coffee Instagram Post.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_06_33 PM.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_06_39 PM.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_06_50 PM.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_06_57 PM.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_07_03 PM.png',
      '/src/assets/images/logos/ChatGPT Image Sep 26, 2026, 12_07_09 PM.png'
    ],
    software: ['Canva', 'Figma', 'Illustrator'],
    client: 'Brand & Identity Clients',
    date: '2026'
  }
];

export const skills: Skill[] = [
  {
    name: 'Graphic Design',
    category: 'Specializations',
    rating: 95,
    iconName: 'Palette',
    color: 'from-[#7C3AED] to-[#A855F7]',
    description: 'Creating creative and professional designs that communicate ideas clearly.'
  },
  {
    name: 'Canva',
    category: 'Core Tools',
    rating: 95,
    iconName: 'Compass',
    color: 'from-[#38BDF8] to-[#06B6D4]',
    description: 'Creating professional social media posts, posters, presentations, and branding designs with advanced design techniques. Level: Expert'
  },
  {
    name: 'Figma',
    category: 'Core Tools',
    rating: 65,
    iconName: 'Layers',
    color: 'from-[#06B6D4] to-[#38BDF8]',
    description: 'Creating basic UI layouts, wireframes, simple prototypes, and responsive designs while continuously improving my skills. Level: Beginner'
  },
  {
    name: 'Adobe Express',
    category: 'Core Tools',
    rating: 90,
    iconName: 'Sparkles',
    color: 'from-[#EC4899] to-[#8B5CF6]',
    description: 'Designing quick social media assets, marketing creatives, banners, and digital graphics using Adobe smart layout and typography tools. Level: Advanced'
  },
  {
    name: 'InShot',
    category: 'Core Tools',
    rating: 88,
    iconName: 'Video',
    color: 'from-[#F43F5E] to-[#FB7185]',
    description: 'Editing dynamic video reels, trimming clips, adding audio, subtitles, and formatting engaging short-form video content. Level: Advanced'
  },
  {
    name: 'UI Design',
    category: 'Specializations',
    rating: 70,
    iconName: 'Layout',
    color: 'from-[#06B6D4] to-[#7C3AED]',
    description: 'Creating clean and user-friendly interface designs with a focus on usability and visual appeal. Level: Beginner / Intermediate'
  },
  {
    name: 'Typography',
    category: 'Design Principles',
    rating: 90,
    iconName: 'Type',
    color: 'from-[#A855F7] to-[#EC4899]',
    description: 'Choosing the right fonts and arranging text to make designs clear, attractive, and easy to read. Level: Advanced'
  },
  {
    name: 'Brand Identity',
    category: 'Specializations',
    rating: 85,
    iconName: 'Award',
    color: 'from-[#7C3AED] to-[#06B6D4]',
    description: 'Designing logos, color palettes, and visual elements that create a consistent brand identity. Level: Advanced'
  },
  {
    name: 'Social Media Design',
    category: 'Specializations',
    rating: 95,
    iconName: 'Share2',
    color: 'from-[#D946EF] to-[#4F46E5]',
    description: 'Creating engaging social media posts, banners, and promotional graphics for different platforms. Level: Expert'
  },
  {
    name: 'Presentation Design',
    category: 'Specializations',
    rating: 90,
    iconName: 'Presentation',
    color: 'from-[#38BDF8] to-[#7C3AED]',
    description: 'Designing professional presentations with clean layouts, visuals, and easy-to-understand content. Level: Advanced'
  },
  {
    name: 'Color Theory',
    category: 'Design Principles',
    rating: 90,
    iconName: 'Droplet',
    color: 'from-[#EF4444] to-[#EC4899]',
    description: 'Using colors effectively to create attractive, balanced, and meaningful designs. Level: Advanced'
  },
  {
    name: 'Layout Design',
    category: 'Design Principles',
    rating: 90,
    iconName: 'Grid',
    color: 'from-[#10B981] to-[#06B6D4]',
    description: 'Organizing text, images, and graphics to create clean, balanced, and visually appealing layouts. Level: Advanced'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 'exp-1',
    type: 'work',
    organization: 'Colab Nation',
    role: 'Head of Design & Brand',
    duration: 'June 2026 – Present',
    description: 'Leading the organization\'s visual identity by designing branding assets, social media creatives, and marketing materials. Collaborating with different teams to maintain a consistent and professional brand presence.',
    location: 'Remote',
    isLeadership: true,
    iconName: 'Crown'
  },
  {
    id: 'exp-2',
    type: 'work',
    organization: 'Elite Coders Summer of Code (ECSOC)',
    role: 'Content Team Member',
    duration: 'June 2026 – Present',
    description: 'Contributed to the content team of an open-source program by creating engaging announcements, promotional content, and community updates. Supported participant engagement through creative communication and event branding.',
    location: 'Remote',
    iconName: 'Terminal'
  },
  {
    id: 'exp-3',
    type: 'work',
    organization: 'Elite HER',
    role: 'Content Team Member',
    duration: 'Mar 2026 – Apr 2026',
    description: 'Worked with the content team of this open-source initiative to create informative and engaging content. Helped promote community activities and encourage participation through impactful visual communication.',
    location: 'Remote',
    iconName: 'Sparkles'
  },
  {
    id: 'exp-4',
    type: 'work',
    organization: 'Elite Coders Winter of Code (ECWOC)',
    role: 'Content Team Member',
    duration: 'Nov 2025 – Mar 2026',
    description: 'Created promotional content and announcements for an open-source program. Assisted in increasing community engagement through well-designed digital content and event promotions.',
    location: 'Remote',
    iconName: 'Snowflake'
  },
  {
    id: 'exp-5',
    type: 'work',
    organization: 'NEC E-Cell, IIT Bombay',
    role: 'Content Team Member',
    duration: 'Jul 2025 – Aug 2025',
    description: 'Designed and managed content for entrepreneurship-focused initiatives, workshops, and events. Collaborated with the team to create engaging social media posts and promotional materials.',
    location: 'Remote',
    iconName: 'Lightbulb'
  },
  {
    id: 'exp-6',
    type: 'work',
    organization: 'GDG on Campus',
    role: 'Content Team Member',
    duration: 'Sep 2025 – May 2026',
    description: 'Contributed to creating promotional content and event communications for developer-focused workshops and technical events. Supported community outreach through creative digital content.',
    location: 'Ajmer, Rajasthan, India',
    iconName: 'Code'
  },
  {
    id: 'exp-7',
    type: 'work',
    organization: 'College Social Media Club',
    role: 'Team Member',
    duration: '2025 – Present',
    description: 'Designed posters, event promotions, and social media creatives to increase student engagement. Worked with the media team to maintain a consistent visual identity for college events.',
    location: 'Ajmer, Rajasthan, India',
    iconName: 'Share2'
  },
  {
    id: 'exp-8',
    type: 'work',
    organization: 'College Magazine Committee',
    role: 'Member',
    duration: 'June 2026 – Present',
    description: 'Contributed to magazine content planning, creative layouts, and publication design. Assisted in producing visually appealing magazine pages and editorial content.',
    location: 'Ajmer, Rajasthan, India',
    iconName: 'BookOpen'
  },
  {
    id: 'edu-1',
    type: 'education',
    organization: 'Govt Women Engineering College Ajmer',
    role: 'Bachelor of Technology (B.Tech), Computer Science & Engineering',
    duration: '2023 - 2027',
    description: 'Final-year B.Tech Computer Science student skilled in Python, UI/UX design, and problem-solving. Studies combining core computer science concepts with a strong passion for UI/UX design, creative design, and technology.',
    coursework: ['DAA', 'UI/UX Design', 'Software Development Life Cycle (SDLC) Models', 'Python'],
    location: 'Ajmer, Rajasthan, India'
  }
];

export const certificates: Certificate[] = [
  {
    id: 'cert-1',
    title: 'Google Cloud Study Jams – Cloud & GenAI Certification',
    organization: 'Google Cloud / GDG',
    date: '2025',
    image: '/src/assets/certificates/Screenshot 2026-08-03 175204.png',
    verifyUrl: '#'
  },
  {
    id: 'cert-2',
    title: 'Programming & Data Structures – Let Us Python Toward ML',
    organization: 'IEEE Certification',
    date: '2025',
    image: '/src/assets/certificates/Screenshot 2026-08-03 175232.png',
    verifyUrl: '#'
  },
  {
    id: 'cert-3',
    title: 'Infosys Springboard – Software & Design Professional',
    organization: 'Infosys',
    date: '2025',
    image: '/src/assets/certificates/Screenshot 2026-08-03 175302.png',
    verifyUrl: '#'
  },
  {
    id: 'cert-4',
    title: 'Sustainovation Hackathon & Creative Design Excellence',
    organization: 'Sustainovation 2025',
    date: '2025',
    image: '/src/assets/certificates/Screenshot 2026-08-03 175325.png',
    verifyUrl: '#'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Kartik Chilkoti',
    role: 'Collaborator',
    company: 'CoLab Nation',
    comment: 'Working with you has been an excellent experience. You consistently demonstrate professionalism, strong technical expertise, and a genuine commitment to delivering high-quality results. Your communication is clear, you\'re proactive in solving problems, and you always go the extra mile to ensure the work exceeds expectations. It\'s been a pleasure collaborating with you, and I would happily recommend you to anyone looking for a reliable and talented professional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Professional', 'Proactive', 'High-Quality']
  },
  {
    id: 'test-2',
    name: 'Keshav Jaiswal',
    role: 'Team Coordinator',
    company: 'Elite Coders (ECWoC & ECSoC)',
    comment: 'Nishtha has been a highly dedicated and reliable member across both the ECWoC and ECSoC teams. She consistently delivered high-quality content, took ownership of her work, and showed remarkable commitment throughout every phase. Her hard work, creativity, and professionalism have made her a valuable asset to the team, and I genuinely appreciate her contributions.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Dedicated', 'Creative', 'Reliable']
  },
  {
    id: 'test-3',
    name: 'Devanshi Parashar',
    role: 'Committee Lead',
    company: 'College Magazine Committee',
    comment: 'Working with her has been an absolute pleasure. As the Graphic Designer for our college magazine, she consistently delivered exceptional work, often completing tasks well before deadlines without compromising on quality. Her creativity, attention to detail, and strong design sense made a significant contribution to the success of the magazine. What truly sets her apart is her calm and composed nature. Even under pressure, she remains focused, organized, and dependable, ensuring every task is completed with excellence. She is highly dedicated, professional, and always willing to put in the extra effort when needed. I highly recommend her to anyone looking for a talented, reliable, and hardworking graphic designer.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Balanced', 'Detail Oriented', 'Impressive']
  },
  {
    id: 'test-4',
    name: 'Dhruvi',
    role: 'Team Member',
    company: 'NEC E-Cell, GWECA',
    comment: 'My experience with Nishtha was a valuable experience. She was always hardworking and completed the task on time. It was pleasure working with you. You were dedicated, reliable and always took ownership of your responsibilities. Wishing you continued success!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Dedicated', 'Reliable', 'Supportive']
  },
  {
    id: 'test-5',
    name: 'Tushar',
    role: 'Community Manager',
    company: 'Elite Coders',
    comment: 'It was a pleasure working together. The communication was excellent, deadlines were always met, and the final results exceeded expectations. I highly recommend their services.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Reliable', 'Professional', 'Trustworthy']
  },
  {
    id: 'test-6',
    name: 'Nishant',
    role: 'Founding Member',
    company: 'Elite Coders',
    comment: 'Your dedication to work is really helpful for the organizations. Keep up the same level of commitment and creativity; it truly makes a difference in every project you touch.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Dedicated', 'Impactful', 'Awesome']
  },
  {
    id: 'test-7',
    name: 'Dewanshi Bakliwal',
    role: 'Creative Team Lead',
    company: 'Google Developers Group on Campus GWECA',
    comment: 'You were a reliable and dedicated member of the creative team. Your designs were creative, timely and you were always open to feedback and improvements. Keep taking more initiative in sharing new ideas and continue exploring different creative approaches. Overall, it was a pleasure working with you and I appreciate your contribution to the team.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['Creative', 'Imaginative', 'Minimalistic']
  },
  {
    id: 'test-8',
    name: 'Jagruthi',
    role: 'Community Member',
    company: 'CoLab Nation',
    comment: 'It was really nice working with you, I love how you participate in the work enthusiastically and provide insightful ideas and feedback. You bring great energy to every team discussion and always keep the quality bar high.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=200&h=200',
    topWords: ['On Time', 'Great Quality', 'Insightful']
  }
];

export const services: Service[] = [
  {
    id: 'srv-1',
    title: 'Graphic Design',
    description: 'Creating creative and professional designs for both digital and print media.',
    iconName: 'Palette',
    gradientClass: 'from-[#7C3AED] via-[#A855F7] to-[#EC4899]',
    features: ['Posters and banners', 'Social media graphics', 'Vector illustrations', 'Print-ready designs']
  },
  {
    id: 'srv-2',
    title: 'Brand Identity',
    description: 'Designing logos and visual elements that help create a strong and consistent brand.',
    iconName: 'Award',
    gradientClass: 'from-[#4F46E5] via-[#7C3AED] to-[#EC4899]',
    features: ['Logo design', 'Brand colors', 'Typography selection', 'Brand guidelines']
  },
  {
    id: 'srv-3',
    title: 'Social Media Design',
    description: 'Creating engaging social media posts and promotional graphics for different platforms.',
    iconName: 'Share2',
    gradientClass: 'from-[#D946EF] via-[#A855F7] to-[#4F46E5]',
    features: ['Instagram posts', 'Carousels', 'Story designs', 'Promotional graphics']
  },
  {
    id: 'srv-4',
    title: 'Poster Design',
    description: 'Designing creative posters for events, workshops, competitions, and campaigns.',
    iconName: 'Sparkles',
    gradientClass: 'from-[#EF4444] via-[#F59E0B] to-[#EF4444]',
    features: ['Event posters', 'Promotional posters', 'Creative layouts', 'Print-ready posters']
  },
  {
    id: 'srv-5',
    title: 'Presentation Design',
    description: 'Creating professional presentations that are clean, attractive, and easy to understand.',
    iconName: 'Presentation',
    gradientClass: 'from-[#38BDF8] via-[#06B6D4] to-[#7C3AED]',
    features: ['Pitch decks', 'College presentations', 'Infographics', 'Business presentations']
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the project goals, target audience, and design requirements. Build a clear plan before starting the creative process.',
    iconName: 'Compass',
    colorClass: 'text-[#06B6D4] border-[#06B6D4]'
  },
  {
    step: '02',
    title: 'Research',
    description: 'Explore design trends, color palettes, fonts, and visual inspiration. Collect ideas that match the project\'s style and purpose.',
    iconName: 'Search',
    colorClass: 'text-[#38BDF8] border-[#38BDF8]'
  },
  {
    step: '03',
    title: 'Create',
    description: 'Design creative and professional visuals using Canva. Focus on clean layouts, attractive colors, and clear communication.',
    iconName: 'Palette',
    colorClass: 'text-[#7C3AED] border-[#7C3AED]'
  },
  {
    step: '04',
    title: 'Refine',
    description: 'Improve the design by adjusting typography, spacing, colors, and alignment. Ensure every element looks balanced, polished, and visually appealing.',
    iconName: 'Sparkles',
    colorClass: 'text-[#A855F7] border-[#A855F7]'
  },
  {
    step: '05',
    title: 'Review',
    description: 'Carefully review the design for quality, consistency, and accuracy. Make revisions based on feedback to achieve the best final result.',
    iconName: 'Eye',
    colorClass: 'text-[#EC4899] border-[#EC4899]'
  },
  {
    step: '06',
    title: 'Deliver',
    description: 'Export high-quality files optimized for digital platforms or print. Provide designs that are ready to use and meet the project requirements.',
    iconName: 'CheckCircle2',
    colorClass: 'text-[#10B981] border-[#10B981]'
  }
];
