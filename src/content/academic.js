/**
 * Academic record, awards and research interests.
 * Grades and award titles are transcribed from the CV; research summaries are
 * condensed from the Statement of Research Interest and the Research Outline.
 */

export const degree = {
	institution: "Obafemi Awolowo University",
	campus: "Ile-Ife, Osun State, Nigeria",
	award: "B.Sc Agricultural & Environmental Engineering",
	classification: "First Class Honours",
	cgpa: "4.52",
	cgpaScale: "5.00",
	conferred: "July 2025",
	span: "2020 — 2025",
	capstone: "Performance Evaluation of a Recirculatory Aquaculture System",
	capstoneNote:
		"First sustained work instrumenting a controlled biological environment, and the start of the sensing thread that runs through the research above.",
};

/** Course scores, out of 100, grouped the way the CV groups them. */
export const transcript = [
	{
		group: "Machine design & processing",
		rows: [
			{ course: "Handling Agricultural Materials", code: "AEE504", score: 91 },
			{ course: "Farm Machinery", code: "", score: 87 },
			{ course: "Design of Agricultural Machines", code: "AEE407", score: 87 },
		],
	},
	{
		group: "Energy & mechanics",
		rows: [
			{ course: "Applied Engineering Thermodynamics", code: "AEE305/306", score: 87 },
			{ course: "Fluid Mechanics", code: "", score: 84 },
			{ course: "Engineering Mechanics", code: "", score: 80 },
			{ course: "Mechanics: Systems Analysis", code: "", score: 78 },
		],
	},
	{
		group: "Infrastructure",
		rows: [
			{ course: "Introduction to Agricultural Structures Design", code: "", score: 85 },
			{ course: "Agricultural Land Surveying", code: "", score: 83 },
		],
	},
];

export const awards = [
	{
		title: "Overall Best Graduating Student",
		body: "Department of Agricultural & Environmental Engineering",
		year: "2025",
		detail: [
			"Masteck Industries & Engineering Services Ltd Award for Best Graduating Student",
			"Engineer J.A. Olaleye Award for the Best Graduating Student",
			"Professor V.A. Oyenuga (Vabo) Award for Best Graduating Student",
		],
	},
	{
		title: "Best Graduating in Crop Processing & Storage",
		body: "Professor V.A. Oyenuga (Vabo) Award",
		year: "2025",
		detail: [],
	},
	{
		title: "Academic Excellence Award",
		body: "Central Office of Research, Obafemi Awolowo University",
		year: "2023, 2024, 2025",
		detail: [
			"Best student in the department at 200, 300 and 400 level",
		],
	},
];

export const certifications = [
	{
		title: "Backend Engineering Professional Certificate",
		body: "Meta, via Coursera",
		year: "2023",
	},
	{
		title: "ALX-T Full Stack Developer Nanodegree",
		body: "Udacity",
		year: "2022",
	},
	{
		title: "National Level E-Quiz on Python — 75%",
		body: "University of Kerala · Certificate 8GCDYS-CE000297",
		year: "2020",
	},
	{
		title: "Understanding Renewable Energy",
		body: "YALI Africa",
		year: "2019",
	},
];

export const memberships = [
	{
		title: "Graduate Member, Nigerian Society of Engineers",
		abbr: "GMNSE",
		year: "2025",
	},
	{
		title: "Member, American Society of Agricultural & Biological Engineers",
		abbr: "ASABE / CSBE",
		year: "Since 2023",
	},
];

/**
 * Research direction: robotics, perception and autonomy, grounded in a
 * physical-systems degree. Ordered by where the strongest evidence sits, and
 * written so a supervisor can read one track and know what it would cost them
 * to supervise it.
 */
export const researchInterests = [
	{
		id: "perception",
		title: "Perception and digital twins for physical infrastructure",
		frame: "Primary interest",
		thesis:
			"Infrastructure fails slowly and in public, and we still mostly find out by sending someone to look. I want to work on autonomous inspection: systems that reconstruct a structure's geometry, locate damage inside that model, and decide where to look next.",
		body: [
			"I have built pieces of this pipeline already. Glance & Glamour turns a photograph into a 3D body mesh: the generative model is TripoSG, and my part is the platform around it — the inference service and CUDA container that serve it, and the browser preview that lets you orbit the result. Copernican integrates physical motion against a live external feed and renders it in the browser. WatchWay closes the far end, taking hazard reports as GIS telemetry and ranking repairs by severity through a priority queue.",
			"What I want from a research group is the join: learned damage detection sitting between the reconstruction and the dispatch, so that a digital twin is an assessment of a structure rather than a picture of one, and the inspection decides its own next move.",
			"The physical training is not decorative here. A crack in concrete and a failing hydraulic line are materials problems before they are computer-vision problems, and my degree is in the mechanics of physical systems rather than in images of them.",
		],
		grounding: [
			"Glance & Glamour — an image-to-3D model served behind a FastAPI inference API on a CUDA container, with an orbitable mesh preview on the front",
			"Copernican — physical integration against NASA's live EONET feed, rendered in 3D",
			"WatchWay — GIS telemetry ranked by hazard severity through a priority queue",
			"84% in Fluid Mechanics, 80% in Engineering Mechanics — the failure models underneath",
		],
	},
	{
		id: "coordination",
		title: "Multi-agent coordination under physical constraint",
		frame: "Second track",
		thesis:
			"Planning for machines in the real world is rarely one solver problem. It is several competences that have to agree, under constraints that are physical rather than logical. I want to formalise how specialised agents divide a plan and stay consistent when the world pushes back.",
		body: [
			"Locus is the working version: seven specialised agents coordinating pathfinding, travel cost, safety, weather and air quality into a single plan in real time. EagleSight is the rigorous version: vehicle routing with time windows as a mixed-integer program, minimising fuel against hard scheduling constraints.",
			"The question I actually want to answer sits between them. When the optimiser's constraints come from a physical model that is itself uncertain — a fluid-mechanics estimate of whether an engine will survive the shift — how much should the planner trust it, and what does it do when it should not?",
		],
		grounding: [
			"Locus — seven specialised agents planning together in real time on Google's ADK",
			"EagleSight — VRPTW as a mixed-integer program in OR-Tools, over a fluid-mechanics failure model",
			"98.7% latency reduction on heterogeneous graph data — the throughput real-time coordination needs",
		],
	},
	{
		id: "biosystems",
		title: "Non-destructive sensing in biological systems",
		frame: "Where the domain training pays",
		thesis:
			"The binding constraint on food security is not how much is grown but how much survives storage. Detecting grain quality changing in real time, without destroying the sample, is the same perception problem wearing different clothes.",
		body: [
			"NIR and gas-sensor telemetry is the input; the interpretation layer is the same deep-learning and autonomous-dispatch work as the tracks above. The optimisation target is energy — drying and storage that hold quality without wasting heat.",
			"I keep this track because it is where my degree is strongest and because biosystems and bioresource departments run some of the best applied robotics work there is. If a group's autonomy problem happens to live in a field or a grain store, I am already fluent in the domain.",
		],
		grounding: [
			"91% in Handling Agricultural Materials — rheological and thermal behaviour of biomass",
			"Capstone on a recirculatory aquaculture system — instrumenting a controlled biological environment",
			"87% in Applied Engineering Thermodynamics — models that respect the first and second laws",
		],
	},
];

export const researchNote =
	"Three tracks, one question: how do you make a physical system legible enough for a machine to act on it? I am applying for doctoral and thesis-based master's positions for 2027 entry, and I am open to either stream.";
