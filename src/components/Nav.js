import { useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { identity } from "../content/profile";
import { color, font, size, bp } from "../theme";

const routes = [
	{ to: "/", label: "Overview" },
	{ to: "/engineering", label: "Engineering" },
	{ to: "/research", label: "Research" },
	{ to: "/contact", label: "Contact" },
];

const Nav = () => {
	const { pathname } = useLocation();
	const [open, setOpen] = useState(false);
	const close = () => setOpen(false);

	return (
		<Bar>
			<Inner>
				<Mark to="/" onClick={close}>
					{identity.shortName}
					<MarkNote>{identity.site}</MarkNote>
				</Mark>

				<Toggle
					onClick={() => setOpen((v) => !v)}
					aria-expanded={open}
					aria-label={open ? "Close menu" : "Open menu"}
				>
					{open ? "Close" : "Menu"}
				</Toggle>

				<Links $open={open}>
					{routes.map((r) => (
						<li key={r.to}>
							<NavLink
								to={r.to}
								onClick={close}
								$active={pathname === r.to}
								aria-current={pathname === r.to ? "page" : undefined}
							>
								{r.label}
							</NavLink>
						</li>
					))}
				</Links>
			</Inner>
		</Bar>
	);
};

const Bar = styled.nav`
	position: sticky;
	top: 0;
	z-index: 20;
	background: ${color.vellum};
	border-bottom: 1px solid ${color.ink};
`;

const Inner = styled.div`
	max-width: ${size.page};
	margin: 0 auto;
	padding: 0 ${size.gutter};
	min-height: 4.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;

	${bp.md} {
		padding: 0 ${size.gutterSm};
		min-height: 3.75rem;
		flex-wrap: wrap;
	}
`;

const Mark = styled(Link)`
	font-family: ${font.display};
	font-size: 1.02rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.01em;
	color: ${color.ink};
	display: flex;
	align-items: baseline;
	gap: 0.7rem;
`;

const MarkNote = styled.span`
	font-family: ${font.data};
	font-size: 0.6rem;
	font-weight: 400;
	letter-spacing: 0.16em;
	text-transform: lowercase;
	color: ${color.graphite};

	${bp.sm} {
		display: none;
	}
`;

const Toggle = styled.button`
	display: none;
	font-family: ${font.data};
	font-size: 0.68rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	border: 1px solid ${color.rule};
	padding: 0.45rem 0.8rem;

	${bp.md} {
		display: block;
	}
`;

const Links = styled.ul`
	display: flex;
	gap: 2rem;

	${bp.md} {
		display: ${(p) => (p.$open ? "flex" : "none")};
		flex-direction: column;
		width: 100%;
		gap: 0;
		border-top: 1px solid ${color.rule};
		padding: 0.35rem 0 0.75rem;
	}
`;

const NavLink = styled(Link)`
	font-family: ${font.data};
	font-size: 0.72rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${(p) => (p.$active ? color.ink : color.graphite)};
	padding: 0.35rem 0;
	display: block;
	border-bottom: 1px solid
		${(p) => (p.$active ? color.signal : "transparent")};
	transition: color 0.18s ease, border-color 0.18s ease;

	&:hover {
		color: ${color.ink};
	}

	${bp.md} {
		padding: 0.75rem 0;
		border-bottom: none;
		border-left: 2px solid
			${(p) => (p.$active ? color.signal : "transparent")};
		padding-left: ${(p) => (p.$active ? "0.75rem" : "0.75rem")};
	}
`;

export default Nav;
