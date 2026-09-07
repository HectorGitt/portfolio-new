import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { identity, availability } from "../content/profile";
import { useScroll } from "./useScroll";
import { Page, Sheet, Eyebrow, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";
import academicCv from "../file/Olaitan_Adeniyi_Academic_CV.pdf";
import softwareResume from "../file/Olaitan_Adeniyi_Software_Resume.pdf";

/**
 * Two readers arrive at this site with different questions. Rather than make
 * them guess which pages are for them, this splits the path explicitly.
 */
const doors = [
	{
		id: "hiring",
		who: "If you are hiring",
		lead: "Backend, data platform and applied AI roles. I need sponsorship and I can relocate.",
		points: [
			"Six years shipping production systems, remote across four teams",
			"98.7% latency reduction on the pipeline I architected",
			"Python, Django, FastAPI, Airflow, Kafka, AWS, Kubernetes",
		],
		primary: { label: "Software resume", href: softwareResume, download: "Olaitan_Adeniyi_Software_Resume.pdf" },
		secondary: { label: "See the engineering", to: "/engineering" },
	},
	{
		id: "admissions",
		who: "If you supervise research",
		lead: "Doctoral or thesis-based master's positions in robotics, perception and autonomy, for 2027 entry.",
		points: [
			"First Class Honours, 4.52/5.00, top of the department",
			"91% in Handling Agricultural Materials; 87% in Thermodynamics",
			"Three research tracks, each grounded in a system I have already built",
		],
		primary: { label: "Academic CV", href: academicCv, download: "Olaitan_Adeniyi_Academic_CV.pdf" },
		secondary: { label: "Read the proposal", to: "/research" },
	},
];

const NextStep = () => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<Grid ref={element} variants={revealStagger} initial={start} animate={controls}>
					{doors.map((d) => (
						<Door key={d.id} variants={revealUp}>
							<Eyebrow>{d.who}</Eyebrow>
							<Lead>{d.lead}</Lead>
							<Points>
								{d.points.map((p, i) => (
									<li key={i}>{p}</li>
								))}
							</Points>
							<Actions>
								<PrimaryLink href={d.primary.href} download={d.primary.download}>
									{d.primary.label}
								</PrimaryLink>
								<SecondaryLink to={d.secondary.to}>
									{d.secondary.label} &rarr;
								</SecondaryLink>
							</Actions>
						</Door>
					))}
				</Grid>

				<Direct>
					<span>
						Either way, the fastest route is email:{" "}
						<a href={`mailto:${identity.email}`}>{identity.email}</a>
					</span>
					<span className="num">
						{availability.notice} notice &middot; {availability.passport}
					</span>
				</Direct>
			</Page>
		</Sheet>
	);
};

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1px;
	background: ${color.ink};
	border: 1px solid ${color.ink};

	${bp.md} {
		grid-template-columns: 1fr;
	}
`;

const Door = styled(motion.div)`
	background: ${color.sheet};
	padding: 2.25rem 2rem 2.4rem;
	display: flex;
	flex-direction: column;

	${bp.md} {
		padding: 1.5rem 1.25rem;
	}
`;

const Lead = styled.p`
	font-size: 1.22rem;
	line-height: 1.45;
	margin: 0.9rem 0 1.4rem;
	max-width: 30ch;

	${bp.md} {
		font-size: 1.08rem;
	}
`;

const Points = styled.ul`
	flex: 1;
	border-top: 1px solid ${color.ruleFaint};

	li {
		font-size: 0.94rem;
		color: ${color.graphite};
		padding: 0.7rem 0;
		border-bottom: 1px solid ${color.ruleFaint};
	}
`;

const Actions = styled.div`
	display: flex;
	align-items: center;
	gap: 1.5rem;
	margin-top: 1.75rem;
	flex-wrap: wrap;
`;

const linkType = `
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
`;

const PrimaryLink = styled.a`
	${linkType};
	padding: 0.85rem 1.35rem;
	background: ${color.blueprint};
	color: ${color.sheet};
	border: 1px solid ${color.blueprint};
	transition: background 0.18s ease, border-color 0.18s ease;

	&:hover {
		background: ${color.ink};
		border-color: ${color.ink};
	}
`;

const SecondaryLink = styled(Link)`
	${linkType};
	color: ${color.blueprint};
	border-bottom: 1px solid ${color.blueprintTint};
	padding-bottom: 2px;

	&:hover {
		color: ${color.signal};
		border-color: ${color.signal};
	}
`;

const Direct = styled.div`
	margin-top: 1.5rem;
	display: flex;
	justify-content: space-between;
	gap: 1.5rem;
	flex-wrap: wrap;

	span {
		font-size: 0.92rem;
		color: ${color.graphite};
	}

	span.num {
		font-size: 0.66rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}

	a {
		border-bottom: 1px solid ${color.blueprintTint};

		&:hover {
			color: ${color.signal};
			border-color: ${color.signal};
		}
	}
`;

export default NextStep;
