import home from "../images/avatar.png";

//styled components
import { Hidden, LayoutStyle, DescriptionStyle, ImageStyle } from "../styles";
//framer motion
import { motion } from "framer-motion";
import { fade, photoAnim, titleAnim } from "../animation";
import cv from "../file/Adeniyi.pdf";

const HeroSection = () => {
	return (
		<LayoutStyle>
			<DescriptionStyle>
				<motion.div>
					<Hidden>
						<motion.h4 variants={titleAnim}>
							Systems <span>Engineer</span> &
						</motion.h4>
					</Hidden>
					<Hidden>
						<motion.h4 variants={titleAnim}>
							Full-Stack Architect
						</motion.h4>
					</Hidden>
				</motion.div>
				<motion.p variants={fade}>
					I am a Systems Engineer and Full-Stack Architect with a
					First-Class degree in Engineering and over 5 years of
					experience.
				</motion.p>

				<div className="buttons">
					<motion.a
						href="mailto:adeniyi.olaitanhector@yahoo.com"
						variants={fade}
					>
						Contact Me
					</motion.a>
					<motion.a
						href={cv}
						proposed_file_name="001_Adeniyi_Olaitan_CV"
						download="001_Adeniyi_Olaitan_CV"
						variants={fade}
					>
						Download CV
					</motion.a>
				</div>
			</DescriptionStyle>
			<ImageStyle>
				<motion.img
					variants={photoAnim}
					src={home}
					alt="a fresh looking black guy on white shirt"
				/>
			</ImageStyle>
		</LayoutStyle>
	);
};

export default HeroSection;
