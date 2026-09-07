import styled from "styled-components";
import { motion } from "framer-motion";
import { useScroll } from "./useScroll";
import { Eyebrow, SheetHeadRow, SheetTitle, SheetIntro, revealUp, revealStagger } from "./ui";
import { color, font } from "../theme";

/**
 * Section header for a sheet. `label` names the kind of record; `meta` carries
 * a fact about the record itself (a count, a span of years) — never decoration.
 */
const SheetHead = ({ label, meta, title, intro }) => {
	const [element, controls, start] = useScroll();

	return (
		<motion.header
			ref={element}
			variants={revealStagger}
			initial={start}
			animate={controls}
		>
			<SheetHeadRow>
				<motion.span variants={revealUp}>
					<Eyebrow>{label}</Eyebrow>
				</motion.span>
				{meta && (
					<motion.span variants={revealUp}>
						<Meta>{meta}</Meta>
					</motion.span>
				)}
			</SheetHeadRow>
			<motion.div variants={revealUp}>
				<SheetTitle>{title}</SheetTitle>
			</motion.div>
			{intro && (
				<motion.div variants={revealUp}>
					<SheetIntro>{intro}</SheetIntro>
				</motion.div>
			)}
		</motion.header>
	);
};

const Meta = styled.span`
	font-family: ${font.data};
	font-size: 0.66rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
	font-variant-numeric: tabular-nums;
`;

export default SheetHead;
