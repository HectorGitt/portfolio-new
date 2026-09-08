import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { color, font, size, bp } from "../theme";

/* ---------- structure ---------- */

export const Page = styled.div`
	max-width: ${size.page};
	margin: 0 auto;
	padding: 0 ${size.gutter};

	${bp.md} {
		padding: 0 ${size.gutterSm};
	}
`;

/**
 * A section of the drawing. The rule across the top is the sheet edge; the
 * header row carries a label on the left and a true metadatum on the right.
 */
export const Sheet = styled.section`
	padding: 5.5rem 0;
	border-top: 1px solid ${color.rule};

	${bp.md} {
		padding: 3.25rem 0;
	}
`;

export const Eyebrow = styled.span`
	font-family: ${font.data};
	font-size: 0.66rem;
	font-weight: 500;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	color: ${color.graphite};
	display: inline-block;
`;

export const SheetHeadRow = styled.div`
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	gap: 1.5rem;
	margin-bottom: 1.1rem;
	flex-wrap: wrap;
`;

export const SheetTitle = styled.h2`
	font-size: clamp(2rem, 5.2vw, 3.4rem);
	text-transform: uppercase;
	letter-spacing: -0.03em;
	max-width: 20ch;
`;

export const SheetIntro = styled.p`
	font-size: 1.12rem;
	color: ${color.graphite};
	max-width: 62ch;
	margin-top: 1.4rem;
`;

export const Measure = styled.div`
	max-width: 68ch;
`;

/* ---------- drawing cells ---------- */

export const Frame = styled.div`
	border: 1px solid ${color.rule};
	background: ${color.sheet};
`;

/** Small caps field label, as printed above a value in a title block. */
export const FieldLabel = styled.span`
	font-family: ${font.data};
	font-size: 0.6rem;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${color.graphite};
	display: block;
	margin-bottom: 0.5rem;
`;

export const FieldValue = styled.span`
	font-family: ${font.display};
	font-size: 0.98rem;
	font-weight: 600;
	line-height: 1.3;
	display: block;
`;

export const Tag = styled.li`
	font-family: ${font.data};
	font-size: 0.7rem;
	letter-spacing: 0.03em;
	color: ${color.graphite};
	border: 1px solid ${color.ruleFaint};
	background: ${color.sheet};
	padding: 0.3rem 0.55rem;
	white-space: nowrap;
`;

export const TagRow = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
`;

/* ---------- actions ---------- */

const actionBase = css`
	display: inline-flex;
	align-items: center;
	gap: 0.55rem;
	font-family: ${font.data};
	font-size: 0.74rem;
	font-weight: 500;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	padding: 0.85rem 1.35rem;
	border: 1px solid ${color.ink};
	color: ${color.ink};
	background: transparent;
	transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease;

	&:hover {
		background: ${color.ink};
		color: ${color.vellum};
	}
`;

export const Action = styled.a`
	${actionBase}
`;

export const ActionPrimary = styled.a`
	${actionBase};
	background: ${color.blueprint};
	border-color: ${color.blueprint};
	color: ${color.sheet};

	&:hover {
		background: ${color.ink};
		border-color: ${color.ink};
		color: ${color.vellum};
	}
`;

/** Inline link that reads like a drawing callout: arrow, then label. */
export const Callout = styled.a`
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: ${color.blueprint};
	border-bottom: 1px solid ${color.blueprintTint};
	padding-bottom: 2px;
	transition: border-color 0.18s ease, color 0.18s ease;

	&:hover {
		color: ${color.signal};
		border-color: ${color.signal};
	}
`;

export const ActionRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.75rem;
`;

/* ---------- prose ---------- */

export const Prose = styled.div`
	p {
		font-size: 1.06rem;
		color: ${color.ink};
		margin-bottom: 1.15rem;

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

/** Bulleted list using a drafting tick rather than a dot. */
export const TickList = styled.ul`
	li {
		position: relative;
		padding-left: 1.5rem;
		margin-bottom: 0.7rem;
		color: ${color.ink};
		font-size: 1rem;
		line-height: 1.55;

		&::before {
			content: "";
			position: absolute;
			left: 0;
			top: 0.62em;
			width: 0.7rem;
			height: 1px;
			background: ${color.signal};
		}

		&:last-child {
			margin-bottom: 0;
		}
	}
`;

/* ---------- motion ---------- */

export const revealUp = {
	hidden: { opacity: 0, y: 14 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
	},
};

export const revealStagger = {
	hidden: {},
	show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

/** A rule that draws itself left-to-right, the way a plotter lays one down. */
export const DrawnRule = styled(motion.div)`
	height: 1px;
	background: ${color.rule};
	transform-origin: left center;
	width: 100%;
`;

export const drawRule = {
	hidden: { scaleX: 0 },
	show: {
		scaleX: 1,
		transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] },
	},
};
