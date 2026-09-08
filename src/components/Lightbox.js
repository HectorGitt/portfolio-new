import { useEffect, useRef, useCallback } from "react";
import styled from "styled-components";
import { color, font, bp } from "../theme";

/**
 * Full-screen view of a project screenshot.
 *
 * Cards show captures letterboxed inside a fixed plate, which keeps the grid
 * even but makes fine detail — dashboard figures, agent names — too small to
 * read. This shows the capture at its own size instead.
 *
 * Closed by default, so prerendering never captures an open overlay.
 */
const Lightbox = ({ src, alt, caption, onClose }) => {
	const closeRef = useRef(null);
	const returnFocusTo = useRef(null);

	const handleClose = useCallback(() => onClose(), [onClose]);

	useEffect(() => {
		if (!src) return undefined;

		returnFocusTo.current = document.activeElement;
		const { overflow } = document.body.style;
		document.body.style.overflow = "hidden";
		closeRef.current?.focus();

		const onKey = (e) => {
			if (e.key === "Escape") {
				handleClose();
				return;
			}
			// Keep tabbing inside the overlay while it is open.
			if (e.key === "Tab") {
				e.preventDefault();
				closeRef.current?.focus();
			}
		};

		document.addEventListener("keydown", onKey);
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = overflow;
			// Hand focus back to the thumbnail that opened this.
			if (returnFocusTo.current instanceof HTMLElement) {
				returnFocusTo.current.focus();
			}
		};
	}, [src, handleClose]);

	if (!src) return null;

	return (
		<Scrim
			onClick={handleClose}
			role="dialog"
			aria-modal="true"
			aria-label={`${caption} — full size`}
		>
			<Bar onClick={(e) => e.stopPropagation()}>
				<Caption>{caption}</Caption>
				<Close ref={closeRef} onClick={handleClose} type="button">
					Close &times;
				</Close>
			</Bar>

			{/* Clicking the plate itself should not dismiss. */}
			<Plate onClick={(e) => e.stopPropagation()}>
				<img src={src} alt={alt} />
			</Plate>

			<Hint>Click anywhere, or press Esc</Hint>
		</Scrim>
	);
};

const Scrim = styled.div`
	position: fixed;
	inset: 0;
	z-index: 60;
	background: rgba(22, 25, 27, 0.94);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	padding: 1.5rem;

	${bp.md} {
		padding: 0.9rem;
	}
`;

const Bar = styled.div`
	width: 100%;
	max-width: 1400px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1.5rem;
`;

const Caption = styled.span`
	font-family: ${font.data};
	font-size: 0.7rem;
	letter-spacing: 0.18em;
	text-transform: uppercase;
	color: ${color.vellum};
`;

const Close = styled.button`
	font-family: ${font.data};
	font-size: 0.7rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.vellum};
	border: 1px solid ${color.graphite};
	padding: 0.5rem 0.85rem;
	background: transparent;
	transition: background 0.18s ease, color 0.18s ease;

	&:hover {
		background: ${color.vellum};
		color: ${color.ink};
	}
`;

const Plate = styled.div`
	background: ${color.sheetSunk};
	border: 1px solid ${color.graphite};
	padding: 0.75rem;
	max-width: 1400px;
	max-height: 78vh;
	display: flex;

	img {
		max-width: 100%;
		max-height: calc(78vh - 1.5rem);
		width: auto;
		height: auto;
		object-fit: contain;
		display: block;
	}

	${bp.md} {
		padding: 0.45rem;
	}
`;

const Hint = styled.span`
	font-family: ${font.data};
	font-size: 0.6rem;
	letter-spacing: 0.16em;
	text-transform: uppercase;
	color: ${color.graphite};
`;

export default Lightbox;
