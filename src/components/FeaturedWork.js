import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { selected, totalProjects } from "../content/projects";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import Lightbox from "./Lightbox";
import { Page, Sheet, TagRow, Tag, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

/** The three that best show the operations-research half of the work. */
const featured = selected.slice(0, 3);

const FeaturedWork = () => {
	const [element, controls, start] = useScroll();
	const [zoomed, setZoomed] = useState(null);

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Selected"
					meta={`${featured.length} of ${totalProjects}`}
					title="Three worth reading first"
					intro="A routing engine that also predicts engine failure, seven agents planning together, and a solar system running on live NASA data."
				/>

				<Grid ref={element} variants={revealStagger} initial={start} animate={controls}>
					{featured.map((p) => (
						<Card key={p.id} variants={revealUp}>
							<CardTop>
								{p.image ? (
									<ZoomButton
										type="button"
										onClick={() =>
											setZoomed({
												src: p.image,
												alt: `${p.name} interface`,
												caption: p.name,
											})
										}
										aria-label={`View the ${p.name} screenshot full size`}
									>
										<Shot src={p.image} alt={`${p.name} interface`} loading="lazy" />
									</ZoomButton>
								) : (
									<Hatch aria-hidden="true" />
								)}
							</CardTop>
							<CardBody>
								<CardName>{p.name}</CardName>
								<CardKind>{p.kind}</CardKind>
								<CardLead>{p.method[0].value}</CardLead>
								<TagRow>
									{p.stack.slice(0, 3).map((s) => (
										<Tag key={s}>{s}</Tag>
									))}
								</TagRow>
							</CardBody>
						</Card>
					))}
				</Grid>

				<AllLink to="/engineering">See all {totalProjects} &rarr;</AllLink>

				<Lightbox
					src={zoomed?.src}
					alt={zoomed?.alt}
					caption={zoomed?.caption}
					onClose={() => setZoomed(null)}
				/>
			</Page>
		</Sheet>
	);
};

const Grid = styled(motion.div)`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1px;
	background: ${color.rule};
	border: 1px solid ${color.rule};

	${bp.lg} {
		grid-template-columns: 1fr;
	}
	${bp.md} {
		margin-top: 2rem;
	}
`;

const Card = styled(motion.article)`
	background: ${color.sheet};
	display: flex;
	flex-direction: column;
`;

const CardTop = styled.div`
	background: ${color.sheetSunk};
	border-bottom: 1px solid ${color.rule};
	height: 11rem;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.9rem;
`;

const ZoomButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: 0;
	border: none;
	background: none;
	cursor: zoom-in;

	&:hover img {
		border-color: ${color.graphite};
	}
`;

const Shot = styled.img`
	max-width: 100%;
	max-height: 100%;
	width: auto;
	height: auto;
	object-fit: contain;
	border: 1px solid ${color.rule};
`;

const Hatch = styled.div`
	width: 100%;
	height: 100%;
	background-image: repeating-linear-gradient(
		45deg,
		transparent,
		transparent 7px,
		${color.rule} 7px,
		${color.rule} 8px
	);
`;

const CardBody = styled.div`
	padding: 1.5rem 1.4rem 1.6rem;
	display: flex;
	flex-direction: column;
	gap: 0.65rem;
	flex: 1;
`;

const CardName = styled.h3`
	font-size: 1.45rem;
	text-transform: uppercase;
`;

const CardKind = styled.p`
	font-family: ${font.data};
	font-size: 0.64rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${color.blueprint};
`;

const CardLead = styled.p`
	font-size: 0.95rem;
	color: ${color.graphite};
	flex: 1;
`;

const AllLink = styled(Link)`
	display: inline-block;
	margin-top: 1.75rem;
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.14em;
	text-transform: uppercase;
	color: ${color.blueprint};
	border-bottom: 1px solid ${color.blueprintTint};
	padding-bottom: 2px;

	&:hover {
		color: ${color.signal};
		border-color: ${color.signal};
	}
`;

export default FeaturedWork;
