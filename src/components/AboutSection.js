import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const AboutSection = () => {
	const [element, controls] = useScroll();
	return (
		<About
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<div className="description">
				<h2>
					About <span>Me</span>
				</h2>
				<p>
					I am a Systems Engineer and Full-Stack Architect with a
					First-Class degree in Engineering and over 5 years of
					experience. I specialize in building high-performance
					interfaces and AI systems that bridge the gap between heavy
					math and seamless user experience. I focus on turning
					technical bottlenecks into quick wins, like when I
					supervised a 60x speed optimization for Airflow and Kafka
					including orchestrating high-availability AWS deployments
					while prioritizing reliability and efficiency.
					<br />
					<br />
					My work in AI is centered on practical, scalable solutions,
					including production-ready RAG systems and autonomous
					multi-agent dispatch engines like Locus, which coordinates
					seven specialized agents for real-time analysis. I have a
					deep interest in modeling complex systems, such as my
					Copernican simulator, which uses Kepler’s Laws and live NASA
					data to track planetary mechanics and environmental hazards.
					My experience ranges from building fleet logistics engines
					that predict hardware failure using Fluid Mechanics to
					developing modular UI component libraries that ensure
					long-term maintainability.
					<br />
					<br />
					Beyond the technical stack, I am a high-agency collaborator
					who has doubled team efficiency and maintained 99.9% service
					reliability. I manage polyglot database environments
					spanning Postgres, Neo4j, and Vector databases with a focus
					on cost-effective cloud scaling. I am committed to building
					solutions that are fast, reliable, and fundamentally useful.
				</p>
			</div>
		</About>
	);
};

const About = styled(motion.div)`
	min-height: 50vh;
	display: block;
	width: 100%;
	padding: 5rem 10rem;
	color: white;
	background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
	position: relative;
	text-align: center;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
				circle at 20% 30%,
				rgba(0, 212, 255, 0.05) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 80% 70%,
				rgba(35, 217, 151, 0.05) 0%,
				transparent 50%
			);
		pointer-events: none;
	}

	.description {
		width: 100%;
		margin: 0 auto;
		z-index: 2;
		position: relative;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 3rem;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-align: center;
		display: inline-block;

		@media (max-width: 900px) {
			font-size: 2.2rem;
			margin-bottom: 2rem;
		}
	}

	p {
		padding: 2rem 0rem;
		color: #ccc;
		font-size: 1.2rem;
		line-height: 1.8;
		text-align: center;
		max-width: 1000px;
		margin: 0 auto;
	}

	@media (max-width: 900px) {
		padding: 3rem 2rem;
		p {
			padding: 1rem 0rem;
			text-align: justify;
		}
	}
`;

export default AboutSection;
