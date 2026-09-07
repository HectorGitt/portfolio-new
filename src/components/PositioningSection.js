import styled from "styled-components";
import { motion } from "framer-motion";
import { positioning } from "../content/profile";
import { useScroll } from "./useScroll";
import { Page, Sheet, Eyebrow, SheetTitle, SheetHeadRow, Prose, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const PositioningSection = () => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<Grid ref={element} variants={revealStagger} initial={start} animate={controls}>
					<Left>
						<SheetHeadRow>
							<motion.span variants={revealUp}>
								<Eyebrow>Position</Eyebrow>
							</motion.span>
						</SheetHeadRow>
						<motion.div variants={revealUp}>
							<SheetTitle>Two halves of one method</SheetTitle>
						</motion.div>
					</Left>

					<Right>
						<Prose>
							{positioning.body.map((para, i) => (
								<motion.p key={i} variants={revealUp}>
									{para}
								</motion.p>
							))}
						</Prose>
						<motion.div variants={revealUp}>
							<Pursuing>
								<Eyebrow>What I am looking for</Eyebrow>
								<p>{positioning.nowPursuing}</p>
							</Pursuing>
						</motion.div>
					</Right>
				</Grid>
			</Page>
		</Sheet>
	);
};

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
	gap: 3.5rem;
	align-items: start;

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`;

const Left = styled.div`
	position: sticky;
	top: 7rem;

	${bp.lg} {
		position: static;
	}
`;

const Right = styled.div``;

const Pursuing = styled.div`
	margin-top: 2.25rem;
	padding: 1.5rem 1.75rem;
	background: ${color.sheet};
	border-left: 2px solid ${color.signal};

	p {
		font-family: ${font.body};
		font-size: 1.04rem;
		margin-top: 0.7rem;
		color: ${color.ink};
	}

	${bp.md} {
		padding: 1.15rem 1.25rem;
	}
`;

export default PositioningSection;
