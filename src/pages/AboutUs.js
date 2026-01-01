import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import EducationSection from "../components/EducationSection";
import FaqSection from "../components/FaqSection";
import ServicesSection from "../components/ServicesSection";
import WorkExperienceSection from "../components/WorkExperienceSection";
import { motion } from "framer-motion";
import { pageAnime } from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
	return (
		<motion.div
			variants={pageAnime}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<ScrollTop />
			<HeroSection />
			<AboutSection />
			<EducationSection />
			<WorkExperienceSection />
			<ServicesSection />
			<FaqSection />
		</motion.div>
	);
};
export default AboutUs;
