/**
 * Single source of truth for every fact on this site.
 * Keep in sync with the PDFs in src/file/ — nothing here should be
 * unsupported by the CV, the resume, or the research statements.
 */

export const identity = {
	name: "Olaitan Lekan Adeniyi",
	shortName: "Olaitan Adeniyi",
	role: "Systems Engineer & Full-Stack Architect",
	discipline: "Agricultural & Environmental Engineering",
	location: "Ibadan, Nigeria",
	email: "adeniyi.olaitanhector@yahoo.com",
	academicEmail: "adeniyi.olaitanhector1@gmail.com",
	phone: "+234 813 498 9522",
	phoneHref: "+2348134989522",
	linkedin: "https://www.linkedin.com/in/deniyiola",
	github: "https://github.com/HectorGitt",
	writing: "https://medium.com/@deniyi_dev",
	site: "deniyi.link",
};

/** Drives the title block STATUS cell and the contact sheet. */
export const availability = {
	seeking: [
		"Doctoral or thesis-based master's positions in robotics, perception and autonomous systems — 2027 entry",
		"Visa-sponsored software roles — backend, data platform, applied AI",
	],
	relocation: "Available to relocate",
	sponsorship: "Requires visa sponsorship",
	passport: "Nigerian passport",
	notice: "Two weeks",
	revision: "2026.09",
};

/**
 * Hero readings: a measured value, its unit, and where it came from.
 * Every entry is traceable to a line in the CV or resume.
 */
export const readings = [
	{
		value: "98.7",
		unit: "%",
		label: "Processing latency removed",
		note: "Neo4j and Pandas pipeline, two hours down to ninety seconds",
		source: "Peepalytics",
	},
	{
		value: "4.52",
		unit: "/ 5.00",
		label: "Degree CGPA, First Class Honours",
		note: "B.Sc Agricultural & Environmental Engineering",
		source: "Obafemi Awolowo University",
	},
	{
		value: "1st",
		unit: "in cohort",
		label: "Overall Best Graduating Student",
		note: "Department of Agricultural & Environmental Engineering",
		source: "Class of 2025",
	},
	{
		value: "99.9",
		unit: "%",
		label: "Production service reliability",
		note: "Polyglot estate: Postgres, Neo4j, vector and time-series stores",
		source: "Peepalytics",
	},
];

export const positioning = {
	lede: "I build systems that have to obey physics as well as a spec — routing engines, telemetry pipelines and agent networks whose correctness you can measure rather than argue about.",
	body: [
		"My training is in agricultural and environmental engineering: thermodynamics, fluid mechanics, machine design, the rheology of biological materials. That is where I learned to distrust a claim until it carries a number and a method. I graduated top of my department with First Class Honours.",
		"For six years I have been applying the same discipline in software. At Peepalytics I architected the ETL infrastructure on Airflow and Kafka, took a Neo4j and Pandas workload from two hours to ninety seconds, and now lead the technical roadmap for our RAG and multi-agent systems on AWS. Before that I shipped frontend platforms, IAM services and high-traffic Django backends across four teams.",
		"The two halves meet in my project work. EagleSight solves vehicle routing with mixed-integer programming, then predicts engine failure from a fluid-mechanics model of live telemetry. Copernican integrates orbital mechanics against NASA's live EONET feed. Locus coordinates seven specialised agents to plan against real-world constraints. Operations research on one side, production engineering on the other.",
	],
	nowPursuing:
		"I am looking for two things: a research group working on perception and autonomy for machines that operate in the physical world, and software work where optimisation and reliability actually matter. I need visa sponsorship and I am ready to move.",
};

export const experience = [
	{
		org: "Peepalytics",
		orgNote: "AI · United States",
		role: "Full-Stack Software & Infrastructure Engineer (Lead)",
		roleAlt: "Founding engineer",
		start: "Jun 2024",
		end: "Present",
		mode: "Remote",
		metrics: [
			{ value: "98.7%", label: "retrieval latency cut" },
			{ value: "60x", label: "faster ETL" },
			{ value: "50%", label: "lower cloud spend" },
		],
		points: [
			"Architected high-performance API workflows in Django and FastAPI, serving complex data visualisations to Next.js frontends.",
			"Engineered the ETL infrastructure on Apache Airflow and Kafka, achieving a 60x reduction in processing time and cutting memory overhead.",
			"Directed the technical roadmap for AI systems, deploying RAG architectures and multi-agent workflows over the Model Context Protocol that reduced data retrieval latency by 98.7%.",
			"Optimised cloud expenditure with usage-based tiering on AWS, halving monthly deployment costs.",
			"Mentored a team of engineers in distributed systems patterns, holding 99.9% reliability across a polyglot database environment.",
		],
		stack: [
			"Python",
			"Django",
			"FastAPI",
			"Airflow",
			"Kafka",
			"Neo4j",
			"PostgreSQL",
			"AWS Bedrock",
			"SageMaker",
			"Docker",
		],
	},
	{
		org: "Stealth Network",
		orgNote: "Web3",
		role: "Frontend Engineer",
		start: "Mar 2023",
		end: "Oct 2024",
		mode: "Remote",
		metrics: [{ value: "30%", label: "faster feature delivery" }],
		points: [
			"Architected a reusable UI component library in React and TypeScript, reducing development time for new features by 30%.",
			"Optimised frontend asset loading strategies, improving First Contentful Paint across the platform.",
		],
		stack: ["React", "TypeScript", "Design systems", "Web performance"],
	},
	{
		org: "Stitch Technologies",
		orgNote: "",
		role: "Full-Stack Engineer",
		start: "Mar 2022",
		end: "Sep 2023",
		mode: "Remote",
		metrics: [],
		points: [
			"Designed a high-traffic sweepstakes engine in Django, tuning database queries to absorb concurrent user spikes.",
			"Implemented secure identity and access management with Flask, meeting data privacy audit requirements.",
			"Containerised microservices with Docker and Kubernetes, enabling rapid CI/CD cycles on AWS.",
		],
		stack: ["Django", "Flask", "Kubernetes", "Docker", "Celery", "Redis"],
	},
	{
		org: "Tribinnov Africa",
		orgNote: "",
		role: "Frontend Engineer, Intern",
		start: "Nov 2021",
		end: "May 2022",
		mode: "Remote",
		metrics: [],
		points: [
			"Developed responsive consumer-facing interfaces in React, translating UX designs into interactive applications.",
			"Engineered modular, reusable frontend components that improved codebase scalability.",
			"Maintained platform stability through rigorous debugging and disciplined version control.",
		],
		stack: ["React", "Redux", "SCSS", "Git"],
	},
	{
		org: "Majestik Ltd",
		orgNote: "",
		role: "Technical Instructor & Mentor",
		start: "Oct 2020",
		end: "Jul 2021",
		mode: "Remote",
		metrics: [],
		points: [
			"Mentored students in C and Java, breaking down memory management, pointers and object-oriented design.",
			"Taught database design in MySQL: schema normalisation, SQL optimisation and relational modelling.",
			"Delivered a full-stack curriculum in Python and PHP, from syntax to working web applications.",
		],
		stack: ["C", "Java", "MySQL", "Python", "PHP"],
	},
];

/** Engineering practice from the academic CV — matters to admissions, not to a software screen. */
export const fieldPractice = [
	{
		org: "Fanmilk PLC",
		role: "Safety, Health & Environment Officer, Intern",
		start: "Apr 2024",
		end: "Sep 2024",
		location: "Ibadan, Nigeria",
		points: [
			"Ran effluent and water treatment operations, monitoring wastewater and treated water against environmental compliance standards.",
			"Conducted air, water and noise monitoring including ATEX zone assessments.",
			"Facilitated safety induction training for staff and expatriates on workplace hazards and permit-to-work systems.",
			"Worked alongside dairy processing lines, building first-hand knowledge of production systems and preventive maintenance.",
		],
	},
	{
		org: "Central Technological Laboratory Workshops",
		role: "Engineering Intern",
		start: "Jul 2023",
		end: "Sep 2023",
		location: "Osun, Nigeria",
		points: [
			"Contributed to the design and fabrication of food processing machines, including a rice dehuller and a plantain slicer.",
			"Worked machining processes: turning, facing, knurling, boring and drilling.",
			"Participated in fabrication and welding — assembly, repair and modification of equipment and facility structures.",
			"Assisted operations at the University Palm Oil Processing Unit.",
		],
	},
];

export const teaching = [
	{
		org: "Agricultural & Environmental Engineering Student Society",
		role: "Academic Tutor",
		start: "Feb 2021",
		end: "Jul 2025",
		points: [
			"Ran tutorials with the departmental president in CSC201 Computer Programming, AEE305 and AEE306 Applied Engineering Thermodynamics, and AEE407 Design of Agricultural & Food Processing Machines.",
			"Prepared learning materials and sample examination questions across test and exam periods.",
		],
	},
	{
		org: "Redeemed Christian Fellowship, OAU",
		role: "Academic Secretary",
		start: "Jun 2024",
		end: "Jul 2025",
		points: [
			"Held one-to-one counselling and mentorship sessions with students facing academic difficulty, with structured follow-up.",
			"Organised talks and workshops on time management, study habits and using lecture-free weeks well.",
			"Facilitated tutorials for freshmen through the semester, including overnight sessions.",
		],
	},
	{
		org: "Redeemed Christian Fellowship, OAU",
		role: "Physics Tutor",
		start: "Oct 2020",
		end: "Jun 2021",
		points: [
			"Volunteered to teach PHY101 Introductory Physics to freshmen: calculus, set theory, statistics and mechanics.",
			"Coached students on examination preparation and study strategy.",
		],
	},
];
