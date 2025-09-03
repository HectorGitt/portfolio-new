import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const WorkExperienceSection = () => {
	const [element, controls] = useScroll();
	return (
		<WorkExperience
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<div className="container">
				<motion.h2
					initial={{ opacity: 0, y: 50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					Work <span>Experience</span>
				</motion.h2>

				<ExperienceGrid>
					<ExperienceCard
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<CompanyHeader>
							<CompanyName>PEEPALYTICS, AI</CompanyName>
							<Position>
								FULLSTACK DEVOPS ENGINEER (Founding Engineer /
								Acting CTO)
							</Position>
							<Date>June 2024 - Present</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Orchestrated API Workflow and Specification
								using Django and FastAPI
							</li>
							<li>
								Supported development of Frontend Controller
								logic for Network and Data Visualization
								(NextJS)
							</li>
							<li>
								Developed a Rag Implementation using Vector
								Database
							</li>
							<li>
								Database Management (Postgres, Neo4j, Vector DB,
								Timeseries DB)
							</li>
							<li>
								Managed Deployment using Docker, Render and AWS
								Services (Lambda, API Gateway, EC2, ECR, ELB,
								S3, Bedrock, Sagemaker, Cloudwatch etc)
							</li>
							<li>
								AI Bot Development for social platforms like
								Slack and WhatsApp
							</li>
							<li>
								Development of ETL implementation for MCP (Model
								Context Protocol)
							</li>
						</Responsibilities>
					</ExperienceCard>

					<ExperienceCard
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<CompanyHeader>
							<CompanyName>FOREON NETWORK, WEB3</CompanyName>
							<Position>Frontend Developer</Position>
							<Date>March 2023 - May 2024</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Converted designs and wireframes into
								interactive, user-friendly web interfaces
							</li>
							<li>
								Ensured layouts adapt seamlessly across
								different screen sizes and devices
							</li>
							<li>
								Enhanced page speed and responsiveness by
								implementing best performance practices
							</li>
							<li>
								Ensured the application works smoothly on major
								browsers (Chrome, Firefox, Safari, etc.)
							</li>
							<li>
								Built reusable and modular UI components for
								scalability and maintainability
							</li>
						</Responsibilities>
					</ExperienceCard>

					<ExperienceCard
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
					>
						<CompanyHeader>
							<CompanyName>TRIBINNOV AFRICA</CompanyName>
							<Position>SOFTWARE ENGINEER</Position>
							<Date>November 2021 - February 2023</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Development of a global platform called Datinnov
							</li>
							<li>
								Development and maintenance of a web application
								created with React, React-redux and SCSS
							</li>
							<li>
								Collaborated with Product Managers, UX/UI
								Designers, and other engineers to develop new
								features
							</li>
							<li>
								Wrote clean, maintainable, and well-tested code
								using JavaScript frontend framework React
							</li>
						</Responsibilities>
					</ExperienceCard>
				</ExperienceGrid>
			</div>
		</WorkExperience>
	);
};

const WorkExperience = styled(motion.div)`
	padding: 5rem 5rem;
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

	.container {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 2;
	}

	h2 {
		font-size: 3rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 4rem;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;

		@media (max-width: 900px) {
			font-size: 2.2rem;
			margin-bottom: 3rem;
		}
	}

	@media (max-width: 900px) {
		padding: 3rem 2rem;
	}
`;

const ExperienceGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	gap: 2rem;
	max-width: 1000px;
	margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 20px;
	padding: 2.5rem;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
	}

	&:hover {
		transform: translateY(-5px);
		box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4),
			0 0 30px rgba(0, 212, 255, 0.2);
	}

	@media (max-width: 900px) {
		padding: 2rem;
	}
`;

const CompanyHeader = styled.div`
	margin-bottom: 2rem;
`;

const CompanyName = styled.h3`
	font-size: 1.5rem;
	font-weight: 700;
	color: #f8fafc;
	margin-bottom: 0.5rem;

	@media (max-width: 900px) {
		font-size: 1.3rem;
	}
`;

const Position = styled.h4`
	font-size: 1.2rem;
	font-weight: 600;
	background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	margin-bottom: 0.5rem;

	@media (max-width: 900px) {
		font-size: 1.1rem;
	}
`;

const Date = styled.p`
	font-size: 0.9rem;
	color: #cbd5e1;
	font-weight: 500;
`;

const Responsibilities = styled.ul`
	list-style: none;
	padding: 0;

	li {
		color: #cbd5e1;
		margin-bottom: 1rem;
		padding-left: 1.5rem;
		position: relative;
		line-height: 1.6;
		font-size: 1rem;

		&::before {
			content: "▹";
			position: absolute;
			left: 0;
			color: #00d4ff;
			font-weight: bold;
		}

		&:hover::before {
			color: #23d997;
		}
	}
`;

export default WorkExperienceSection;
