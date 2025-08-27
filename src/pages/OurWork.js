//import styled components
import styled from "styled-components";
//import images
import streamlab from "../images/projects/streamlab.png";
import collat from "../images/projects/collat.png";
import softplayer from "../images/projects/softplayer.png";
import dropmint from "../images/projects/dropmint.png";
import outlook from "../images/projects/outlook.png";
import dashboard from "../images/projects/dashboard.png";
import cardanogpt from "../images/projects/cardanogpt.png";
import datcaptures from "../images/projects/datcaptures.png";
import getlinked from "../images/projects/getlinked.png";
import adacubator from "../images/projects/adacubator.png";
import hypertrove from "../images/projects/hypertrove.png";
import defimentum from "../images/projects/defimentum.png";

//animation
import { motion } from "framer-motion";
import { pageAnime, fade, photoAnim, lineAnim } from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const OurWork = () => {
	const [element1, controls1] = useScroll();
	const [element2, controls2] = useScroll();
	const [element3, controls3] = useScroll();
	const [element4, controls4] = useScroll();
	const [element5, controls5] = useScroll();
	const [element6, controls6] = useScroll();
	const [element7, controls7] = useScroll();
	const [element8, controls8] = useScroll();
	const [element9, controls9] = useScroll();
	const [element10, controls10] = useScroll();
	const [element11, controls11] = useScroll();
	const cleanHost = window.location.host.replace(/^www\./, "");
	return (
		<WorkStyle
			variants={pageAnime}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<ScrollTop />

			<MovieStyle
				ref={element6}
				variants={fade}
				animate={controls6}
				initial="hidden"
			>
				<h2>Collat</h2>
				<motion.p variants={fade}>
					Collat Finance is an on-chain lending platform backed by
					tokenzied RWA collateral built on the Solana Blockchain.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={collat} alt="collat" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/collat"
					>
						Check Code
					</a>
					<a target="__blank" href={`https://collat.${cleanHost}`}>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element7}
				variants={fade}
				animate={controls7}
				initial="hidden"
			>
				<h2>DAT Captures</h2>
				<motion.p variants={fade}>
					A Photography web app created with NextJs and Styled
					Components.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={datcaptures} alt="DatCaptures" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/DATCaptures"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://datcaptures.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>
			<MovieStyle
				ref={element1}
				variants={fade}
				animate={controls1}
				initial="hidden"
			>
				<h2>CardanoGPT</h2>
				<motion.p variants={fade}>
					A React-based page, leveraging Styled Components, to enhance
					user engagement and drive traffic for a Web3 Solution.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={cardanogpt} alt="cardanogpt homepage" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/CardanoGPT"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://cardanogpt.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>
			<MovieStyle
				ref={element8}
				variants={fade}
				animate={controls8}
				initial="hidden"
			>
				<h2>getLinked</h2>
				<motion.p variants={fade}>
					An Hackathon registration platform created with ReactJs:
					Axios for handling HTTP Request, Formik and Yup for handling
					forms and validations, Framer motion and
					react-intersection-observer for animations and transitions.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={getlinked} alt="getlinked homepage" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/getlinked"
					>
						Check Code
					</a>
					<a target="__blank" href={`https://getlinked.${cleanHost}`}>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element9}
				variants={fade}
				animate={controls9}
				initial="hidden"
			>
				<h2>Adacubator</h2>
				<motion.p variants={fade}>
					An Idea Pitching Website created with nextjs.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={adacubator} alt="adacubator homepage" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/adacubator"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://adacubator.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			{/* Defimentum card inserted at the middle */}
			<MovieStyle
				variants={fade}
				ref={element11}
				animate={controls11}
				initial="hidden"
			>
				<h2>Defimentum</h2>
				<motion.p variants={fade}>
					Defimentum is a value-add-focused angel investment outfit on
					a mission to architect the future of Crypto.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={defimentum} alt="defimentum homepage" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/defimentum"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://defimentum.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element10}
				variants={fade}
				animate={controls10}
				initial="hidden"
			>
				<h2>Hypertrove</h2>
				<motion.p variants={fade}>
					An Idea Pitching Website created with nextjs.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={hypertrove} alt="hypertrove homepage" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/hypertrove"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://hypertrove.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element4}
				variants={fade}
				animate={controls4}
				initial="hidden"
			>
				<h2>Dropmint</h2>
				<motion.p variants={fade}>
					A Sweep Stake Platform created with Django, Web3.py,
					Solana.py, tweepy and Neverbounce Api.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={dropmint} alt="dropmint" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/twitter-mint"
					>
						Check Code
					</a>
					<a target="__blank" href="http://app.dropmint.com/">
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element5}
				variants={fade}
				animate={controls5}
				initial="hidden"
			>
				<h2>React Dashboard</h2>
				<motion.p variants={fade}>
					A React Admin Dashboard built with Material UI, Nivo Chart,
					Formik, FullCalendar and Yup.
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={dashboard} alt="dashboard" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/react-admin"
					>
						Check Code
					</a>
					<a target="__blank" href={`https://dashboard.${cleanHost}`}>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle>
				<motion.h2 variants={fade}>Stream Lab</motion.h2>
				<motion.p variants={fade}>
					A Movie web app created with React, SCSS,React-Context ,
					Firebase , axios and TMDB Api
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<Hide>
					<motion.img
						variants={photoAnim}
						src={streamlab}
						alt="streamlab"
					/>
				</Hide>
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/stream-lab"
					>
						Check Code
					</a>
					<a target="__blank" href={`https://streamlab.${cleanHost}`}>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>
			<MovieStyle
				ref={element2}
				variants={fade}
				animate={controls2}
				initial="hidden"
			>
				<h2>Outlook Phishing Test</h2>
				<motion.p variants={fade}>
					An outlook email phishing test created with ReactJs and
					Bootstrap
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={outlook} alt="hand holding a hook with text " />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/outlook-phishing-test"
					>
						Check Code
					</a>
					<a
						target="__blank"
						href={`https://phishing-test.${cleanHost}`}
					>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle
				ref={element3}
				variants={fade}
				animate={controls3}
				initial="hidden"
			>
				<h2>Soft Player</h2>
				<motion.p variants={fade}>
					A Music player app created with React and SCSS
				</motion.p>
				<motion.div variants={lineAnim} className="line"></motion.div>
				<img src={softplayer} alt="softplayer" />
				<Buttons>
					<a
						target="__blank"
						href="https://github.com/HectorGitt/portfolio-new"
					>
						Check Code
					</a>
					<a target="__blank" href={`https://music.${cleanHost}`}>
						Preview Live
					</a>
				</Buttons>
			</MovieStyle>

			<MovieStyle>
				<motion.p variants={fade}>
					Check out my github for more projects
					<Buttons>
						<a
							target="__blank"
							href="https://github.com/hectorGitt"
						>
							Github <FontAwesomeIcon icon={faGithub} />
						</a>
					</Buttons>
				</motion.p>
			</MovieStyle>
		</WorkStyle>
	);
};

const WorkStyle = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	background-color: white;
	@media (max-width: 900px) {
		padding: 0 2rem;
		grid-template-columns: 1fr;
	}
	p {
		color: #7e7777;
	}
	h2 {
		padding: 1rem 0;
		@media (max-width: 900px) {
			padding: 0;
		}
	}
`;

const MovieStyle = styled(motion.div)`
	background: #fff;
	border-radius: 10px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.line {
		height: 0.5rem;
		background: #23d997;
		margin-bottom: 3rem;
	}
	@media (max-width: 900px) {
		padding: 1rem;
		margin-bottom: 0;
		padding-top: 2rem;
	}
	img {
		width: 100%;
		border-radius: 8px;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

const Buttons = styled(motion.div)`
	display: flex;
	margin-top: 20px;
	justify-content: space-around;
	a {
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;
		padding: 1rem 2rem;
		border: 3px solid #23d997;
		background: #ffffff;
		color: #141414;
		transition: all 0.5s ease;
		font-family: "Inter", sans-serif;
		text-decoration: none;
		&:hover {
			background-color: #23d997;
			color: #fff;
		}
		@media (max-width: 900px) {
			font-size: 0.7rem;
		}
	}
`;

export default OurWork;
