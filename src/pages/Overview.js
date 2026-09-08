import { motion } from "framer-motion";
import TitleBlock from "../components/TitleBlock";
import PositioningSection from "../components/PositioningSection";
import ExperienceLog from "../components/ExperienceLog";
import FeaturedWork from "../components/FeaturedWork";
import WritingSection from "../components/WritingSection";
import NextStep from "../components/NextStep";
import { pageAnime } from "../animation";
import { usePageMeta } from "../components/usePageMeta";
import { useMotionStart } from "../components/useScroll";

const Overview = () => {
	const start = useMotionStart();
	usePageMeta(
		null,
		"Systems engineer and full-stack architect. First Class Honours in Agricultural & Environmental Engineering, top of the department. Open to research positions and visa-sponsored software roles."
	);

	return (
	<motion.main variants={pageAnime} initial={start} animate="show">
		<TitleBlock />
		<PositioningSection />
		<FeaturedWork />
		<ExperienceLog />
		<WritingSection />
		<NextStep />
	</motion.main>
);
};

export default Overview;
