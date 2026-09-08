import { motion } from "framer-motion";
import PageIntro from "../components/PageIntro";
import { availability } from "../content/profile";
import ProjectIndex from "../components/ProjectIndex";
import SkillsInventory from "../components/SkillsInventory";
import NextStep from "../components/NextStep";
import { pageAnime } from "../animation";
import { usePageMeta } from "../components/usePageMeta";
import { totalProjects } from "../content/projects";
import { useMotionStart } from "../components/useScroll";

const Engineering = () => {
	const start = useMotionStart();
	usePageMeta(
		"Engineering",
		`${totalProjects} systems built and shipped: routing engines, telemetry pipelines, multi-agent AI, 3D model serving and full-stack platforms, plus six years of production engineering experience.`
	);

	return (
	<motion.main variants={pageAnime} initial={start} animate="show">
		<PageIntro
			sheet={`Rev ${availability.revision}`}
			label="Engineering"
			title="Built, shipped, measured"
			lede={`${totalProjects} systems, six years of production work, and the stack that carried them. The three at the top are where optimisation and physics do real work.`}
			facts={[
				{ value: String(totalProjects), label: "systems on file" },
				{ value: "6 yr", label: "in production" },
				{ value: "98.7%", label: "best latency win" },
			]}
		/>
		<ProjectIndex />
		<SkillsInventory />
		<NextStep />
	</motion.main>
);
};

export default Engineering;
