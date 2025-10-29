const SOURCE = {
	creation_year: 2025,
	src: 'https://github.com/kwildeDev/portfolio-app'
};

const PERSONAL = {
	name: 'Katherine Wilde',
	first_name: 'Katherine',
	surname: 'Wilde',
	role: 'Software Developer',
	introduction:
		'Junior software developer focused on creating dynamic full-stack applications that combine user-friendly design with robust backend functionality.',
	location: 'Manningtree, England',
	cv_url: '/KatherineWilde-CV.pdf'
};

const SKILLS = {
	specializations: ['Software Engineering', 'Full-Stack Development'],
	programmingLanguages: [
		{ name: 'JavaScript', icon: '/photos/JavaScript.svg', category: 'frontend' },
		{ name: 'TypeScript', icon: '/photos/TypeScript.svg', category: 'frontend' },
		{ name: 'Python', icon: '/photos/Python.svg', category: 'backend' },
		{ name: 'Java', icon: '/photos/Java.svg', category: 'backend' },
		{ name: 'SQL', icon: '/photos/sql-database-generic-svgrepo-com.svg', category: 'backend' },
		{ name: 'HTML', icon: '/photos/HTML5.svg', category: 'frontend' },
		{ name: 'CSS', icon: '/photos/CSS3.svg', category: 'frontend' }
	],
	technologies: [
		{ name: 'React', icon: '/photos/React.svg', category: 'frameworks' },
		{ name: 'React Native', icon: '/photos/React.svg', category: 'frameworks' },
		{ name: 'Node.js', icon: '/photos/Node.js.svg', category: 'frameworks' },
		{ name: 'Express', icon: '/photos/Express.svg', category: 'frameworks' },
		{ name: 'Svelte', icon: '/photos/Svelte.svg', category: 'frameworks' },
		{ name: 'Sveltekit', icon: '/photos/Svelte.svg', category: 'frameworks' },
		{ name: 'PostgreSQL', icon: '/photos/PostgresSQL.svg', category: 'databases' },
		{ name: 'Git', icon: '/photos/Git.svg', category: 'version_control' },
		{ name: 'GitHub', icon: '/photos/GitHub.svg', category: 'version_control' },
		{ name: 'Jest', icon: '/photos/Jest.svg', category: 'testing' },
		{ name: 'Bootstrap', icon: '/photos/Bootstrap.svg', category: 'ui_ux' },
		{ name: 'Material UI', icon: '/photos/Material-UI.svg', category: 'ui_ux' },
		{ name: 'WordPress', icon: '/photos/WordPress.svg', category: 'ui_ux' },
		{ name: 'Tailwind CSS', icon: '/photos/Tailwind-CSS.svg', category: 'ui_ux' },
		{ name: 'Chakra UI', icon: '/photos/icons8-chakra-ui.svg', category: 'ui_ux' }
	]
};

const CONTACTS = [
	{
		actionType: 'Go to my GitHub profile',
		viewBox: '0 0 496 512',
		path: 'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
		url: 'https://github.com/kwildeDev'
	},
	{
		actionType: 'Go to my LinkedIn profile',
		viewBox: '0 0 448 512',
		path: 'M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z',
		url: 'https://www.linkedin.com/in/katherine-wilde'
	}
];


const ABOUT = {
	paragraphs: [
		`I began my career in software development in the late 1990s to early 2000s as an analyst programmer, working on bespoke business ERP systems. While my career took a different direction after that, my passion for creating software remained strong, and it was always my goal to return to it.`,
		`I started building websites as a hobby and volunteered for various projects. During a role in a school office, I developed an interest in Python and its potential for automation. Since then, I’ve been focused on expanding my knowledge through courses from Code First Girls, along with self-directed learning and personal projects. More recently, completing a JavaScript bootcamp with Northcoders has deepened my expertise and broadened my understanding.`,
		`Working on projects—whether solo or collaboratively—lets me merge creativity with problem-solving, which I find especially rewarding. I enjoy creating solutions that have a meaningful impact and help improve people's lives.`
	],
	experience: [
		{
			id: 1,
			company: 'Tech Returners',
			jobTitle: 'Freelance Project Consultant',
			startDate: 'April 2025',
			endDate: 'May 2025',
			location: 'Remote/Online',
			description: [
				'I worked as a freelance consultant on the Launchpad project, delivering a bespoke community-focused events platform that enables local organisations to manage and share events.',
				'Over the course of 4 weeks, I planned, architected, built, and deployed a full-stack MVP using React, Node.js, and PostgreSQL.',
				'The platform features a modular and scalable architecture with full WCAG compliance and a perfect Lighthouse accessibility score.',
				'After launch, I resolved multiple GitHub issues and ensured stable deployments across Netlify, Render, and Supabase to deliver a seamless user experience.'
			],
			photo: { src: '', alt: '' }
		},
		{
			id: 2,
			company: 'Northcoders',
			jobTitle: 'Software Development Student/JavaScript Student',
			startDate: 'September 2024',
			endDate: 'November 2024',
			location: 'Remote/Online',
			description: [
				'Northcoders Software Development Bootcamp in JavaScript:',
				'A 13-week industry-focused training course covering all the most relevant skills and technologies required for job readiness in a full-stack web development role.',
				'During this course, I gained valuable skills in collaboration and teamwork, whilst building my Javascript and React knowledge through daily sprints including pair programming and individual tasks.',
				'I have become proficient in test-driven development, now a standard practice in my workflow which guided my backend work. I learnt to debug issues in React apps by using browser developer tools to analyse and inspect issues in real time, which greatly enhanced my understanding of frontend development.'
			],
			photo: { src: '/photos/northcoders-icon.jpg', alt: 'Northcoders company logo' }
		},
		{
			id: 3,
			company: 'Manningtree High School',
			jobTitle: 'Data Administrator',
			startDate: 'July 2022',
			endDate: 'January 2024',
			location: 'Manningtree',
			description: [
				'Managed school management information systems (ESS SIMS, Go 4 Schools, ALPS Education), overseeing data collection, processing, analysis, and reporting to stakeholders.',
				'Developed expertise in educational MIS, including key performance measures, methodologies, and data challenges. Utilised Excel for data manipulation and formatting, demonstrating a strong understanding of data types and complex formulae. Explored automation opportunities and digitised a paper-based process for improved efficiency.',
				'Improved operational efficiency by supporting the finance team through managing payment items and procurement processes and ensuring accurate financial records.'
			],
			photo: { src: '/photos/mhs-logo.png', alt: 'Manningtree High School logo' }
		},
		{
			id: 4,
			company: 'Altorian Chartered Accountants',
			jobTitle: 'Trainee Accountant',
			startDate: 'June 2021',
			endDate: 'November 2021',
			location: 'Manningtree',
			description: [
				'Work experience in October 2020 resulted in a permanent role. Demonstrated proficiency in various accounting software (Excel, VT Transaction+, Sage, Xero, QuickBooks, FreeAgent, BTC Transaction) for accurate and detailed bookkeeping tasks, including journal postings and ledger reconciliations.',
				'Executed accurate personal and business tax returns for micro entity companies and sole traders, ensuring compliance with financial regulations through meticulous analysis and effective client communication.'
			],
			photo: { src: '/photos/icons8-account-64.png', alt: '' }
		},
		{
			id: 5,
			company: 'Manningtree High School',
			jobTitle: 'Exam Invigilator (Lead)',
			startDate: 'February 2015',
			endDate: 'June 2022',
			location: 'Manningtree',
			description: [
				'Coordinated detailed exam procedures, ensuring adherence to standards and student data confidentiality. Managed all aspects of exams, from setup to post-exam processes, while effectively leading a team of invigilators.'
			],
			photo: { src: '/photos/mhs-logo.png', alt: 'Manningtree High School logo' }
		},
		{
			id: 6,
			company: 'Self-employed',
			jobTitle: 'Alterations Specialist',
			startDate: 'January 2015',
			endDate: 'July 2017',
			location: 'Manningtree',
			description: [
				'Delivered precise and high-quality alterations tailored to client needs, demonstrating meticulous attention to detail and the ability to customise solutions.'
			],
			photo: { src: '/photos/sewing-icon.jpeg', alt: '' }
		},
		{
			id: 7,
			company: 'Stour Choral Society',
			jobTitle: 'Volunteer Website Editor',
			startDate: 'September 2013',
			endDate: 'October 2020',
			location: 'Manningtree',
			description: [
				'Developed and launched a new website while self-learning HTML and CSS, and exploring JavaScript and PHP. Collaborated effectively with the committee and members to ensure the website met their needs.',
				'Maintained ongoing comprehensive updates, ensuring continuous user-friendly experience. Updated the website to WordPress for streamlined maintenance by team members and to enhance its useability.'
			],
			photo: { src: '/photos/scs-icon.png', alt: 'Stour Choral Society logo' }
		},
		{
			id: 8,
			company: 'Stour Choral Society',
			jobTitle: 'Honorary Treasurer',
			startDate: 'September 2008',
			endDate: 'October 2019',
			location: 'Manningtree',
			description: [
				'Managed financial operations, ensuring compliance with accounting standards, while overseeing budgeting, reporting, and reconciliations. Led strategic planning, including financial statements, Gift Aid management, and submissions to the Charities Commission.'
			],
			photo: { src: '/photos/scs-icon.png', alt: 'Stour Choral Society logo' }
		}
	],
	education: [
		{
			id: 1,
			school: 'University of Sheffield',
			degree: 'Bachelor of Music (Hons)',
			graduationDate: '1996',
			photo: { src: '/photos/uos-crest.svg', alt: 'University of Sheffield logo' }
		}
	]
};

const PROJECTS = [
	{
		id: 1,
		title: 'Club Ledger',
		organisation: '',
		year: '2025',
		type: 'C# and Razor Pages Development',
		description: [
			'This project is an ASP.NET Core Razor Pages bookkeeping application aimed at club treasurers, built with C#. The SQL Server database is run via Docker. Styling is managed using SASS extending Bootstrap.',
			'The core technical achievement is the "behind the scenes" Double-Entry Logic Engine.', 
			'I designed the system to fully automate financial integrity: the user only inputs key transaction components, and the system automatically generates the required paired LedgerLine records for every JournalEntry.', 
			'This abstraction simplifies user interaction while enforcing strict accounting rules defined in core models like JournalEntry, LedgerLine, Account, and Contact.',
			'The project is in progress. All fundamental models and database migrations are complete, and basic CRUD pages for data creation and viewing are functional.', 
			'Next steps focus on finalizing the transaction automation logic and integrating the SASS front-end compilation.',
		],
		photo: { src: '', alt: '' },

		link: 'https://github.com/kwildeDev/club-ledger',
		skills: ['C#', 'ASP.NET Core', 'Razor Pages']
	},
	{
		id: 2,
		title: 'Meds Manager',
		organisation: '',
		year: '2025',
		type: 'React Native Mobile App',
		description: [
			'This React Native mobile app focuses on medication and prescription management, built under the constraints of the Expo Snack environment (due to local emulator issues). I implemented the core Creation, Reading, and Deletion logic for medications and their daily reminders.',
			'The most challenging technical feature completed so far is the dynamic form management for adding array fields (multiple dose reminders) using React Hook Form. I architected the prescription tracker using a State Machine pattern to handle the entire, complex refill process, from setting low stock warnings to scheduling collection reminders.',
			'The project is in progress. Immediate next steps include implementing update (edit) functionality, integrating Expo Notifications, and migrating data from AsyncStorage to Firebase Firestore to enable secure cloud sync and improve application permanence.',
		],
		photo: { src: '/photos/meds-manager.png', alt: 'Meds Manager Home Screen' },

		link: 'https://github.com/kwildeDev/meds-manager',
		skills: ['React Native', 'React Native Paper']
	},
	{
	    id: 3,
	    title: 'Scene Locally',
	    organisation: 'Tech Returners Launchpad',
	    year: 'May 2025',
	    type: 'Full Stack Web App',
	    description: [
	 			'A full-stack community events platform designed to help local organisations create, manage, and promote events while allowing community members to browse and register for events.',
				'Built as part of the Tech Returners Launchpad programme with a focus on scalability, accessibility, and user experience.',
				'  「 ✦ Key Features: ✦ 」  ',
  				'• Full-stack app built with React, TypeScript, Chakra UI, Node.js, Express, and PostgreSQL',
  				'• Multi-role user system (Attendee, Organiser, Admin) with secure JWT authentication',
  				'• Integrated \'Add to Google Calendar\' feature using prefilled event links',
  				'• Refactored forms into 7 modular components and 6 custom hooks for maintainability',
  				'• Achieved 100 Lighthouse Accessibility score across all pages (semantic HTML, ARIA roles, contrast, keyboard navigation)',
  				'• Implemented dark mode toggle with full compatibility across Chakra UI, React Select, and custom components',
  				'• Used Zod and React Hook Form for robust form validation and custom warning/success/error toasts',
  				'• Centralised user state management with context providers to eliminate prop-drilling',
  				'• Deployed across Netlify (frontend), Render (backend), and Supabase (database)',
  				'• Closed 13 GitHub issues post-delivery and received strong client feedback for accessibility, architecture, and UX'
			],		
	    photo: { src: '/photos/scene-locally.png', alt: 'Scene Locally homepage' },
		link: 'https://github.com/kwildeDev/fe-scene-locally',
		skills: ['TypeScript', 'React', 'Chakra UI', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
	},
	{
		id: 4,
		title: 'Portfolio App',
		organisation: '',
		year: 'December 2024',
		type: 'Svelte Web App',
		description: [
			'A personal portfolio website built with Svelte and Tailwind CSS to showcase my skills, projects and experience.',
			'Features include smooth scrolling navigation, expandable sections for work experience, smooth fade-in animations on scroll, and a fully responsive design.',
			'It also includes links to social media and a contact form managed through Netlify, making it easier for users to engage. This creates an engaging platform for potential employers and collaborators.',
		],
		photo: { src: '', alt: '' },

		link: 'https://github.com/kwildeDev/portfolio-app',
		skills: ['JavaScript', 'Sveltekit', 'Tailwind CSS']
	},
	{
		id: 5,
		title: 'Time Treasures',
		organisation: 'Northcoders',
		year: 'November 2024',
		type: 'React Native Mobile App',
		description: [
			'A mobile application built with React Native and Expo, aimed at helping users improve time management through gamification.',
			'Users can complete tasks within time limits, earn gems, and track progress with routines and graphs.',
			'The app was designed for cross-platform functionality, with a backend powered by Express and PostgreSQL.'
		],
		photo: { src: '/photos/tt-timer.png', alt: 'Time Treasures timer page' },

		link: 'https://github.com/TTibbs/time-treasures-backend',
		skills: ['JavaScript', 'React Native', 'Node.js', 'PostgreSQL', 'Victory Native XL', 'Redux']
	},
	{
		id: 6,
		title: 'NC News',
		organisation: 'Northcoders',
		year: 'October 2024 to present',
		type: 'Full Stack Web App',
		description: [
			'This full-stack web application, developed during the Northcoders Bootcamp, offers a mobile-first platform for browsing and interacting with news articles.',
			'It features a responsive design, a RESTful API with Express and PostgreSQL, and a React frontend.',
			'Key functionalities include article filtering, sorting, voting, and commenting, all backed by comprehensive testing for reliability.'
		],
		photo: { src: '/photos/ncnews-home-light.png', alt: 'NC News homepage' },

		link: 'https://github.com/kwildeDev/fe-nc-news',
		skills: ['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'React', 'Material UI']
	},
	{
		id: 7,
		title: 'Recipe Search using Edamam API',
		organisation: 'Code First Girls',
		year: 'February 2024',
		type: 'Python App',
		description: [
			'This project was completed as part of the Coding Kickstarter course in Python delivered by Code First Girls. It used the Edamam API to create a Python-based recipe search tool, allowing users to find recipes by ingredients.',
			'It highlighted my skills in Python, API integration, data handling, and secure key management. Completed collaboratively, it received positive feedback for its organisation, error handling, and focus on data security.',
			'Proposed improvements include saving search results and refining recipe selection to enhance the user experience.'
		],
		photo: { src: '', alt: '' },

		link: 'https://github.com/kwildeDev/py_recipe_search',
		skills: ['Python']
	}
];

const DATA = {
	SOURCE,
	PERSONAL,
	SKILLS,
	CONTACTS,
	ABOUT,
	PROJECTS
};

export default DATA;
