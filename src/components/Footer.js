import styled from "styled-components";
import { Link } from "react-router-dom";
import { identity, availability } from "../content/profile";
import { Page } from "./ui";
import { color, font, bp } from "../theme";

const Footer = () => (
	<Wrap>
		<Page>
			<Inner>
				<Left>
					<Name>{identity.name}</Name>
					<Line>
						{identity.role} &middot; {identity.location}
					</Line>
					<Line>
						{availability.sponsorship} &middot; {availability.relocation}
					</Line>
				</Left>

				<Right>
					<Group>
						<GroupName>Elsewhere</GroupName>
						<a href={identity.linkedin} target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
						<a href={identity.github} target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						<a href={identity.writing} target="_blank" rel="noopener noreferrer">
							Medium
						</a>
					</Group>
					<Group>
						<GroupName>Sheets</GroupName>
						<Link to="/">Overview</Link>
						<Link to="/engineering">Engineering</Link>
						<Link to="/research">Research</Link>
						<Link to="/contact">Contact</Link>
					</Group>
				</Right>
			</Inner>

			<Base>
				<span className="num">Rev {availability.revision}</span>
				<span>Drawn in React &amp; styled-components</span>
			</Base>
		</Page>
	</Wrap>
);

const Wrap = styled.footer`
	border-top: 1px solid ${color.ink};
	background: ${color.sheet};
	padding: 3.25rem 0 1.75rem;
	margin-top: 2rem;
`;

const Inner = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 3rem;
	flex-wrap: wrap;
`;

const Left = styled.div``;

const Name = styled.p`
	font-family: ${font.display};
	font-size: 1.1rem;
	font-weight: 700;
	text-transform: uppercase;
`;

const Line = styled.p`
	font-size: 0.92rem;
	color: ${color.graphite};
	margin-top: 0.35rem;
`;

const Right = styled.div`
	display: flex;
	gap: 3.5rem;

	${bp.sm} {
		gap: 2rem;
	}
`;

const Group = styled.nav`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	a {
		font-family: ${font.data};
		font-size: 0.72rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: ${color.graphite};

		&:hover {
			color: ${color.signal};
		}
	}
`;

const GroupName = styled.span`
	font-family: ${font.data};
	font-size: 0.6rem;
	letter-spacing: 0.2em;
	text-transform: uppercase;
	color: ${color.ink};
	margin-bottom: 0.2rem;
`;

const Base = styled.div`
	margin-top: 2.75rem;
	padding-top: 1.1rem;
	border-top: 1px solid ${color.ruleFaint};
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	flex-wrap: wrap;

	span {
		font-family: ${font.data};
		font-size: 0.6rem;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: ${color.graphite};
	}
`;

export default Footer;
