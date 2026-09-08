import styled from "styled-components";
import { motion } from "framer-motion";
import { identity, availability } from "../content/profile";
import { degree } from "../content/academic";
import { Page, Eyebrow, FieldLabel } from "./ui";
import { useMotionStart } from "./useScroll";
import { color, font, bp } from "../theme";
import academicCv from "../file/Olaitan_Adeniyi_Academic_CV.pdf";

/**
 * This page gets sent to supervisors on its own, so it cannot lean on the rest
 * of the site to say whose it is. The masthead repeats identity, degree class
 * and contact, and the closing block repeats them at the point where a reader
 * has finished and needs to act.
 */

const rise = {
	hidden: { opacity: 0, y: 12 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.05 + i * 0.07, ease: [0.22, 0.61, 0.36, 1] },
	}),
};

const facts = [
	{ value: degree.cgpa, label: `CGPA of ${degree.cgpaScale}` },
	{ value: "1st", label: "in the department" },
	{ value: "91", label: "top course score" },
];

export const ResearchHeader = () => {
	const start = useMotionStart();

	return (
		<Wrap>
			<Page>
				<motion.div initial={start} animate="show">
					{/* Identity strip — this page is often the first thing a reader sees. */}
					<Strip variants={rise} custom={0}>
						<Who>
							<WhoName>{identity.name}</WhoName>
							<WhoLine>
								{degree.award} &middot; {degree.classification},{" "}
								{degree.cgpa}/{degree.cgpaScale} &middot; {degree.institution}
							</WhoLine>
						</Who>
						<Where>
							<a href={`mailto:${identity.academicEmail}`}>
								{identity.academicEmail}
							</a>
							<span className="num">
								{identity.location} &middot; Rev {availability.revision}
							</span>
						</Where>
					</Strip>

					<motion.div variants={rise} custom={1}>
						<Eyebrow>Research statement</Eyebrow>
					</motion.div>

					<Title variants={rise} custom={2}>
						Robotics, perception &amp; autonomy
					</Title>

					<Lede variants={rise} custom={3}>
						I build systems that have to obey physics as well as a spec. I want
						to take that into research on machines that perceive the physical
						world and decide what to do about it &mdash; and I have the
						mechanics degree that sits underneath the problem.
					</Lede>

					<Meta variants={rise} custom={4}>
						<Facts>
							{facts.map((f) => (
								<Fact key={f.label}>
									<FactValue className="num">{f.value}</FactValue>
									<FactLabel>{f.label}</FactLabel>
								</Fact>
							))}
						</Facts>
						<Get href={academicCv} download="Olaitan_Adeniyi_Academic_CV.pdf">
							Academic CV
						</Get>
					</Meta>
				</motion.div>
			</Page>
		</Wrap>
	);
};

export const ResearchClose = () => (
	<CloseWrap>
		<Page>
			<CloseGrid>
				<div>
					<Eyebrow>Supervision enquiries</Eyebrow>
					<CloseLead>
						If a track here overlaps what your group is working on, I would
						welcome a conversation. I can send a full application package at
						short notice.
					</CloseLead>
				</div>
				<CloseFields>
					<CloseField>
						<FieldLabel>Email</FieldLabel>
						<a href={`mailto:${identity.academicEmail}`}>
							{identity.academicEmail}
						</a>
					</CloseField>
					<CloseField>
						<FieldLabel>Seeking</FieldLabel>
						<CloseValue>Doctoral or thesis-based master's, 2027 entry</CloseValue>
					</CloseField>
					<CloseField>
						<FieldLabel>Status</FieldLabel>
						<CloseValue>
							{availability.sponsorship} &middot; {availability.relocation}
						</CloseValue>
					</CloseField>
					<CloseField>
						<FieldLabel>Documents</FieldLabel>
						<a href={academicCv} download="Olaitan_Adeniyi_Academic_CV.pdf">
							Academic CV (PDF)
						</a>
					</CloseField>
				</CloseFields>
			</CloseGrid>
		</Page>
	</CloseWrap>
);

/* ---------- masthead ---------- */

const Wrap = styled.div`
	padding: 3rem 0;
	border-bottom: 1px solid ${color.ink};

	${bp.md} {
		padding: 1.75rem 0;
	}
`;

const Strip = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 1.5rem;
	flex-wrap: wrap;
	padding-bottom: 1.1rem;
	margin-bottom: 2rem;
	border-bottom: 1px solid ${color.ruleFaint};
`;

const Who = styled.div``;

const WhoName = styled.p`
	font-family: ${font.display};
	font-size: 1.05rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.01em;
`;

const WhoLine = styled.p`
	font-size: 0.92rem;
	color: ${color.graphite};
	margin-top: 0.3rem;
`;

const Where = styled.div`
	text-align: right;

	a {
		font-family: ${font.display};
		font-size: 0.94rem;
		font-weight: 600;
		border-bottom: 1px solid ${color.rule};

		&:hover {
			color: ${color.signal};
			border-color: ${color.signal};
		}
	}

	span {
		display: block;
		font-size: 0.62rem;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: ${color.graphite};
		margin-top: 0.4rem;
	}

	${bp.sm} {
		text-align: left;
	}
`;

const Title = styled(motion.h1)`
	font-size: clamp(2.2rem, 7vw, 5rem);
	text-transform: uppercase;
	letter-spacing: -0.04em;
	line-height: 0.95;
	margin-top: 0.9rem;
`;

const Lede = styled(motion.p)`
	font-size: clamp(1.06rem, 1.9vw, 1.3rem);
	line-height: 1.5;
	max-width: 56ch;
	margin-top: 1.5rem;
`;

const Meta = styled(motion.div)`
	display: flex;
	align-items: flex-end;
	justify-content: space-between;
	gap: 2rem;
	flex-wrap: wrap;
	margin-top: 2.25rem;
	padding-top: 1.5rem;
	border-top: 1px solid ${color.ruleFaint};
`;

const Facts = styled.dl`
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;

	${bp.sm} {
		gap: 1.75rem;
	}
`;

const Fact = styled.div``;

const FactValue = styled.dd`
	font-size: 1.7rem;
	font-weight: 500;
	color: ${color.signal};
	letter-spacing: -0.03em;
	line-height: 1;
`;

const FactLabel = styled.dt`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${color.graphite};
	margin-top: 0.5rem;
`;

const Get = styled.a`
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	padding: 0.85rem 1.35rem;
	background: ${color.blueprint};
	border: 1px solid ${color.blueprint};
	color: ${color.sheet};
	transition: background 0.18s ease, border-color 0.18s ease;

	&:hover {
		background: ${color.ink};
		border-color: ${color.ink};
	}
`;

/* ---------- closing ---------- */

const CloseWrap = styled.section`
	padding: 4rem 0 5rem;
	border-top: 1px solid ${color.ink};

	${bp.md} {
		padding: 2.5rem 0 3rem;
	}
`;

const CloseGrid = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
	gap: 3rem;
	align-items: start;

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 1.75rem;
	}
`;

const CloseLead = styled.p`
	font-size: 1.16rem;
	line-height: 1.5;
	margin-top: 0.9rem;
	max-width: 34ch;
`;

const CloseFields = styled.div`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	border: 1px solid ${color.ink};
	background: ${color.sheet};

	${bp.sm} {
		grid-template-columns: 1fr;
	}
`;

const CloseField = styled.div`
	padding: 1.35rem 1.5rem;
	border-right: 1px solid ${color.ruleFaint};
	border-bottom: 1px solid ${color.ruleFaint};

	&:nth-child(2n) {
		border-right: none;
	}
	&:nth-last-child(-n + 2) {
		border-bottom: none;
	}

	a {
		font-family: ${font.display};
		font-size: 0.96rem;
		font-weight: 600;
		border-bottom: 1px solid ${color.rule};
		word-break: break-word;

		&:hover {
			color: ${color.signal};
			border-color: ${color.signal};
		}
	}

	${bp.sm} {
		border-right: none;
		border-bottom: 1px solid ${color.ruleFaint};

		&:last-child {
			border-bottom: none;
		}
	}
`;

const CloseValue = styled.p`
	font-family: ${font.display};
	font-size: 0.96rem;
	font-weight: 600;
	line-height: 1.35;
`;
