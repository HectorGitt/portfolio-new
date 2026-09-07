import styled from "styled-components";
import { motion } from "framer-motion";
import PageIntro from "../components/PageIntro";
import { identity, availability } from "../content/profile";
import { useScroll } from "../components/useScroll";
import { Page, Sheet, Eyebrow, FieldLabel, TickList, revealUp, revealStagger } from "../components/ui";
import { pageAnime } from "../animation";
import { usePageMeta } from "../components/usePageMeta";
import { color, font, bp } from "../theme";
import academicCv from "../file/Olaitan_Adeniyi_Academic_CV.pdf";
import softwareResume from "../file/Olaitan_Adeniyi_Software_Resume.pdf";

const channels = [
	{ label: "Email", value: identity.email, href: `mailto:${identity.email}` },
	{
		label: "Email, academic",
		value: identity.academicEmail,
		href: `mailto:${identity.academicEmail}`,
	},
	{ label: "Phone", value: identity.phone, href: `tel:${identity.phoneHref}` },
	{ label: "LinkedIn", value: "in/deniyiola", href: identity.linkedin },
	{ label: "GitHub", value: "HectorGitt", href: identity.github },
	{ label: "Writing", value: "medium.com/@deniyi_dev", href: identity.writing },
];

const documents = [
	{
		title: "Software resume",
		note: "Two pages. Production systems, stack and impact figures.",
		href: softwareResume,
		file: "Olaitan_Adeniyi_Software_Resume.pdf",
	},
	{
		title: "Academic CV",
		note: "Two pages. Degree record, awards, teaching and memberships.",
		href: academicCv,
		file: "Olaitan_Adeniyi_Academic_CV.pdf",
	},
];

const Contact = () => {
	const [element, controls, start] = useScroll();
	usePageMeta(
		"Contact",
		"Get in touch with Olaitan Adeniyi — email, phone and profiles, plus work authorisation, availability and both CV documents."
	);

	return (
		<motion.main variants={pageAnime} initial={start} animate="show">
			<PageIntro
				sheet={`Rev ${availability.revision}`}
				label="Contact"
				title="Start a conversation"
				lede="I read everything that arrives. If you are weighing a role or a supervision, say which and I will send whatever else you need."
			/>

			<Sheet>
				<Page>
					<Grid ref={element} variants={revealStagger} initial={start} animate={controls}>
						<Col variants={revealUp}>
							<Eyebrow>Reach me</Eyebrow>
							<Channels>
								{channels.map((c) => (
									<Channel key={c.label}>
										<FieldLabel>{c.label}</FieldLabel>
										<a
											href={c.href}
											target={c.href.startsWith("http") ? "_blank" : undefined}
											rel="noopener noreferrer"
										>
											{c.value}
										</a>
									</Channel>
								))}
							</Channels>
						</Col>

						<Col variants={revealUp}>
							<Eyebrow>Eligibility &amp; availability</Eyebrow>
							<Panel>
								<PanelRow>
									<FieldLabel>Looking for</FieldLabel>
									<TickList>
										{availability.seeking.map((s, i) => (
											<li key={i}>{s}</li>
										))}
									</TickList>
								</PanelRow>
								<Split>
									<PanelRow>
										<FieldLabel>Right to work</FieldLabel>
										<PanelValue>{availability.sponsorship}</PanelValue>
										<PanelNote>{availability.passport}</PanelNote>
									</PanelRow>
									<PanelRow>
										<FieldLabel>Location</FieldLabel>
										<PanelValue>{availability.relocation}</PanelValue>
										<PanelNote>Currently {identity.location}</PanelNote>
									</PanelRow>
									<PanelRow>
										<FieldLabel>Notice</FieldLabel>
										<PanelValue>{availability.notice}</PanelValue>
										<PanelNote>Rev {availability.revision}</PanelNote>
									</PanelRow>
								</Split>
							</Panel>

							<Docs>
								<Eyebrow>Documents</Eyebrow>
								{documents.map((d) => (
									<Doc key={d.title} href={d.href} download={d.file}>
										<div>
											<DocTitle>{d.title}</DocTitle>
											<DocNote>{d.note}</DocNote>
										</div>
										<DocAction>Download</DocAction>
									</Doc>
								))}
							</Docs>
						</Col>
					</Grid>
				</Page>
			</Sheet>
		</motion.main>
	);
};

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.35fr);
	gap: 3.5rem;
	align-items: start;

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
`;

const Col = styled(motion.div)``;

const Channels = styled.dl`
	margin-top: 1.25rem;
	border-top: 1px solid ${color.ink};
`;

const Channel = styled.div`
	padding: 1rem 0;
	border-bottom: 1px solid ${color.ruleFaint};

	a {
		font-family: ${font.display};
		font-size: 1.02rem;
		font-weight: 600;
		color: ${color.ink};
		border-bottom: 1px solid ${color.rule};
		word-break: break-word;

		&:hover {
			color: ${color.signal};
			border-color: ${color.signal};
		}
	}
`;

const Panel = styled.div`
	margin-top: 1.25rem;
	border: 1px solid ${color.ink};
	background: ${color.sheet};
`;

const PanelRow = styled.div`
	padding: 1.35rem 1.5rem;

	${bp.md} {
		padding: 1.1rem 1.15rem;
	}
`;

const Split = styled.div`
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	border-top: 1px solid ${color.rule};

	> div + div {
		border-left: 1px solid ${color.ruleFaint};
	}

	${bp.sm} {
		grid-template-columns: 1fr;

		> div + div {
			border-left: none;
			border-top: 1px solid ${color.ruleFaint};
		}
	}
`;

const PanelValue = styled.p`
	font-family: ${font.display};
	font-size: 0.98rem;
	font-weight: 600;
	line-height: 1.3;
`;

const PanelNote = styled.p`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: ${color.graphite};
	margin-top: 0.4rem;
`;

const Docs = styled.div`
	margin-top: 2.5rem;
`;

const Doc = styled.a`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
	padding: 1.15rem 0;
	border-bottom: 1px solid ${color.ruleFaint};
	color: ${color.ink};

	&:first-of-type {
		border-top: 1px solid ${color.ink};
		margin-top: 1.25rem;
	}

	&:hover span:last-child {
		background: ${color.ink};
		color: ${color.vellum};
	}
`;

const DocTitle = styled.span`
	font-family: ${font.display};
	font-size: 1.04rem;
	font-weight: 700;
	display: block;
`;

const DocNote = styled.span`
	font-size: 0.9rem;
	color: ${color.graphite};
	display: block;
	margin-top: 0.25rem;
`;

const DocAction = styled.span`
	font-family: ${font.data};
	font-size: 0.66rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	border: 1px solid ${color.ink};
	padding: 0.55rem 0.9rem;
	flex-shrink: 0;
	transition: background 0.18s ease, color 0.18s ease;
`;

export default Contact;
