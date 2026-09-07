import styled from "styled-components";
import { motion } from "framer-motion";
import { experience } from "../content/profile";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, TickList, TagRow, Tag, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

/**
 * Roles as a dated log. The left column carries the span — the one thing a
 * reader scanning for continuity actually needs — and it stays put while the
 * detail scrolls past it.
 */
const ExperienceLog = () => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Log"
					meta="2020 — present"
					title="Where the work happened"
					intro="Six years across data infrastructure, applied AI and frontend platforms — remote throughout, mostly alongside a full engineering degree."
				/>

				<List ref={element} variants={revealStagger} initial={start} animate={controls}>
					{experience.map((job) => (
						<Entry key={`${job.org}-${job.start}`} variants={revealUp}>
							<Span>
								<Dates className="num">
									{job.start}
									<span aria-hidden="true"> — </span>
									{job.end}
								</Dates>
								<Mode>{job.mode}</Mode>
							</Span>

							<Detail>
								<Org>
									{job.org}
									{job.orgNote && <OrgNote>{job.orgNote}</OrgNote>}
								</Org>
								<Role>{job.role}</Role>
								{job.roleAlt && <RoleAlt>Also credited as {job.roleAlt.toLowerCase()}</RoleAlt>}

								{job.metrics.length > 0 && (
									<Metrics>
										{job.metrics.map((m) => (
											<Metric key={m.label}>
												<MetricValue className="num">{m.value}</MetricValue>
												<MetricLabel>{m.label}</MetricLabel>
											</Metric>
										))}
									</Metrics>
								)}

								<TickList>
									{job.points.map((p, i) => (
										<li key={i}>{p}</li>
									))}
								</TickList>

								<StackRow>
									{job.stack.map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</StackRow>
							</Detail>
						</Entry>
					))}
				</List>
			</Page>
		</Sheet>
	);
};

const List = styled(motion.ol)`
	margin-top: 3.25rem;

	${bp.md} {
		margin-top: 2rem;
	}
`;

const Entry = styled(motion.li)`
	display: grid;
	grid-template-columns: 11rem minmax(0, 1fr);
	gap: 2.5rem;
	padding: 2.25rem 0;
	border-top: 1px solid ${color.ruleFaint};

	&:first-child {
		border-top: 1px solid ${color.ink};
	}

	${bp.lg} {
		grid-template-columns: 1fr;
		gap: 1rem;
		padding: 1.75rem 0;
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
	color: ${color.ink};
	display: block;
	font-weight: 500;
`;

const Mode = styled.span`
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
	font-size: clamp(1.35rem, 2.6vw, 1.75rem);
	text-transform: uppercase;
	display: flex;
	align-items: baseline;
	gap: 0.85rem;
	flex-wrap: wrap;
`;

const OrgNote = styled.span`
	font-family: ${font.data};
	font-size: 0.62rem;
	font-weight: 400;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
`;

const Role = styled.p`
	font-family: ${font.data};
	font-size: 0.78rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
	color: ${color.blueprint};
	margin-top: 0.5rem;
`;

const RoleAlt = styled.p`
	font-size: 0.88rem;
	color: ${color.graphite};
	margin-top: 0.3rem;
`;

const Metrics = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2.25rem;
	margin: 1.5rem 0 1.6rem;
	padding: 1.1rem 0;
	border-top: 1px solid ${color.ruleFaint};
	border-bottom: 1px solid ${color.ruleFaint};
`;

const Metric = styled.div``;

const MetricValue = styled.span`
	font-size: 1.5rem;
	font-weight: 500;
	color: ${color.signal};
	letter-spacing: -0.03em;
	display: block;
	line-height: 1;
`;

const MetricLabel = styled.span`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${color.graphite};
	display: block;
	margin-top: 0.45rem;
`;

const StackRow = styled(TagRow)`
	margin-top: 1.4rem;
`;

export default ExperienceLog;
