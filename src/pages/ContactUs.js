//ANIMATION
import { motion } from "framer-motion";
import styled from "styled-components";
import { pageAnime, titleAnim } from "../animation";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";

const ContactUs = () => {
	return (
		<ContactStyle
			variants={pageAnime}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Title>
				<Hide>
					<motion.h2 variants={titleAnim}>Get in touch</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Send An Email</h2>
						<span>
							<a href="mailto:adeniyi.olaitanhector@yahoo.com">
								<FontAwesomeIcon icon={faMessage} size="2x" />
							</a>
						</span>
					</Social>
				</Hide>
				<Hide>
					<Social variants={titleAnim}>
						<Circle />
						<h2>Connect with me</h2>
						<Link>
							<span>
								<a
									target="__blank"
									href="https://www.linkedin.com/in/deniyiola"
								>
									<FontAwesomeIcon
										icon={faLinkedin}
										size="2x"
									/>
								</a>
							</span>
							<span>
								<a
									target="__blank"
									href="https://github.com/hectorGitt"
								>
									<FontAwesomeIcon
										icon={faGithub}
										size="2x"
									/>
								</a>
							</span>
						</Link>
					</Social>
				</Hide>
			</div>
		</ContactStyle>
	);
};
const ContactStyle = styled(motion.div)`
	background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
	padding: 5rem 10rem;
	color: #e2e8f0;
	min-height: 90vh;
	position: relative;
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(
				circle at 30% 40%,
				rgba(0, 212, 255, 0.05) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 70% 80%,
				rgba(35, 217, 151, 0.05) 0%,
				transparent 50%
			);
		pointer-events: none;
	}
	@media (max-width: 900px) {
		padding: 3rem 2rem;
	}
`;
const Title = styled.div`
	margin-bottom: 4rem;
	color: #f8fafc;
	text-align: center;
	h2 {
		font-size: 3rem;
		font-weight: 700;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		margin-bottom: 1rem;
		@media (max-width: 900px) {
			font-size: 2.2rem;
		}
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
	box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
	flex-shrink: 0;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;
	padding: 2rem;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.1);
	transition: all 0.3s ease;
	&:hover {
		transform: translateX(5px);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
	}
	h2 {
		margin: 0 2rem;
		color: #f8fafc;
		font-size: 1.5rem;
		font-weight: 600;
	}
	a {
		color: #00d4ff;
		transition: all 0.3s ease;
		&:hover {
			color: #23d997;
			transform: scale(1.1);
		}
	}
`;
const Link = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: inherit;
	gap: 2rem;
	a {
		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.2);
		}
	}
`;

export default ContactUs;
