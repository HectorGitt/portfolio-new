import styled from "styled-components";
import { motion } from "framer-motion";
import { Page, Eyebrow } from "./ui";
import { useMotionStart } from "./useScroll";
import { color, font, bp } from "../theme";

const rise = {
	hidden: { opacity: 0, y: 12 },
	show: (i = 0) => ({
		opacity: 1,
		y: 0,
		transition: { duration: 0.5, delay: 0.05 + i * 0.08, ease: [0.22, 0.61, 0.36, 1] },
	}),
};

/** Sub-page masthead. `sheet` states which sheet of the set this is. */
const PageIntro = ({ sheet, label, title, lede, facts = [] }) => {
	const start = useMotionStart();

	return (
	<Wrap>
		<Page>
			<motion.div initial={start} animate="show">
				<Top variants={rise} custom={0}>
					<Eyebrow>{label}</Eyebrow>
					<SheetNo className="num">{sheet}</SheetNo>
				</Top>
				<Title variants={rise} custom={1}>
					{title}
				</Title>
				{lede && (
					<Lede variants={rise} custom={2}>
						{lede}
					</Lede>
				)}
				{facts.length > 0 && (
					<Facts variants={rise} custom={3}>
						{facts.map((f) => (
							<Fact key={f.label}>
								<FactValue className="num">{f.value}</FactValue>
								<FactLabel>{f.label}</FactLabel>
							</Fact>
						))}
					</Facts>
				)}
			</motion.div>
		</Page>
	</Wrap>
	);
};

const Wrap = styled.div`
	padding: 4rem 0 3rem;
	border-bottom: 1px solid ${color.ink};

	${bp.md} {
		padding: 2.25rem 0 1.75rem;
	}
`;

const Top = styled(motion.div)`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	gap: 1rem;
	padding-bottom: 1rem;
`;

const SheetNo = styled.span`
	font-size: 0.66rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
`;

const Title = styled(motion.h1)`
	font-size: clamp(2.4rem, 8vw, 5.4rem);
	text-transform: uppercase;
	letter-spacing: -0.04em;
	line-height: 0.94;
`;

const Lede = styled(motion.p)`
	font-size: clamp(1.08rem, 2vw, 1.32rem);
	line-height: 1.5;
	max-width: 54ch;
	margin-top: 1.5rem;
	color: ${color.ink};
`;

const Facts = styled(motion.dl)`
	display: flex;
	flex-wrap: wrap;
	gap: 3rem;
	margin-top: 2.25rem;
	padding-top: 1.5rem;
	border-top: 1px solid ${color.ruleFaint};

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

export default PageIntro;
