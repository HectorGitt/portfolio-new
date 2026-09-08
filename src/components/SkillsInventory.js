import styled from "styled-components";
import { motion } from "framer-motion";
import { skills } from "../content/projects";
import { useScroll } from "./useScroll";
import SheetHead from "./SheetHead";
import { Page, Sheet, TagRow, Tag, revealUp, revealStagger } from "./ui";
import { color, font, bp } from "../theme";

const SkillsInventory = () => {
	const [element, controls, start] = useScroll();
	const count = skills.reduce((n, g) => n + g.items.length, 0);

	return (
		<Sheet>
			<Page>
				<SheetHead
					label="Inventory"
					meta={`${count} entries · ${skills.length} groups`}
					title="What I work with"
					intro="Grouped by what it is for, not by how confident I feel about it."
				/>

				<Groups ref={element} variants={revealStagger} initial={start} animate={controls}>
					{skills.map((g) => (
						<Group key={g.group} variants={revealUp}>
							<GroupName>{g.group}</GroupName>
							<TagRow>
								{g.items.map((item) => (
									<Tag key={item}>{item}</Tag>
								))}
							</TagRow>
						</Group>
					))}
				</Groups>
			</Page>
		</Sheet>
	);
};

const Groups = styled(motion.div)`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 1px;
	background: ${color.rule};
	border: 1px solid ${color.rule};

	${bp.lg} {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	${bp.sm} {
		grid-template-columns: 1fr;
		margin-top: 2rem;
	}
`;

const Group = styled(motion.div)`
	background: ${color.sheet};
	padding: 1.5rem 1.4rem 1.6rem;
`;

const GroupName = styled.h3`
	font-family: ${font.data};
	font-size: 0.66rem;
	font-weight: 500;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${color.blueprint};
	margin-bottom: 1rem;
`;

export default SkillsInventory;
