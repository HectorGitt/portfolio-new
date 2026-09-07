import styled from "styled-components";
import { motion } from "framer-motion";
import { researchInterests, researchNote } from "../content/academic";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, Eyebrow, TickList, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const ResearchSection = () => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Proposal"
					meta={`${researchInterests.length} tracks`}
					title="What I want to research"
					intro={researchNote}
				/>

				<Tracks ref={element} variants={revealStagger} initial={start} animate={controls}>
					{researchInterests.map((track) => (
						<Track key={track.id} variants={revealUp}>
							<TrackHead>
								<Eyebrow>{track.frame}</Eyebrow>
								<TrackTitle>{track.title}</TrackTitle>
							</TrackHead>

							<TrackBody>
								<Thesis>{track.thesis}</Thesis>
								{track.body.map((p, i) => (
									<Para key={i}>{p}</Para>
								))}

								<Grounding>
									<Eyebrow>What I bring to it</Eyebrow>
									<TickList>
										{track.grounding.map((g, i) => (
											<li key={i}>{g}</li>
										))}
									</TickList>
								</Grounding>
							</TrackBody>
						</Track>
					))}
				</Tracks>
			</Page>
		</Sheet>
	);
};

const Tracks = styled(motion.div)`
	margin-top: 3rem;

	${bp.md} {
		margin-top: 2rem;
	}
`;

const Track = styled(motion.article)`
	display: grid;
	grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.4fr);
	gap: 3rem;
	padding: 2.5rem 0;
	border-top: 1px solid ${color.ink};

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 1.25rem;
		padding: 1.75rem 0;
	}
`;

const TrackHead = styled.div`
	position: sticky;
	top: 7rem;
	align-self: start;

	${bp.lg} {
		position: static;
	}
`;

const TrackTitle = styled.h3`
	font-size: clamp(1.5rem, 3vw, 2.1rem);
	margin-top: 0.85rem;
	text-transform: uppercase;
	letter-spacing: -0.025em;
`;

const TrackBody = styled.div``;

const Thesis = styled.p`
	font-size: 1.18rem;
	line-height: 1.55;
	border-left: 2px solid ${color.signal};
	padding-left: 1.25rem;
	margin-bottom: 1.5rem;

	${bp.md} {
		font-size: 1.08rem;
	}
`;

const Para = styled.p`
	font-size: 1.02rem;
	color: ${color.ink};
	margin-bottom: 1.05rem;
`;

const Grounding = styled.div`
	margin-top: 1.9rem;
	padding: 1.5rem 1.65rem;
	background: ${color.sheet};
	border: 1px solid ${color.rule};

	ul {
		margin-top: 0.9rem;
	}

	li {
		font-family: ${font.body};
		font-size: 0.96rem;
	}

	${bp.md} {
		padding: 1.15rem 1.25rem;
	}
`;

export default ResearchSection;
