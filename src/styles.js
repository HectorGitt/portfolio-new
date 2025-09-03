import styled from "styled-components";
import { motion } from "framer-motion";

//styled components
export const LayoutStyle = styled(motion.div)`
	height: 100vh;
	max-width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 2rem 5rem;
	color: white;
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
				rgba(0, 212, 255, 0.1) 0%,
				transparent 50%
			),
			radial-gradient(
				circle at 70% 80%,
				rgba(35, 217, 151, 0.1) 0%,
				transparent 50%
			);
		pointer-events: none;
	}
	@media (max-width: 900px) {
		flex-direction: column;
		align-items: center;
		height: fit-content;
		padding: 2rem 1rem;
		text-align: center;
		width: 100%;
	}
	a {
		font-weight: 600;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 2px solid transparent;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		color: #ffffff;
		transition: all 0.3s ease;
		font-family: "Inter", sans-serif;
		text-decoration: none;
		border-radius: 8px;
		box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
		&:hover {
			transform: translateY(-2px);
			box-shadow: 0 6px 20px rgba(0, 212, 255, 0.4);
			background: linear-gradient(135deg, #23d997 0%, #00d4ff 100%);
		}
	}
`;
export const DescriptionStyle = styled.div`
	max-width: 100%;
	flex: 1;
	z-index: 2;
	padding-right: 5rem;
	position: relative;
	@media (max-width: 900px) {
		padding: 0;
		flex-direction: column;
		align-items: center;
		justify-items: center;
	}

	h2 {
		font-weight: 300;
		font-size: 3.5rem;
		margin-bottom: 2rem;
		line-height: 1.1;
		@media (max-width: 900px) {
			font-size: 2.5rem;
		}
	}
	h4 {
		font-size: 2.2rem;
		font-weight: 400;
		color: #f8fafc;
		margin-bottom: 1.5rem;
		line-height: 1.3;
	}
`;
export const ImageStyle = styled.div`
	flex: 1;
	z-index: 2;
	overflow: hidden;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		width: 90%;
		max-width: 500px;
		height: 500px;
		object-fit: cover;
		border-radius: 20px;
		box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
			0 0 20px rgba(0, 212, 255, 0.2);
		transition: all 0.3s ease;
		&:hover {
			transform: scale(1.02);
			box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4),
				0 0 30px rgba(0, 212, 255, 0.3);
		}
		@media (max-width: 900px) {
			width: 95%;
			max-width: 400px;
			height: 400px;
			margin-top: 50px;
		}
	}
`;
export const Hidden = styled.div`
	overflow: hidden;
`;

// Education section styled components
export const EducationInfo = styled.div`
	margin-top: 3rem;
	padding: 2rem;
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const EducationTitle = styled.h3`
	font-size: 2rem;
	font-weight: 600;
	color: #f8fafc;
	margin-bottom: 2rem;
	text-align: center;
	background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

export const EducationItem = styled.div`
	display: flex;
	flex-direction: column;
	padding: 1.5rem;
	margin-bottom: 1.5rem;
	background: rgba(255, 255, 255, 0.03);
	border-radius: 10px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	transition: all 0.3s ease;
	&:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.08);
		box-shadow: 0 8px 25px rgba(0, 212, 255, 0.1);
	}
	&:last-child {
		margin-bottom: 0;
	}
`;

export const EducationDegree = styled.h4`
	font-size: 1.4rem;
	font-weight: 600;
	color: #f8fafc;
	margin-bottom: 0.5rem;
	line-height: 1.3;
`;

export const EducationYear = styled.span`
	font-size: 1rem;
	color: #00d4ff;
	font-weight: 500;
	margin-bottom: 0.5rem;
	display: block;
`;

export const EducationField = styled.p`
	font-size: 1.1rem;
	color: #b8c5d1;
	line-height: 1.4;
	margin: 0;
`;
