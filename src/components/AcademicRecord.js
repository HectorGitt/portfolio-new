import styled from "styled-components";
import { motion } from "framer-motion";
import { degree, transcript, awards, certifications, memberships } from "../content/academic";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, Eyebrow, FieldLabel, TickList, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

/** Highest score in the transcript, used to scale the score bars. */
const CEILING = 100;

const AcademicRecord = () => {
	const [element, controls, start] = useScroll();
	const [gradeEl, gradeControls] = useScroll();

	return (
		<>
			<Sheet>
				<Page>
					<SheetHead
						label="Record"
						meta={degree.span}
						title="Academic record"
						intro="First Class Honours, top of the department, and a transcript weighted toward the physical side of engineering."
					/>

					<Degree ref={element} variants={revealStagger} initial={start} animate={controls}>
						<DegreeMain variants={revealUp}>
							<Institution>{degree.institution}</Institution>
							<Campus>{degree.campus}</Campus>
							<Award>{degree.award}</Award>
							<Capstone>
								<FieldLabel>Capstone</FieldLabel>
								<CapstoneTitle>{degree.capstone}</CapstoneTitle>
								<CapstoneNote>{degree.capstoneNote}</CapstoneNote>
							</Capstone>
						</DegreeMain>

						<DegreeStats variants={revealUp}>
							<Stat>
								<FieldLabel>CGPA</FieldLabel>
								<StatValue className="num">
									{degree.cgpa}
									<StatUnit>/ {degree.cgpaScale}</StatUnit>
								</StatValue>
							</Stat>
							<Stat>
								<FieldLabel>Classification</FieldLabel>
								<StatText>{degree.classification}</StatText>
							</Stat>
							<Stat>
								<FieldLabel>Conferred</FieldLabel>
								<StatText>{degree.conferred}</StatText>
							</Stat>
						</DegreeStats>
					</Degree>
				</Page>
			</Sheet>

			<Sheet>
				<Page>
					<SheetHead
						label="Transcript"
						meta="Scores out of 100"
						title="Core engineering results"
						intro="The courses that do the load-bearing work in my research proposals, grouped as they are on the transcript."
					/>

					<Grades ref={gradeEl} variants={revealStagger} initial={start} animate={gradeControls}>
						{transcript.map((group) => (
							<GradeGroup key={group.group} variants={revealUp}>
								<GradeGroupName>{group.group}</GradeGroupName>
								{group.rows.map((row) => (
									<GradeRow key={row.course}>
										<GradeCourse>
											{row.course}
											{row.code && <Code>{row.code}</Code>}
										</GradeCourse>
										<Bar>
											<BarFill
												style={{ width: `${(row.score / CEILING) * 100}%` }}
											/>
										</Bar>
										<GradeScore className="num">{row.score}</GradeScore>
									</GradeRow>
								))}
							</GradeGroup>
						))}
					</Grades>
				</Page>
			</Sheet>

			<Sheet>
				<Page>
					<SheetHead
						label="Distinctions"
						meta={`${awards.length} awards · ${certifications.length} certifications`}
						title="Awards & certifications"
					/>

					<Columns>
						<Column>
							<Eyebrow>Awards</Eyebrow>
							<Items>
								{awards.map((a) => (
									<Item key={a.title}>
										<ItemHead>
											<ItemTitle>{a.title}</ItemTitle>
											<ItemYear className="num">{a.year}</ItemYear>
										</ItemHead>
										<ItemBody>{a.body}</ItemBody>
										{a.detail.length > 0 && (
											<TickList>
												{a.detail.map((d, i) => (
													<li key={i}>{d}</li>
												))}
											</TickList>
										)}
									</Item>
								))}
							</Items>
						</Column>

						<Column>
							<Eyebrow>Certifications</Eyebrow>
							<Items>
								{certifications.map((c) => (
									<Item key={c.title}>
										<ItemHead>
											<ItemTitle>{c.title}</ItemTitle>
											<ItemYear className="num">{c.year}</ItemYear>
										</ItemHead>
										<ItemBody>{c.body}</ItemBody>
									</Item>
								))}
							</Items>

							<MembershipBlock>
								<Eyebrow>Professional membership</Eyebrow>
								<Items>
									{memberships.map((m) => (
										<Item key={m.abbr}>
											<ItemHead>
												<ItemTitle>{m.abbr}</ItemTitle>
												<ItemYear className="num">{m.year}</ItemYear>
											</ItemHead>
											<ItemBody>{m.title}</ItemBody>
										</Item>
									))}
								</Items>
							</MembershipBlock>
						</Column>
					</Columns>
				</Page>
			</Sheet>
		</>
	);
};

/* ---------- degree ---------- */

const Degree = styled(motion.div)`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr);
	border: 1px solid ${color.ink};
	background: ${color.sheet};

	${bp.lg} {
		grid-template-columns: 1fr;
		margin-top: 2rem;
	}
`;

const DegreeMain = styled(motion.div)`
	padding: 2rem;

	${bp.md} {
		padding: 1.25rem;
	}
`;

const Institution = styled.h3`
	font-size: clamp(1.5rem, 3.4vw, 2.3rem);
	text-transform: uppercase;
`;

const Campus = styled.p`
	font-family: ${font.data};
	font-size: 0.66rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
	margin-top: 0.55rem;
`;

const Award = styled.p`
	font-size: 1.1rem;
	color: ${color.blueprint};
	margin-top: 1.1rem;
	font-weight: 600;
`;

const Capstone = styled.div`
	margin-top: 1.9rem;
	padding-top: 1.4rem;
	border-top: 1px solid ${color.ruleFaint};
`;

const CapstoneTitle = styled.p`
	font-size: 1.02rem;
	font-weight: 600;
`;

const CapstoneNote = styled.p`
	font-size: 0.94rem;
	color: ${color.graphite};
	margin-top: 0.4rem;
`;

const DegreeStats = styled(motion.div)`
	border-left: 1px solid ${color.rule};
	display: grid;
	align-content: start;

	${bp.lg} {
		border-left: none;
		border-top: 1px solid ${color.rule};
		grid-template-columns: repeat(3, 1fr);
	}
	${bp.sm} {
		grid-template-columns: 1fr;
	}
`;

const Stat = styled.div`
	padding: 1.5rem 1.75rem;
	border-bottom: 1px solid ${color.ruleFaint};

	&:last-child {
		border-bottom: none;
	}

	${bp.lg} {
		border-bottom: none;
		border-right: 1px solid ${color.ruleFaint};

		&:last-child {
			border-right: none;
		}
	}
	${bp.sm} {
		border-right: none;
		border-bottom: 1px solid ${color.ruleFaint};
		padding: 1.1rem 1.25rem;
	}
`;

const StatValue = styled.span`
	font-size: 2.6rem;
	font-weight: 500;
	color: ${color.signal};
	letter-spacing: -0.04em;
	line-height: 1;
	display: flex;
	align-items: baseline;
	gap: 0.4rem;
`;

const StatUnit = styled.span`
	font-size: 0.7rem;
	letter-spacing: 0.1em;
	color: ${color.graphite};
`;

const StatText = styled.span`
	font-family: ${font.display};
	font-size: 1.02rem;
	font-weight: 600;
`;

/* ---------- transcript ---------- */

const Grades = styled(motion.div)`
	margin-top: 3rem;
	display: grid;
	gap: 2.5rem;

	${bp.md} {
		margin-top: 2rem;
		gap: 1.75rem;
	}
`;

const GradeGroup = styled(motion.div)``;

const GradeGroupName = styled.h3`
	font-family: ${font.data};
	font-size: 0.66rem;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${color.blueprint};
	padding-bottom: 0.75rem;
	border-bottom: 1px solid ${color.ink};
`;

const GradeRow = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr) 12rem 3rem;
	align-items: center;
	gap: 1.5rem;
	padding: 0.85rem 0;
	border-bottom: 1px solid ${color.ruleFaint};

	${bp.md} {
		grid-template-columns: minmax(0, 1fr) 3rem;
		gap: 0.75rem;
	}
`;

const GradeCourse = styled.span`
	font-size: 0.98rem;
	display: flex;
	align-items: baseline;
	gap: 0.6rem;
	flex-wrap: wrap;
`;

const Code = styled.span`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.12em;
	color: ${color.graphite};
`;

const Bar = styled.div`
	height: 6px;
	background: ${color.sheetSunk};
	border: 1px solid ${color.ruleFaint};

	${bp.md} {
		display: none;
	}
`;

const BarFill = styled.div`
	height: 100%;
	background: ${color.blueprint};
`;

const GradeScore = styled.span`
	font-size: 1.02rem;
	font-weight: 500;
	text-align: right;
	color: ${color.signal};
`;

/* ---------- awards ---------- */

const Columns = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 3rem;

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 2.25rem;
		margin-top: 2rem;
	}
`;

const Column = styled.div``;

const Items = styled.ul`
	margin-top: 1.1rem;
`;

const Item = styled.li`
	padding: 1.15rem 0;
	border-top: 1px solid ${color.ruleFaint};

	&:first-child {
		border-top: 1px solid ${color.ink};
	}
`;

const ItemHead = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 1rem;
`;

const ItemTitle = styled.h3`
	font-size: 1.04rem;
	font-weight: 700;
	line-height: 1.25;
`;

const ItemYear = styled.span`
	font-size: 0.72rem;
	color: ${color.graphite};
	flex-shrink: 0;
	letter-spacing: 0.06em;
`;

const ItemBody = styled.p`
	font-size: 0.94rem;
	color: ${color.graphite};
	margin: 0.35rem 0 0.6rem;
`;

const MembershipBlock = styled.div`
	margin-top: 2.5rem;
`;

export default AcademicRecord;
