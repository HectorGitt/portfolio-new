import styled from "styled-components";
import { motion } from "framer-motion";

const BlogSection = () => {
	const blogs = [
		{
			title: "Building The Copernican Solar System and Earth Simulator with Live NASA EONET Data",
			date: "Dec 19, 2025",
			readTime: "7 min read",
			description:
				"The Copernican Solar System is an interactive 3D simulation that brings our cosmic neighborhood to life right in the browser. Built with Three.js, Vite, and modern JavaScript, this project bridges the gap between scientific accuracy and immersive visualization.",
			link: "https://medium.com/@deniyi_dev/building-the-copernican-solar-system-and-earth-simulator-with-live-nasa-eonet-data-e46798b97923",
		},
		{
			title: "👻 Whisperer: Building a Horror Story Reader with Kiro",
			date: "Dec 19, 2025",
			readTime: "14 min read",
			description:
				"A comprehensive technical blog documenting the architecture, features, and development process of an immersive horror reading experience.",
			link: "https://medium.com/@deniyi_dev/whisperer-building-a-horror-story-reader-with-kiro-93c0ce0adb0f",
		},
		{
			title: "Building EagleSight: A Next-Gen Fleet Management System",
			date: "Dec 14, 2025",
			readTime: "4 min read",
			description:
				"Comprehensive fleet management and agricultural logistics platform designed to optimize tractor operations, monitor real-time telemetry, and solve complex Vehicle Routing Problems (VRP) in modern agriculture.",
			link: "https://medium.com/@deniyi_dev/building-eaglesight-a-next-gen-fleet-management-system-c29aa3b5ba80",
		},
		{
			title: "Building Locus: A Multi-Agent AI Travel Assistant from Scratch",
			date: "Nov 11, 2025",
			readTime: "12 min read",
			description:
				"Travel planning can be overwhelming. I built Locus to solve this problem — a comprehensive multi-agent AI travel assistant that brings all these capabilities together in one intelligent system.",
			link: "https://medium.com/@deniyi_dev/building-locus-a-multi-agent-ai-travel-assistant-from-scratch-53fb89125ba7",
		},
	];

	return (
		<BlogContainer>
			<div className="container">
				<h2>
					Recent <span>Blogs</span>
				</h2>
				<BlogGrid>
					{blogs.map((blog, index) => (
						<BlogCard
							key={index}
							href={blog.link}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.03 }}
							transition={{ duration: 0.3 }}
						>
							<BlogHeader>
								<h3>{blog.title}</h3>
								<MetaInfo>
									<span>{blog.date}</span>
									<span>·</span>
									<span>{blog.readTime}</span>
								</MetaInfo>
							</BlogHeader>
							<p>{blog.description}</p>
							<ReadMore>Read Article ➔</ReadMore>
						</BlogCard>
					))}
				</BlogGrid>
			</div>
		</BlogContainer>
	);
};

const BlogContainer = styled.div`
	padding: 5rem 5rem;
	background: linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%);
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
			circle at 50% 50%,
			rgba(0, 212, 255, 0.05) 0%,
			transparent 60%
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

const BlogGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 2rem;
`;

const BlogCard = styled(motion.a)`
	background: rgba(255, 255, 255, 0.05);
	border-radius: 15px;
	padding: 2rem;
	text-decoration: none;
	color: inherit;
	border: 1px solid rgba(255, 255, 255, 0.1);
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	height: 100%;

	&:hover {
		border-color: #00d4ff;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3),
			0 0 20px rgba(0, 212, 255, 0.1);
	}

	p {
		color: #cbd5e1;
		font-size: 1rem;
		line-height: 1.6;
		margin-bottom: 1.5rem;
		flex-grow: 1;
	}
`;

const BlogHeader = styled.div`
	margin-bottom: 1rem;

	h3 {
		font-size: 1.4rem;
		font-weight: 600;
		margin-bottom: 0.5rem;
		color: #f8fafc;
		line-height: 1.3;
	}
`;

const MetaInfo = styled.div`
	display: flex;
	gap: 0.5rem;
	font-size: 0.9rem;
	color: #94a3b8;
	font-weight: 500;
`;

const ReadMore = styled.span`
	color: #00d4ff;
	font-weight: 600;
	font-size: 1rem;
	display: inline-block;
	margin-top: auto;
`;

export default BlogSection;
