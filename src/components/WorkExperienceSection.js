import styled from "styled-components";
import { motion } from "framer-motion";

const WorkExperienceSection = () => {
	return (
		<WorkExperience>
			<div className="container">
				<motion.h2>
					Work <span>Experience</span>
				</motion.h2>

				<ExperienceGrid>
					<ExperienceCard>
						<CompanyHeader>
							<CompanyName>PEEPALYTICS, AI</CompanyName>
							<Position>Remote CTO (Founding Engineer)</Position>
							<Date>June 2024 - Present</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Orchestrated high-performance API workflows
								using Django and FastAPI, integrating robust
								backend specifications with Next.js frontend
								controller logic for complex data
								visualizations.
							</li>
							<li>
								Supervised the optimization of Airflow and Kafka
								pipelines, achieving a 60x reduction in
								processing time and significantly decreasing
								memory consumption.
							</li>
							<li>
								Engineered a 98.7% reduction in data processing
								latency, slashing Neo4j and Pandas execution
								times from 2 hours down to 90 seconds.
							</li>
							<li>
								Directed the deployment and scaling of cloud
								infrastructure across AWS (Lambda, EC2, ECR, S3)
								and Render, utilizing Docker for
								containerization.
							</li>
							<li>
								Optimized cloud expenditure by monitoring
								service metrics and implementing a usage-based
								tiering system to reduce deployment costs.
							</li>
							<li>
								Architected advanced AI solutions, including RAG
								implementations with Vector Databases and ETL
								pipelines for the Model Context Protocol (MCP).
							</li>
							<li>
								Managed a polyglot database environment,
								ensuring high availability and performance
								across Postgres, Neo4j, Weaviate, and
								Time-series databases.
							</li>
							<li>
								Developed and integrated intelligent automation
								bots for Slack and WhatsApp using AWS Bedrock
								and SageMaker.
							</li>
							<li>
								Doubled team collaboration efficiency and
								ensured 99.9% service reliability by resolving
								critical development blockers and deployment
								bugs.
							</li>
						</Responsibilities>
					</ExperienceCard>

					<ExperienceCard>
						<CompanyHeader>
							<CompanyName>STEALTH NETWORK, WEB3</CompanyName>
							<Position>Remote Frontend Engineer</Position>
							<Date>Mar 2023 - Oct 2024</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Transformed complex wireframes and designs into
								high-fidelity, interactive web interfaces with a
								focus on intuitive user experience.
							</li>
							<li>
								Engineered fluid, responsive layouts ensuring
								seamless functionality and visual consistency
								across all device types and screen resolutions.
							</li>
							<li>
								Optimized front-end performance, implementing
								best practices in asset loading and rendering to
								significantly enhance page speed and
								responsiveness.
							</li>
							<li>
								Architected a library of reusable UI components,
								promoting code modularity, long-term
								maintainability, and accelerated development
								cycles.
							</li>
						</Responsibilities>
					</ExperienceCard>

					<ExperienceCard>
						<CompanyHeader>
							<CompanyName>STITCH TECHNOLOGIES</CompanyName>
							<Position>Remote Full stack Engineer</Position>
							<Date>Mar 2022 - Sept 2023</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								AI-Driven Social Automation: Designed and built
								intelligent bots for Twitter and Discord by
								seamlessly integrating sophisticated social
								network APIs with backend logic in order to
								automate user interactions.
							</li>
							<li>
								Scalable Sweepstake Ecosystem Development:
								Designed and managed a sweepstakes system with
								heavy traffic using the Django framework,
								incorporating effective database designs to
								sustain activity from a huge number of
								participants.
							</li>
							<li>
								Engineered Identity & Access Management (IAM):
								Developed and implemented secure IAM
								functionality with Flask, creating a structured
								authentication and authorization framework to
								safeguard confidential user information.
							</li>
							<li>
								Improved Data Security & Cryptography:
								Implemented industry-standard hashing and
								encryption algorithms to protect data both at
								rest and in transit, meeting audit requirements.
							</li>
							<li>
								Automated Multi-Stage Workflows: Created complex
								automated workflows using tools such as
								Selenium, Celery, and Redis, using CronJobs to
								remove the need for any manual operations in the
								system.
							</li>
							<li>
								Cloud-Native Orchestration: Containerized
								microservices through Docker and Kubernetes,
								along with orchestration for quick deployment
								and ability to achieve high availability through
								AWS infrastructure.
							</li>
						</Responsibilities>
					</ExperienceCard>

					<ExperienceCard>
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

					<ExperienceCard>
						<CompanyHeader>
							<CompanyName>MAJESTIK LTD</CompanyName>
							<Position>Remote Programming Tutor</Position>
							<Date>Oct 2021 - July 2023</Date>
						</CompanyHeader>
						<Responsibilities>
							<li>
								Mentored peers and students in C and Java,
								breaking down complex low-level concepts like
								memory management, pointers, and Object-Oriented
								Programming (OOP) to build strong computer
								science foundations.
							</li>
							<li>
								Instructed on Database Design and Architecture
								(MySQL), teaching the principles of schema
								normalization, SQL optimization, and relational
								data modeling to ensure efficient backend
								performance.
							</li>
							<li>
								Delivered full-stack development curriculum
								(Python, PHP), guiding learners from basic
								syntax to building functional web applications,
								emphasizing clean code practices and system
								integration.
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
