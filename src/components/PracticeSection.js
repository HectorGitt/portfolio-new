import styled from "styled-components";
import { motion } from "framer-motion";
import { fieldPractice, teaching } from "../content/profile";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, TickList, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const Block = ({ label, meta, title, intro, entries }) => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<SheetHead label={label} meta={meta} title={title} intro={intro} />
				<List ref={element} variants={revealStagger} initial={start} animate={controls}>
					{entries.map((e) => (
						<Entry key={`${e.org}-${e.role}-${e.start}`} variants={revealUp}>
							<Span>
								<Dates className="num">
									{e.start}
									<span aria-hidden="true"> — </span>
									{e.end}
								</Dates>
								{e.location && <Place>{e.location}</Place>}
							</Span>
							<Detail>
								<Org>{e.org}</Org>
								<Role>{e.role}</Role>
								<TickList>
									{e.points.map((p, i) => (
										<li key={i}>{p}</li>
									))}
								</TickList>
							</Detail>
						</Entry>
					))}
				</List>
			</Page>
		</Sheet>
	);
};

export const FieldPracticeSection = () => (
	<Block
		label="Practice"
		meta="2023 — 2024"
		title="Engineering in the field"
		intro="Plant and workshop work — the part of the record that is measured in effluent readings and machined parts rather than commits."
		entries={fieldPractice}
	/>
);

export const TeachingSection = () => (
	<Block
		label="Teaching"
		meta="2020 — 2025"
		title="Teaching & mentorship"
		intro="Five years running tutorials, writing materials and sitting with students who were stuck."
		entries={teaching}
	/>
);

const List = styled(motion.ol)`
	margin-top: 3rem;

	${bp.md} {
		margin-top: 2rem;
	}
`;

const Entry = styled(motion.li)`
	display: grid;
	grid-template-columns: 11rem minmax(0, 1fr);
	gap: 2.5rem;
	padding: 1.9rem 0;
	border-top: 1px solid ${color.ruleFaint};

	&:first-child {
		border-top: 1px solid ${color.ink};
	}

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 0.9rem;
		padding: 1.5rem 0;
	}
`;

const Span = styled.div`
	${bp.lg} {
		display: flex;
		align-items: baseline;
		gap: 1rem;
	}
`;

const Dates = styled.span`
	font-size: 0.76rem;
	letter-spacing: 0.06em;
	text-transform: uppercase;
	font-weight: 500;
	display: block;
`;

const Place = styled.span`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
	display: block;
	margin-top: 0.35rem;

	${bp.lg} {
		margin-top: 0;
	}
`;

const Detail = styled.div``;

const Org = styled.h3`
	font-size: clamp(1.2rem, 2.3vw, 1.5rem);
	text-transform: uppercase;
`;

const Role = styled.p`
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: ${color.blueprint};
	margin: 0.45rem 0 1.1rem;
`;

export default Block;
