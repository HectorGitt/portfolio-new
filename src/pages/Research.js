import { motion } from "framer-motion";
import { ResearchHeader, ResearchClose } from "../components/ResearchHeader";
import ResearchSection from "../components/ResearchSection";
import AcademicRecord from "../components/AcademicRecord";
import { FieldPracticeSection, TeachingSection } from "../components/PracticeSection";
import { pageAnime } from "../animation";
import { usePageMeta } from "../components/usePageMeta";
import { useMotionStart } from "../components/useScroll";

/**
 * Built to be shared on its own — a supervisor following a link from a cold
 * email lands here with no other context. It opens with identity and closes
 * with contact, and never refers to the rest of the site to make sense.
 */
const Research = () => {
	const start = useMotionStart();
	usePageMeta(
		"Research: robotics, perception & autonomy",
		"Research statement of Olaitan Adeniyi — perception and digital twins for physical infrastructure, multi-agent coordination under physical constraint, and non-destructive sensing in biological systems. First Class Honours, top of department, seeking doctoral or thesis-based master's positions for 2027 entry."
	);

	return (
	<motion.main variants={pageAnime} initial={start} animate="show">
		<ResearchHeader />
		<ResearchSection />
		<AcademicRecord />
		<FieldPracticeSection />
		<TeachingSection />
		<ResearchClose />
	</motion.main>
);
};

export default Research;
