import styled from "styled-components";
import { motion } from "framer-motion";
import { identity, availability, readings, positioning } from "../content/profile";
import { Page, Eyebrow, FieldLabel, ActionPrimary, Action, ActionRow, DrawnRule, drawRule } from "./ui";
import { useMotionStart } from "./useScroll";
import { color, font, bp } from "../theme";
import academicCv from "../file/Olaitan_Adeniyi_Academic_CV.pdf";
import softwareResume from "../file/Olaitan_Adeniyi_Software_Resume.pdf";

/**
 * The hero is a drawing title block: the panel in the corner of every
 * engineering sheet that states who drew it, what it is, and its status.
 * Below it, the readings rail — each claim as a value with a unit and a source.
 */

const plot = {
	hidden: { opacity: 0, y: 10 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 0.61, 0.36, 1] },
	}),
};

/**
 * The readings are the evidence the whole page rests on, and they sit last in
 * the plot sequence. They move but never fade, so a throttled or interrupted
 * animation can leave them offset — never invisible.
 */
const plotSolid = {
	hidden: { y: 12 },
	show: (i = 0) => ({
		y: 0,
		transition: { duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.22, 0.61, 0.36, 1] },
	}),
};

const TitleBlock = () => {
	// The title block is the one thing every visitor must see. If motion is
	// turned down, it starts in its finished state rather than plotting in.
	const start = useMotionStart();

	return (
	<Header>
		<Page>
			<Block initial={start} animate="show">
				<Identity>
					<motion.div variants={plot} custom={0}>
						<Eyebrow>Curriculum vitae &mdash; {identity.site}</Eyebrow>
					</motion.div>
					<motion.h1 variants={plot} custom={1}>
						{identity.name}
					</motion.h1>
					<motion.p variants={plot} custom={2} className="role">
						{identity.role}
					</motion.p>
				</Identity>

				<RevCell>
					<motion.div variants={plot} custom={1}>
						<FieldLabel>Rev</FieldLabel>
						<Rev className="num">{availability.revision}</Rev>
					</motion.div>
				</RevCell>

				<RuleSpan>
					<DrawnRule variants={drawRule} />
				</RuleSpan>

				<Field>
					<motion.div variants={plot} custom={3}>
						<FieldLabel>Discipline</FieldLabel>
						<FieldText>{identity.discipline}</FieldText>
					</motion.div>
				</Field>
				<Field>
					<motion.div variants={plot} custom={4}>
						<FieldLabel>Degree</FieldLabel>
						<FieldText>First Class Honours, 4.52 / 5.00</FieldText>
					</motion.div>
				</Field>
				<Field>
					<motion.div variants={plot} custom={5}>
						<FieldLabel>Based</FieldLabel>
						<FieldText>{identity.location}</FieldText>
					</motion.div>
				</Field>
				<Field $status>
					<motion.div variants={plot} custom={6}>
						<FieldLabel>Status</FieldLabel>
						<FieldText>
							<Dot aria-hidden="true" />
							Open to offers &mdash; {availability.sponsorship.toLowerCase()}
						</FieldText>
					</motion.div>
				</Field>
			</Block>

			<Lede initial={start} animate="show">
				<motion.p variants={plot} custom={7}>
					{positioning.lede}
				</motion.p>
				<motion.div variants={plot} custom={8}>
					<Docs>
						<FieldLabel>Two readers, two documents</FieldLabel>
						<ActionRow>
							<ActionPrimary
								href={softwareResume}
								download="Olaitan_Adeniyi_Software_Resume.pdf"
							>
								Software resume
							</ActionPrimary>
							<Action
								href={academicCv}
								download="Olaitan_Adeniyi_Academic_CV.pdf"
							>
								Academic CV
							</Action>
						</ActionRow>
					</Docs>
				</motion.div>
			</Lede>

			<Readings initial={start} animate="show">
				{readings.map((r, i) => (
					<Reading key={r.label} variants={plotSolid} custom={9 + i}>
						<Value className="num">
							{r.value}
							<Unit>{r.unit}</Unit>
						</Value>
						<ReadingLabel>{r.label}</ReadingLabel>
						<ReadingNote>{r.note}</ReadingNote>
						<ReadingSource>{r.source}</ReadingSource>
					</Reading>
				))}
			</Readings>
		</Page>
	</Header>
	);
};

/* ---------- layout ---------- */

const Header = styled.div`
	padding: 4.5rem 0 1rem;

	${bp.md} {
		padding: 2.25rem 0 0.5rem;
	}
`;

const Block = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border: 1px solid ${color.ink};
	background: ${color.sheet};

	${bp.md} {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const Identity = styled.div`
	grid-column: 1 / 4;
	padding: 2.4rem 2rem 2.1rem;

	h1 {
		font-size: clamp(2.3rem, 6.4vw, 4.6rem);
		text-transform: uppercase;
		letter-spacing: -0.035em;
		margin: 1.1rem 0 0.9rem;
	}

	.role {
		font-family: ${font.data};
		font-size: 0.82rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: ${color.blueprint};
	}

	${bp.md} {
		grid-column: 1 / -1;
		padding: 1.5rem 1.15rem 1.4rem;
	}
`;

const RevCell = styled.div`
	grid-column: 4 / 5;
	border-left: 1px solid ${color.rule};
	padding: 2.4rem 1.5rem;

	${bp.md} {
		grid-column: 1 / -1;
		border-left: none;
		border-top: 1px solid ${color.rule};
		padding: 1.1rem 1.15rem;
	}
`;

const Rev = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	display: block;
	letter-spacing: -0.01em;
`;

/** Full-width rule between the identity row and the field row. */
const RuleSpan = styled.div`
	grid-column: 1 / -1;
`;

const Field = styled.div`
	padding: 1.35rem 1.5rem 1.5rem;
	border-left: 1px solid ${color.rule};
	background: ${(p) => (p.$status ? color.blueprintTint : "transparent")};

	&:first-of-type {
		border-left: none;
	}

	${bp.md} {
		padding: 1.05rem 1.15rem 1.15rem;

		&:nth-of-type(odd) {
			border-left: none;
		}
		&:nth-of-type(n + 3) {
			border-top: 1px solid ${color.rule};
		}
	}
`;

const FieldText = styled.span`
	font-family: ${font.display};
	font-size: 0.92rem;
	font-weight: 600;
	line-height: 1.35;
	display: block;
`;

const Dot = styled.span`
	display: inline-block;
	width: 0.42rem;
	height: 0.42rem;
	border-radius: 50%;
	background: ${color.signal};
	margin-right: 0.45rem;
	vertical-align: middle;
`;

const Lede = styled(motion.div)`
	display: grid;
	grid-template-columns: minmax(0, 1.55fr) minmax(0, 1fr);
	gap: 2.5rem;
	align-items: start;
	padding: 2.6rem 0 3rem;

	p {
		font-size: clamp(1.12rem, 2.1vw, 1.42rem);
		line-height: 1.5;
		max-width: 46ch;
	}

	${bp.md} {
		grid-template-columns: 1fr;
		gap: 1.6rem;
		padding: 1.75rem 0 2.25rem;
	}
`;

const Docs = styled.div`
	padding-top: 0.4rem;

	${bp.md} {
		padding-top: 0;
	}
`;

const Readings = styled(motion.dl)`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	border-top: 1px solid ${color.ink};
	border-bottom: 1px solid ${color.rule};

	${bp.lg} {
		grid-template-columns: repeat(2, 1fr);
	}
	${bp.sm} {
		grid-template-columns: 1fr;
	}
`;

const Reading = styled(motion.div)`
	padding: 1.6rem 1.5rem 1.75rem;
	border-left: 1px solid ${color.ruleFaint};

	&:first-child {
		border-left: none;
		padding-left: 0;
	}

	${bp.lg} {
		&:nth-child(odd) {
			border-left: none;
			padding-left: 0;
		}
		&:nth-child(n + 3) {
			border-top: 1px solid ${color.ruleFaint};
		}
	}
	${bp.sm} {
		border-left: none;
		padding-left: 0;

		& + & {
			border-top: 1px solid ${color.ruleFaint};
		}
	}
`;

const Value = styled.dd`
	font-size: clamp(2.1rem, 4.4vw, 2.9rem);
	font-weight: 500;
	color: ${color.signal};
	letter-spacing: -0.04em;
	line-height: 1;
	display: flex;
	align-items: baseline;
	gap: 0.35rem;
`;

const Unit = styled.span`
	font-size: 0.72rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: ${color.graphite};
`;

const ReadingLabel = styled.dt`
	font-family: ${font.display};
	font-size: 0.92rem;
	font-weight: 600;
	margin-top: 0.85rem;
	line-height: 1.3;
`;

const ReadingNote = styled.p`
	font-size: 0.9rem;
	color: ${color.graphite};
	margin-top: 0.4rem;
	line-height: 1.45;
`;

const ReadingSource = styled.span`
	font-family: ${font.data};
	font-size: 0.6rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
	display: block;
	margin-top: 0.7rem;
`;

export default TitleBlock;

