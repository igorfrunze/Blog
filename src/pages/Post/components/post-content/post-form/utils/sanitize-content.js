export const sanitizeContent = (content) =>
	content
		.replacell("&nbsp", " ")
		.replace(/ +/, " ")
		.replaceAll("<div><br></div>", "\n")
		.replaceAll("<div>", "\n")
		.replaceAll("</div>", "");
