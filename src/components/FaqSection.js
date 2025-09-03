import styled from "styled-components";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

//import styles
import { LayoutStyle } from "../styles";

const FaqSection = () => {
	const [element, controls] = useScroll();
	return (
		<FaqStyle
			variants={scrollReveal}
			animate={controls}
			initial="hidden"
			ref={element}
		>
			<h2>
				Soft <span>Skills</span>
			</h2>
			<AnimateSharedLayout>
				<Toggle title="Problem-Solving & Critical Thinking">
					<div className="answer">
						<p>
							Advanced analytical skills for identifying complex
							problems, breakdown into manageable components, and
							developing innovative solutions through systematic
							analysis and creative thinking.
						</p>
					</div>
				</Toggle>
				<Toggle title="Collaboration & Teamwork">
					<div className="answer">
						<p>
							Strong interpersonal skills for effective
							communication, active listening, and building
							productive relationships with diverse teams to
							achieve common goals and foster inclusive
							environments.
						</p>
					</div>
				</Toggle>
				<Toggle title="Project Management">
					<div className="answer">
						<p>
							Comprehensive project lifecycle management including
							planning, resource allocation, timeline management,
							risk assessment, and successful delivery within
							constraints.
						</p>
					</div>
				</Toggle>
				<Toggle title="Effective Communication">
					<div className="answer">
						<p>
							Excellent verbal and written communication skills
							for articulating complex technical concepts to both
							technical and non-technical stakeholders, including
							product managers and design teams.
						</p>
					</div>
				</Toggle>
				<Toggle title="Scalability & Maintainability">
					<div className="answer">
						<p>
							Expertise in designing systems and writing code that
							can grow with business needs while remaining
							maintainable, readable, and efficient for long-term
							sustainability.
						</p>
					</div>
				</Toggle>
				<Toggle title="Continuous Learning">
					<div className="answer">
						<p>
							Commitment to staying current with emerging
							technologies, industry trends, and best practices
							through self-directed learning, certifications, and
							professional development.
						</p>
					</div>
				</Toggle>
			</AnimateSharedLayout>
		</FaqStyle>
	);
};

const FaqStyle = styled(LayoutStyle)`
	display: block;
	height: fit-content;
	max-width: 100%;
	@media (max-width: 900px) {
		margin-top: 0;
		text-align: left;
	}
	& > * {
		cursor: pointer;
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
	h2 span {
		display: inline;
	}
	.line {
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		height: 0.3rem;
		margin: 1rem 0;
		width: 100%;
		border-radius: 2px;
		box-shadow: 0 0 10px rgba(0, 212, 255, 0.3);
	}
	.question {
		padding: 0;
	}
	.answer {
		padding: 0;
		height: fit-content;
	}
	.answer p {
		padding: 1.5rem 0;
		color: #cbd5e1;
		line-height: 1.6;
	}
`;

export default FaqSection;
