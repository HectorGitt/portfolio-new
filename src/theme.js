/**
 * Drafting-sheet tokens.
 *
 * The palette is drawing-office stock: cool vellum paper, graphite rules,
 * blueprint ink for structure, and a single survey-flag orange reserved
 * exclusively for measured values. If a colour is doing decoration rather
 * than carrying information, it does not belong here.
 */

export const color = {
	vellum: "#E6E8E1",
	sheet: "#EFF0EA",
	sheetSunk: "#DDE0D7",
	ink: "#16191B",
	graphite: "#59615C",
	rule: "#C6CABE",
	ruleFaint: "#D5D8CE",
	blueprint: "#1D4E52",
	blueprintTint: "#CFDBDA",
	signal: "#B4441C",
	signalTint: "#EBD9CF",
};

export const font = {
	display: "'Archivo', 'Helvetica Neue', Arial, sans-serif",
	body: "'Source Serif 4', Georgia, 'Times New Roman', serif",
	data: "'IBM Plex Mono', 'SFMono-Regular', Consolas, monospace",
};

export const size = {
	page: "1220px",
	gutter: "2.5rem",
	gutterSm: "1.25rem",
	rail: "3.25rem",
};

export const bp = {
	sm: "@media (max-width: 640px)",
	md: "@media (max-width: 900px)",
	lg: "@media (max-width: 1140px)",
};

const theme = { color, font, size, bp };
export default theme;
