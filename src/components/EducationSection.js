import React from "react";

//styled components
import {
	EducationInfo,
	EducationTitle,
	EducationItem,
	EducationDegree,
	EducationYear,
	EducationField,
} from "../styles";

//framer motion
import { motion } from "framer-motion";

const EducationSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			style={{
				padding: "5rem 2rem",
				maxWidth: "1200px",
				margin: "0 auto",
				color: "white",
			}}
		>
			<EducationInfo>
				<EducationTitle>🎓 Education & Qualifications</EducationTitle>
				<EducationItem>
					<EducationDegree>
						Obafemi Awolowo University, Ile-Ife, Osun State, Nigeria
					</EducationDegree>
					<EducationYear>2025</EducationYear>
					<EducationField>B.Sc Engineering</EducationField>
				</EducationItem>
				<EducationItem>
					<EducationDegree>Udacity</EducationDegree>
					<EducationYear>2022</EducationYear>
					<EducationField>
						ALX-T Full Stack Developer Nanodegree Program
					</EducationField>
				</EducationItem>
			</EducationInfo>
		</motion.div>
	);
};

export default EducationSection;
