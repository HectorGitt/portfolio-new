import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import ham from "../images/icon/nav.svg";
import times from "../images/icon/times.svg";
import { useState } from "react";
import { AnimateSharedLayout } from "framer-motion";
const Nav = () => {
	const { pathname } = useLocation();
	const [nav, setNav] = useState(false);
	const toggleNav = () => {
		setNav(!nav);
	};
	const closeNav = () => {
		setNav(false);
	};
	return (
		<NavStyle>
			<h1>
				<Link to="/" id="logo" onClick={closeNav}>
					Portfolio
				</Link>
			</h1>
			<motion.img
				layout
				src={!nav ? ham : times}
				onClick={toggleNav}
				alt="harmburger"
			/>
			<AnimateSharedLayout>
				<motion.ul layout className={nav ? "mobile" : ""}>
					<li>
						<Link to="/" onClick={closeNav}>
							1. About
						</Link>
						<Line
							transition={{ duration: 0.75 }}
							initial={{ width: "0%" }}
							animate={{ width: pathname === "/" ? "80%" : "0%" }}
						/>
					</li>
					<li>
						<Link to="/work" onClick={closeNav}>
							2. My Work
						</Link>
						<Line
							transition={{ duration: 0.75 }}
							initial={{ width: "0%" }}
							animate={{
								width: pathname === "/work" ? "80%" : "0%",
							}}
						/>
					</li>
					<li>
						<Link to="/contact" onClick={closeNav}>
							3. Contact Us
						</Link>
						<Line
							transition={{ duration: 0.75 }}
							initial={{ width: "0%" }}
							animate={{
								width: pathname === "/contact" ? "80%" : "0%",
							}}
						/>
					</li>
				</motion.ul>
			</AnimateSharedLayout>
		</NavStyle>
	);
};

const NavStyle = styled.nav`
	min-height: 10vh;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 5rem;
	background: rgba(15, 15, 35, 0.95);
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
	border-bottom: 1px solid rgba(0, 212, 255, 0.1);
	position: sticky;
	top: 0;
	z-index: 3;
	box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
	a {
		color: #e2e8f0;
		text-decoration: none;
		transition: all 0.3s ease;
		&:hover {
			color: #00d4ff;
		}
	}
	@media (max-width: 900px) {
		padding: 1rem 2rem;
	}
	ul {
		display: flex;
		list-style: none;
		width: 30rem;
		justify-content: space-between;
		@media (max-width: 900px) {
			display: none;
		}
	}
	ul.mobile {
		@media (max-width: 900px) {
			display: grid;
			flex-direction: column;
			position: fixed;
			top: 10vh;
			left: 0;
			height: 50vh;
			background: rgba(15, 15, 35, 0.98);
			backdrop-filter: blur(15px);
			-webkit-backdrop-filter: blur(15px);
			width: 100vw;
			border-top: 1px solid rgba(0, 212, 255, 0.1);
			li {
				padding: 20px;
				border-bottom: 1px solid rgba(255, 255, 255, 0.05);
				&:hover {
					background: rgba(0, 212, 255, 0.05);
				}
			}
		}
	}
	li {
		position: relative;
	}

	#logo {
		font-size: 1.8rem;
		font-weight: 700;
		background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
		letter-spacing: -0.5px;
	}
	img {
		display: none;
		width: 30px;
		cursor: pointer;
		filter: brightness(0) invert(1);
		transition: all 0.3s ease;
		&:hover {
			filter: brightness(0) invert(1) sepia(1) saturate(5)
				hue-rotate(150deg);
		}
		@media (max-width: 900px) {
			display: grid;
		}
	}
`;
const Line = styled(motion.div)`
	height: 0.3rem;
	background: linear-gradient(135deg, #00d4ff 0%, #23d997 100%);
	width: 0%;
	position: absolute;
	bottom: -80%;
	left: 20%;
	border-radius: 2px;
	box-shadow: 0 0 10px rgba(0, 212, 255, 0.5);
	@media (max-width: 900px) {
		bottom: 30%;
	}
`;

export default Nav;
