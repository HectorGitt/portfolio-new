import styled from "styled-components";
import { motion } from "framer-motion";
import { writing } from "../content/projects";
import { identity } from "../content/profile";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, Callout, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const WritingSection = () => {
	const [element, controls, start] = useScroll();

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Notes"
					meta={`${writing.length} published`}
					title="Written up"
					intro="Build logs for the systems above — what the architecture was, and where it fought back."
				/>

				<List ref={element} variants={revealStagger} initial={start} animate={controls}>
					{writing.map((w) => (
						<Item
							key={w.href}
							href={w.href}
							target="_blank"
							rel="noopener noreferrer"
							variants={revealUp}
						>
							<Meta className="num">
								{w.date}
								<span aria-hidden="true"> · </span>
								{w.readTime}
							</Meta>
							<Title>{w.title}</Title>
							<Blurb>{w.blurb}</Blurb>
							<Read>Read &rarr;</Read>
						</Item>
					))}
				</List>

				<More>
					<Callout href={identity.writing} target="_blank" rel="noopener noreferrer">
						All writing on Medium &rarr;
					</Callout>
				</More>
			</Page>
		</Sheet>
	);
};

const List = styled(motion.div)`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 1px;
	background: ${color.rule};
	border: 1px solid ${color.rule};

	${bp.md} {
		grid-template-columns: 1fr;
		margin-top: 2rem;
	}
`;

const Item = styled(motion.a)`
	background: ${color.sheet};
	padding: 1.75rem 1.6rem 1.6rem;
	display: flex;
	flex-direction: column;
	color: ${color.ink};
	transition: background 0.18s ease;

	&:hover {
		background: ${color.vellum};
	}

	&:hover span:last-child {
		color: ${color.signal};
	}

	${bp.md} {
		padding: 1.25rem 1.15rem;
	}
`;

const Meta = styled.span`
	font-size: 0.62rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
`;

const Title = styled.h3`
	font-size: 1.14rem;
	margin: 0.8rem 0 0.6rem;
	line-height: 1.25;
	letter-spacing: -0.01em;
`;

const Blurb = styled.p`
	font-size: 0.95rem;
	color: ${color.graphite};
	flex: 1;
`;

const Read = styled.span`
	font-family: ${font.data};
	font-size: 0.66rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.blueprint};
	margin-top: 1.25rem;
	transition: color 0.18s ease;
`;

const More = styled.div`
	margin-top: 1.75rem;
`;

export default WritingSection;
