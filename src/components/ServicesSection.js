//import Icons
// import clock from "../images/icon/clock.svg";
// import money from "../images/icon/money.svg";
// import teamwork from "../images/icon/teamwork.svg";
// import diaphragm from "../images/icon/diaphragm.svg";
//import styled components
import styled from "styled-components";

//import styles
import { DescriptionStyle } from "../styles";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const ServicesSection = () => {
	const [element, controls] = useScroll();
	return (
		<Services
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<DescriptionStyle>
				<h2>
					Technical <span>Skills</span>
				</h2>
				<SkillsContainer>
					<SkillCategory>
						<CategoryTitle>Backend Development</CategoryTitle>
						<SkillTags>
							<SkillTag>Django</SkillTag>
							<SkillTag>FastAPI</SkillTag>
							<SkillTag>API Workflow & Specification</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>Frontend Development</CategoryTitle>
						<SkillTags>
							<SkillTag>React</SkillTag>
							<SkillTag>Next.js</SkillTag>
							<SkillTag>JavaScript</SkillTag>
							<SkillTag>SCSS</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>Database Management</CategoryTitle>
						<SkillTags>
							<SkillTag>PostgreSQL</SkillTag>
							<SkillTag>Neo4j</SkillTag>
							<SkillTag>Vector DB</SkillTag>
							<SkillTag>Time-series DB</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>AI & ML Implementation</CategoryTitle>
						<SkillTags>
							<SkillTag>
								RAG (Retrieval-Augmented Generation)
							</SkillTag>
							<SkillTag>Vector Database</SkillTag>
							<SkillTag>AWS Bedrock</SkillTag>
							<SkillTag>SageMaker</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>DevOps & Cloud Services</CategoryTitle>
						<SkillTags>
							<SkillTag>Render</SkillTag>
							<SkillTag>Docker</SkillTag>
							<SkillTag>
								AWS (Lambda, API Gateway, EC2, ECR, ELB, S3,
								CloudWatch)
							</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>ETL & Data Processing</CategoryTitle>
						<SkillTags>
							<SkillTag>Model Context Protocol (MCP)</SkillTag>
							<SkillTag>AI Bot Development</SkillTag>
							<SkillTag>Slack</SkillTag>
							<SkillTag>WhatsApp</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>Web3 & Blockchain</CategoryTitle>
						<SkillTags>
							<SkillTag>
								UI/UX for decentralized platforms
							</SkillTag>
						</SkillTags>
					</SkillCategory>

					<SkillCategory>
						<CategoryTitle>Performance & Development</CategoryTitle>
						<SkillTags>
							<SkillTag>Frontend Performance</SkillTag>
							<SkillTag>Responsive Design</SkillTag>
							<SkillTag>Cross-Browser Compatibility</SkillTag>
							<SkillTag>Version Control & CI/CD</SkillTag>
							<SkillTag>Git</SkillTag>
							<SkillTag>GitHub</SkillTag>
						</SkillTags>
					</SkillCategory>
				</SkillsContainer>
			</DescriptionStyle>
		</Services>
	);
};
const Services = styled.div`
	max-width: 100%;
	margin-top: 5rem;
	padding: 5rem 2rem;
	background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
	position: relative;

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

	p {
		font-size: 90%;
		color: #cbd5e1;
	}
	h2 {
		padding-bottom: 3rem;
		font-size: 3rem;
		font-weight: 700;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		text-align: center;
		@media (max-width: 900px) {
			font-size: 2.2rem;
			padding-bottom: 2rem;
		}
	}
	@media (max-width: 900px) {
		margin-top: 3rem;
		padding: 3rem 1rem;
	}
`;
export const CardStyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
	.card {
		flex-basis: 20rem;
		background: rgba(255, 255, 255, 0.05);
		border-radius: 15px;
		padding: 2rem;
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
		transition: all 0.3s ease;
		&:hover {
			transform: translateY(-5px);
			box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
				0 0 20px rgba(0, 212, 255, 0.1);
		}
		@media (max-width: 900px) {
			flex-basis: 100%;
			padding: 1.5rem;
		}
	}
	.icon {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	h3 {
		margin-left: 1rem;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		padding: 0;
		font-size: 1.3rem;
		font-weight: 600;
	}
	img {
		width: 40px;
		height: 40px;
		filter: brightness(0) invert(1);
		opacity: 0.8;
	}
	p {
		color: #cbd5e1;
		line-height: 1.6;
		font-size: 1rem;
	}
`;

const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 2rem;
	margin-top: 2rem;
`;

const SkillCategory = styled.div`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	padding: 2rem;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
			0 0 20px rgba(0, 212, 255, 0.1);
	}

	@media (max-width: 900px) {
		padding: 1.5rem;
	}
`;

const CategoryTitle = styled.h3`
	font-size: 1.3rem;
	font-weight: 600;
	color: #f8fafc;
	margin-bottom: 1.5rem;
	padding-bottom: 0.5rem;
	border-bottom: 2px solid rgba(0, 212, 255, 0.3);

	@media (max-width: 900px) {
		font-size: 1.2rem;
	}
`;

const SkillTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;
`;

const SkillTag = styled.span`
	background: linear-gradient(
		135deg,
		rgba(0, 212, 255, 0.15),
		rgba(35, 217, 151, 0.15)
	);
	color: #ffffff !important;
	-webkit-text-fill-color: #ffffff !important;
	background-clip: unset !important;
	-webkit-background-clip: unset !important;
	padding: 0.5rem 1rem;
	border-radius: 20px;
	font-size: 0.9rem;
	font-weight: 500;
	border: 1px solid rgba(0, 212, 255, 0.3);
	transition: all 0.3s ease;
	cursor: default;
	backdrop-filter: blur(5px);
	-webkit-backdrop-filter: blur(5px);
	display: inline-block;

	&:hover {
		background: linear-gradient(
			135deg,
			rgba(0, 212, 255, 0.25),
			rgba(35, 217, 151, 0.25)
		);
		transform: scale(1.05);
		color: #ffffff !important;
		-webkit-text-fill-color: #ffffff !important;
		border-color: rgba(35, 217, 151, 0.5);
		box-shadow: 0 4px 15px rgba(0, 212, 255, 0.2);
	}

	@media (max-width: 900px) {
		font-size: 0.8rem;
		padding: 0.4rem 0.8rem;
	}
`;

export default ServicesSection;
