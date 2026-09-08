import { useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { selected, archive, disciplines } from "../content/projects";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, Eyebrow, TagRow, Tag, Callout, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const ProjectIndex = () => {
	const [filter, setFilter] = useState("all");
	const [element, controls, start] = useScroll();

	const shownSelected = useMemo(
		() => (filter === "all" ? selected : selected.filter((p) => p.discipline === filter)),
		[filter]
	);
	const shownArchive = useMemo(
		() => (filter === "all" ? archive : archive.filter((p) => p.discipline === filter)),
		[filter]
	);

	const total = selected.length + archive.length;

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Index"
					meta={`${total} entries`}
					title="Systems I have built"
					intro={`${selected.length} carry enough engineering to be worth reading in full. The rest are listed below them.`}
				/>

				<Filters role="group" aria-label="Filter projects by discipline">
					{disciplines.map((d) => (
						<FilterButton
							key={d.id}
							onClick={() => setFilter(d.id)}
							$active={filter === d.id}
							aria-pressed={filter === d.id}
						>
							{d.label}
						</FilterButton>
					))}
				</Filters>

				<Entries ref={element} variants={revealStagger} initial={start} animate={controls}>
					{shownSelected.map((p) => (
						<Entry key={p.id} variants={revealUp}>
							<EntryHead>
								<div>
									<EntryName>{p.name}</EntryName>
									<EntryKind>{p.kind}</EntryKind>
								</div>
								<EntryYear className="num">{p.year}</EntryYear>
							</EntryHead>

							<EntryBody>
								<PlotCell>
									{p.image ? (
										<Shot src={p.image} alt={`${p.name} interface`} loading="lazy" />
									) : (
										<PlotPending aria-label="Screenshot not yet on file">
											<span>Plot pending</span>
										</PlotPending>
									)}
								</PlotCell>

								<DetailCell>
									<Summary>{p.summary}</Summary>

									<Method>
										{p.method.map((m) => (
											<MethodRow key={m.label}>
												<MethodLabel>{m.label}</MethodLabel>
												<MethodValue>{m.value}</MethodValue>
											</MethodRow>
										))}
									</Method>

									<TagRow>
										{p.stack.map((s) => (
											<Tag key={s}>{s}</Tag>
										))}
									</TagRow>

									{p.links.length > 0 && (
										<LinkRow>
											{p.links.map((l) => (
												<Callout
													key={l.label}
													href={l.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{l.label} &rarr;
												</Callout>
											))}
										</LinkRow>
									)}
								</DetailCell>
							</EntryBody>
						</Entry>
					))}
				</Entries>

				{shownArchive.length > 0 && (
					<Archive>
						<Eyebrow>Also on file</Eyebrow>
						<Table>
							<tbody>
								{shownArchive.map((p) => (
									<tr key={p.name}>
										<ThName>{p.name}</ThName>
										<TdKind>{p.kind}</TdKind>
										<TdStack>{p.stack.join(", ")}</TdStack>
										<TdLinks>
											{p.links.map((l) => (
												<Callout
													key={l.label}
													href={l.href}
													target="_blank"
													rel="noopener noreferrer"
												>
													{l.label}
												</Callout>
											))}
										</TdLinks>
									</tr>
								))}
							</tbody>
						</Table>
					</Archive>
				)}

				{shownSelected.length === 0 && shownArchive.length === 0 && (
					<Empty>Nothing on file under that discipline yet.</Empty>
				)}
			</Page>
		</Sheet>
	);
};

/* ---------- filters ---------- */

const Filters = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	margin: 2.5rem 0 0;
`;

const FilterButton = styled.button`
	font-family: ${font.data};
	font-size: 0.68rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	padding: 0.55rem 0.9rem;
	border: 1px solid ${(p) => (p.$active ? color.ink : color.rule)};
	background: ${(p) => (p.$active ? color.ink : "transparent")};
	color: ${(p) => (p.$active ? color.vellum : color.graphite)};
	transition: all 0.18s ease;

	&:hover {
		border-color: ${color.ink};
		color: ${(p) => (p.$active ? color.vellum : color.ink)};
	}
`;

/* ---------- selected entries ---------- */

const Entries = styled(motion.div)`
	margin-top: 2.5rem;
`;

const Entry = styled(motion.article)`
	border: 1px solid ${color.rule};
	background: ${color.sheet};
	margin-bottom: 1.5rem;
`;

const EntryHead = styled.header`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 1.5rem;
	padding: 1.5rem 1.75rem;
	border-bottom: 1px solid ${color.rule};

	${bp.md} {
		padding: 1.1rem 1.15rem;
	}
`;

const EntryName = styled.h3`
	font-size: clamp(1.4rem, 3vw, 2rem);
	text-transform: uppercase;
`;

const EntryKind = styled.p`
	font-family: ${font.data};
	font-size: 0.7rem;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	color: ${color.blueprint};
	margin-top: 0.5rem;
`;

const EntryYear = styled.span`
	font-family: ${font.data};
	font-size: 0.7rem;
	letter-spacing: 0.1em;
	color: ${color.graphite};
	flex-shrink: 0;
`;

const EntryBody = styled.div`
	display: grid;
	grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);

	${bp.lg} {
		grid-template-columns: 1fr;
	}
`;

const PlotCell = styled.div`
	border-right: 1px solid ${color.rule};
	background: ${color.sheetSunk};
	display: flex;
	align-items: stretch;

	${bp.lg} {
		border-right: none;
		border-bottom: 1px solid ${color.rule};
	}
`;

const Shot = styled.img`
	width: 100%;
	height: 100%;
	min-height: 15rem;
	object-fit: cover;
	object-position: top center;
`;

/**
 * Honest stand-in for a screenshot that does not exist yet. Hatching is the
 * drafting convention for an area that is defined but not detailed.
 */
const PlotPending = styled.div`
	width: 100%;
	min-height: 15rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 7px,
		${color.rule} 7px,
		${color.rule} 8px
	);

	span {
		font-family: ${font.data};
		font-size: 0.64rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: ${color.graphite};
		background: ${color.sheetSunk};
		padding: 0.5rem 0.9rem;
		border: 1px solid ${color.rule};
	}
`;

const DetailCell = styled.div`
	padding: 1.75rem;

	${bp.md} {
		padding: 1.15rem;
	}
`;

const Summary = styled.p`
	font-size: 1.02rem;
	line-height: 1.6;
	margin-bottom: 1.5rem;
`;

const Method = styled.dl`
	border-top: 1px solid ${color.ruleFaint};
	margin-bottom: 1.5rem;
`;

const MethodRow = styled.div`
	display: grid;
	grid-template-columns: 7.5rem minmax(0, 1fr);
	gap: 1rem;
	padding: 0.7rem 0;
	border-bottom: 1px solid ${color.ruleFaint};

	${bp.sm} {
		grid-template-columns: 1fr;
		gap: 0.2rem;
	}
`;

const MethodLabel = styled.dt`
	font-family: ${font.data};
	font-size: 0.62rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${color.graphite};
	padding-top: 0.15rem;
`;

const MethodValue = styled.dd`
	font-size: 0.94rem;
	line-height: 1.45;
`;

const LinkRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	margin-top: 1.5rem;
`;

/* ---------- archive table ---------- */

const Archive = styled.div`
	margin-top: 3.5rem;

	${bp.md} {
		margin-top: 2.25rem;
	}
`;

const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 1rem;

	tr {
		border-top: 1px solid ${color.ruleFaint};
	}
	tr:first-child {
		border-top: 1px solid ${color.ink};
	}

	td {
		padding: 0.95rem 1rem 0.95rem 0;
		vertical-align: top;
		font-size: 0.94rem;
	}

	${bp.md} {
		tr {
			display: grid;
			grid-template-columns: 1fr;
			gap: 0.15rem;
			padding: 0.9rem 0;
		}
		td {
			padding: 0;
		}
	}
`;

const ThName = styled.td`
	font-family: ${font.display};
	font-weight: 700;
	text-transform: uppercase;
	width: 12rem;
	letter-spacing: -0.01em;
`;

const TdKind = styled.td`
	color: ${color.ink};
`;

const TdStack = styled.td`
	font-family: ${font.data};
	font-size: 0.72rem !important;
	letter-spacing: 0.04em;
	color: ${color.graphite};
	width: 12rem;
`;

const TdLinks = styled.td`
	white-space: nowrap;
	width: 9rem;

	a + a {
		margin-left: 0.9rem;
	}

	${bp.md} {
		padding-top: 0.5rem !important;
	}
`;

const Empty = styled.p`
	margin-top: 2.5rem;
	color: ${color.graphite};
	font-family: ${font.data};
	font-size: 0.8rem;
	letter-spacing: 0.1em;
	text-transform: uppercase;
`;

export default ProjectIndex;
