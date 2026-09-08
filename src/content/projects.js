import closetic from "../images/projects/closetic.webp";
import codeity from "../images/projects/codeity.webp";
import collat from "../images/projects/collat.webp";
import copernican from "../images/projects/copernican.webp";
import dashboard from "../images/projects/dashboard.webp";
import datcaptures from "../images/projects/datcaptures.webp";
import defimentum from "../images/projects/defimentum.webp";
import dropmint from "../images/projects/dropmint.webp";
import getlinked from "../images/projects/getlinked.webp";
import hypertrove from "../images/projects/hypertrove.webp";
import outlook from "../images/projects/outlook.webp";
import adacubator from "../images/projects/adacubator.webp";
import avera from "../images/projects/avera.webp";
import softplayer from "../images/projects/softplayer.webp";
import streamlab from "../images/projects/streamlab.webp";

/**
 * Project demos live on subdomains of the production domain. This is pinned
 * rather than read from window.location so the links stay correct on
 * localhost, on preview deploys, and anywhere else the site is served.
 */
const host = "deniyi.link";

export const disciplines = [
	{ id: "all", label: "All" },
	{ id: "or", label: "Optimisation & simulation" },
	{ id: "ai", label: "Applied AI & agents" },
	{ id: "platform", label: "Platforms" },
	{ id: "web3", label: "Web3" },
];

/**
 * `image: null` renders a drafting placeholder rather than a wrong screenshot.
 * Drop a WebP into src/images/projects/ and import it above to fill one in.
 */
export const selected = [
	{
		id: "eaglesight",
		name: "EagleSight",
		kind: "Fleet logistics & diagnostics engine",
		discipline: "or",
		year: "2025",
		image: null,
		summary:
			"A scheduling engine for the Tractor-on-the-Go ecosystem. It solves vehicle routing problems with time windows using linear and mixed-integer programming to minimise fuel cost, then runs a second, physical model on top: a fluid-mechanics diagnostic that correlates live location against telemetry to predict engine breakdown before it strands a machine mid-operation.",
		method: [
			{ label: "Formulation", value: "VRPTW as MIP, solved with Google OR-Tools" },
			{ label: "Diagnostic", value: "Fluid-mechanics model over real-time telemetry" },
			{ label: "Objective", value: "Minimise fuel cost subject to time windows" },
		],
		stack: ["Python", "OR-Tools", "MIP", "Telemetry", "FastAPI"],
		links: [
			{ label: "Live", href: "https://eaglesight.deniyi.link/" },
			{
				label: "Write-up",
				href: "https://medium.com/@deniyi_dev/building-eaglesight-a-next-gen-fleet-management-system-c29aa3b5ba80",
			},
		],
	},
	{
		id: "locus",
		name: "Locus",
		kind: "Distributed multi-agent routing system",
		discipline: "ai",
		year: "2025",
		image: null,
		summary:
			"A distributed AI system built on Google's Agent Development Kit that coordinates seven specialised agents — pathfinding, travel cost, safety, weather and air quality among them — to plan against real-world constraints in real time. Built as a demonstration that autonomous dispatch can be decomposed into agents that each hold one competence.",
		method: [
			{ label: "Topology", value: "Seven specialised agents under one orchestrator" },
			{ label: "Framework", value: "Google Agent Development Kit" },
			{ label: "Inputs", value: "Live cost, safety, weather and air-quality feeds" },
		],
		stack: ["Python", "Google ADK", "Multi-agent", "Cloud Run"],
		links: [
			{
				label: "Live",
				href: "https://locus-agent-service-380433705339.us-central1.run.app/",
			},
			{
				label: "Write-up",
				href: "https://medium.com/@deniyi_dev/building-locus-a-multi-agent-ai-travel-assistant-from-scratch-53fb89125ba7",
			},
		],
	},
	{
		id: "copernican",
		name: "Copernican",
		kind: "Solar system & Earth simulator",
		discipline: "or",
		year: "2025",
		image: copernican,
		summary:
			"An interactive 3D simulation of the solar system that integrates orbital mechanics for planetary motion and sunlight dynamics, then overlays live natural-hazard events pulled from NASA's EONET API onto the Earth model. Scientific accuracy and browser performance held against each other.",
		method: [
			{ label: "Physics", value: "Keplerian orbital integration, sunlight dynamics" },
			{ label: "Live data", value: "NASA EONET natural event feed" },
			{ label: "Renderer", value: "Three.js over Vite" },
		],
		stack: ["Three.js", "JavaScript", "Vite", "NASA EONET"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/copernican" },
			{ label: "Live", href: `https://copernican.${host}` },
			{
				label: "Write-up",
				href: "https://medium.com/@deniyi_dev/building-the-copernican-solar-system-and-earth-simulator-with-live-nasa-eonet-data-e46798b97923",
			},
		],
	},
	{
		id: "glance-glamour",
		name: "Glance & Glamour",
		kind: "Virtual try-on with image-to-3D avatars",
		discipline: "ai",
		year: "2025",
		image: avera,
		summary:
			"A try-on platform that turns an uploaded photograph into a 3D body avatar before any garment goes on it. The preview is a real mesh the wearer can orbit rather than a rendered turntable, checked against fit measurements first. I built the platform and its onboarding, and the serving layer underneath: TripoSG — an open image-to-3D rectified-flow model — put behind a FastAPI inference API and containerised on a PyTorch CUDA image for GPU deployment.",
		method: [
			{ label: "Generation", value: "TripoSG image-to-3D, served behind FastAPI" },
			{ label: "Runtime", value: "CUDA container for GPU inference" },
			{ label: "Interface", value: "Orbitable mesh preview with fit measurements" },
		],
		stack: ["Python", "FastAPI", "TripoSG", "Docker", "CUDA"],
		// The frontend repo is private, so it 404s for visitors and is not linked.
		links: [
			{ label: "Backend", href: "https://github.com/HectorGitt/avera-backend" },
			{ label: "3D service", href: "https://github.com/HectorGitt/avera" },
		],
	},
	{
		id: "enzo",
		name: "Enzo",
		kind: "Zero-touch career copilot",
		discipline: "ai",
		year: "2025",
		image: null,
		summary:
			"A career management platform that ingests GitHub webhooks in real time and keeps a resume and portfolio current without being asked. An agentic RAG system on Gemini 2.5 Flash reads commit history and applies semantic filtering to separate low-impact noise from work that is actually worth claiming.",
		method: [
			{ label: "Trigger", value: "Real-time GitHub webhook ingestion" },
			{ label: "Reasoning", value: "Agentic RAG on Gemini 2.5 Flash" },
			{ label: "Hard part", value: "Semantic filtering of noise from signal" },
		],
		stack: ["Python", "Gemini 2.5 Flash", "RAG", "Webhooks", "Vector search"],
		links: [{ label: "Live", href: "https://enzo.stabilty.com/" }],
	},
	{
		id: "watchway",
		name: "WatchWay",
		kind: "Civic geospatial reporting engine",
		discipline: "or",
		year: "2025",
		image: null,
		summary:
			"A smart-city reporting platform that takes GIS telemetry from citizen reports and ranks infrastructure repairs by hazard severity through a priority-queue algorithm, so municipal crews are dispatched against risk rather than against whoever complained loudest.",
		method: [
			{ label: "Ranking", value: "Priority queue keyed on hazard severity" },
			{ label: "Input", value: "GIS telemetry from civic reports" },
			{ label: "Output", value: "Ordered municipal resource allocation" },
		],
		stack: ["TypeScript", "React", "Python", "GIS", "Priority queues"],
		links: [
			{ label: "Live", href: "https://watchway.stabilty.com/" },
			{ label: "Code", href: "https://github.com/HectorGitt/watchway" },
			{ label: "Backend", href: "https://github.com/HectorGitt/watchway-backend" },
		],
	},
	{
		id: "closetic",
		name: "Closetic",
		kind: "Fashion AI agent",
		discipline: "ai",
		year: "2025",
		image: closetic,
		summary:
			"A wardrobe platform built on React, TypeScript and FastAPI with Google Calendar integration and subscription billing. Its stylist runs on the OpenAI Realtime API as a voice agent, so recommendations happen in conversation rather than through a form.",
		method: [
			{ label: "Voice", value: "OpenAI Realtime API stylist agent" },
			{ label: "Context", value: "Google Calendar integration" },
			{ label: "Commercial", value: "Subscription payments" },
		],
		stack: ["React", "TypeScript", "FastAPI", "OpenAI Realtime", "Stripe"],
		// Repo is private — it 404s for visitors, so only the live product is linked.
		links: [{ label: "Live", href: "https://closetic.com" }],
	},
	{
		id: "codeity",
		name: "Codeity",
		kind: "Security vulnerability scanner",
		discipline: "platform",
		year: "2025",
		image: codeity,
		summary:
			"A full-stack scanner on FastAPI that analyses codebases for vulnerabilities and malicious intent across multiple languages, taking either an upload or a GitHub repository as its target.",
		method: [
			{ label: "Targets", value: "File upload or GitHub repository" },
			{ label: "Coverage", value: "Multi-language static analysis" },
			{ label: "Runtime", value: "FastAPI on Cloud Run" },
		],
		stack: ["FastAPI", "Python", "Static analysis", "Cloud Run"],
		// The old Cloud Run deployment is gone (404). Re-add a Live link once redeployed.
		links: [{ label: "Code", href: "https://github.com/HectorGitt/codeity" }],
	},
];

export const archive = [
	{
		name: "Collat",
		kind: "On-chain lending against tokenised real-world assets",
		discipline: "web3",
		image: collat,
		stack: ["Solana", "React"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/collat" },
			{ label: "Live", href: `https://collat.${host}` },
		],
	},
	{
		name: "Dropmint",
		kind: "Sweepstake platform on Django, Web3.py and Solana.py",
		discipline: "web3",
		image: dropmint,
		stack: ["Django", "Web3.py", "Tweepy"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/twitter-mint" },
			{ label: "Live", href: "http://app.dropmint.com/" },
		],
	},
	{
		name: "Defimentum",
		kind: "Site for an angel investment outfit in crypto",
		discipline: "web3",
		image: defimentum,
		stack: ["Next.js"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/defimentum" },
			{ label: "Live", href: `https://defimentum.${host}` },
		],
	},
	{
		name: "getLinked",
		kind: "Hackathon registration platform with validated multi-step forms",
		discipline: "platform",
		image: getlinked,
		stack: ["React", "Formik", "Yup"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/getlinked" },
			{ label: "Live", href: `https://getlinked.${host}` },
		],
	},
	{
		name: "Whisperer",
		kind: "Immersive horror reader with an AI companion, built with Kiro",
		discipline: "ai",
		image: null,
		stack: ["Kiro", "JavaScript"],
		links: [
			{
				label: "Write-up",
				href: "https://medium.com/@deniyi_dev/whisperer-building-a-horror-story-reader-with-kiro-93c0ce0adb0f",
			},
		],
	},
	{
		name: "Adacubator",
		kind: "Idea pitching platform",
		discipline: "platform",
		image: adacubator,
		stack: ["Next.js"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/adacubator" },
			{ label: "Live", href: `https://adacubator.${host}` },
		],
	},
	{
		name: "Hypertrove",
		kind: "Idea pitching platform",
		discipline: "platform",
		image: hypertrove,
		stack: ["Next.js"],
		// hypertrove.deniyi.link no longer resolves; restore the Live link if the DNS returns.
		links: [{ label: "Code", href: "https://github.com/HectorGitt/hypertrove" }],
	},
	{
		name: "DAT Captures",
		kind: "Photography portfolio",
		discipline: "platform",
		image: datcaptures,
		stack: ["Next.js", "styled-components"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/DATCaptures" },
			{ label: "Live", href: `https://datcaptures.${host}` },
		],
	},
	{
		name: "React Dashboard",
		kind: "Admin dashboard with charting, scheduling and validated forms",
		discipline: "platform",
		image: dashboard,
		stack: ["React", "Material UI", "Nivo"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/react-admin" },
			{ label: "Live", href: `https://dashboard.${host}` },
		],
	},
	{
		name: "Stream Lab",
		kind: "Film catalogue over the TMDB API",
		discipline: "platform",
		image: streamlab,
		stack: ["React", "Firebase", "SCSS"],
		links: [
			{ label: "Code", href: "https://github.com/HectorGitt/stream-lab" },
			{ label: "Live", href: `https://streamlab.${host}` },
		],
	},
	{
		name: "Soft Player",
		kind: "Music player",
		discipline: "platform",
		image: softplayer,
		stack: ["React", "SCSS"],
		links: [],
	},
	{
		name: "Outlook Phishing Test",
		kind: "Security awareness exercise simulating a credential-harvest page",
		discipline: "platform",
		image: outlook,
		stack: ["React", "Bootstrap"],
		links: [
			{
				label: "Code",
				href: "https://github.com/HectorGitt/outlook-phishing-test",
			},
			{ label: "Live", href: `https://phishing-test.${host}` },
		],
	},
];

/** Derived so the counts printed around the site cannot drift from the data. */
export const totalProjects = selected.length + archive.length;

export const writing = [
	{
		title: "Building the Copernican solar system and Earth simulator with live NASA EONET data",
		date: "Dec 2025",
		readTime: "7 min",
		blurb:
			"Bridging scientific accuracy and browser performance: orbital integration, sunlight dynamics and a live natural-hazard feed in Three.js.",
		href: "https://medium.com/@deniyi_dev/building-the-copernican-solar-system-and-earth-simulator-with-live-nasa-eonet-data-e46798b97923",
	},
	{
		title: "Building EagleSight: a next-gen fleet management system",
		date: "Dec 2025",
		readTime: "4 min",
		blurb:
			"Solving vehicle routing problems with time windows, and predicting engine failure from telemetry before it happens.",
		href: "https://medium.com/@deniyi_dev/building-eaglesight-a-next-gen-fleet-management-system-c29aa3b5ba80",
	},
	{
		title: "Building Locus: a multi-agent AI travel assistant from scratch",
		date: "Nov 2025",
		readTime: "12 min",
		blurb:
			"How seven specialised agents divide one planning problem, and what breaks when you let them talk to each other.",
		href: "https://medium.com/@deniyi_dev/building-locus-a-multi-agent-ai-travel-assistant-from-scratch-53fb89125ba7",
	},
	{
		title: "Whisperer: building a horror story reader with Kiro",
		date: "Dec 2025",
		readTime: "14 min",
		blurb:
			"Architecture and development notes on an atmospheric reading experience with an AI companion.",
		href: "https://medium.com/@deniyi_dev/whisperer-building-a-horror-story-reader-with-kiro-93c0ce0adb0f",
	},
];

export const skills = [
	{
		group: "Languages",
		items: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java"],
	},
	{
		group: "Backend & APIs",
		items: ["Django", "FastAPI", "Flask", "REST design", "Celery", "Redis"],
	},
	{
		group: "Data engineering",
		items: [
			"Apache Airflow",
			"Kafka",
			"ETL pipelines",
			"Pandas",
			"Model Context Protocol",
			"Selenium",
		],
	},
	{
		group: "Databases",
		items: [
			"PostgreSQL",
			"Neo4j",
			"Vector stores",
			"Time-series stores",
			"MySQL",
		],
	},
	{
		group: "Applied AI",
		items: [
			"Retrieval-augmented generation",
			"Multi-agent systems",
			"AWS Bedrock",
			"SageMaker",
			"Google ADK",
			"Agentic workflows",
		],
	},
	{
		group: "Cloud & platform",
		items: [
			"AWS (Lambda, EC2, ECR, S3)",
			"Kubernetes",
			"Docker",
			"Terraform",
			"CI/CD",
			"Cloud Run",
		],
	},
	{
		group: "Frontend",
		items: ["React", "Next.js", "Redux", "styled-components", "SCSS"],
	},
	{
		group: "3D & model serving",
		items: [
			"TripoSG",
			"Image-to-3D inference",
			"CUDA / GPU serving",
			"Three.js",
			"Browser mesh preview",
		],
	},
	{
		group: "Operations research",
		items: [
			"Linear programming",
			"Mixed-integer programming",
			"Vehicle routing (VRPTW)",
			"Google OR-Tools",
		],
	},
	{
		group: "Engineering simulation",
		items: [
			"Orbital mechanics",
			"Fluid dynamics",
			"Thermodynamic modelling",
			"AutoCAD",
			"Arduino & sensors",
		],
	},
];
