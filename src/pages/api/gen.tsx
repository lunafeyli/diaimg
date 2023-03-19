import { withOGImage } from "next-api-og-image";
import { getTemplate } from "@/lib/template";
import axios from "axios";
import { createClient } from "pexels";
import phrasesT from "@/resources/phrases-t.json";
import phrases from "@/resources/phrases.json";
import { random } from "@/scripts/random";

interface IQuery {
	titulo?: string;
	subtitulo?: string;
	tipo?: "dia" | "tarde";
}

async function getData(query: IQuery) {
	const type = query.tipo ? query.tipo : "dia";
	const ver = await axios
		.get("https://www.abibliadigital.com.br/api/verses/nvi/random")
		.then((data) => data.data)
		.catch((err) => console.error(err));

	// const phrase: { phrase: string } = await axios
	// 	.get(process.env.BASE_URL + "api/phrase")
	// 	.then((data) => data.data)
	// 	.catch((err) => console.error(err));

	const client = createClient(
		"563492ad6f9170000100000137c51c35be9e495d805d553b0ecaba16"
	);

	const photos = await client.photos
		.search({
			query: "nature",
			per_page: 1,
			page: Math.floor(Math.random() * (732 - 1) + 1),
		})
		.then((photos) => JSON.parse(JSON.stringify(photos)));

	return {
		message: {
			phrase:
				query.subtitulo ||
				(type === "dia" ? phrases : phrasesT)[
					random({ max: phrases.length })
				],
		},
		backgroundURL: photos.photos[0].src.original as string,
		verticle: {
			book: ver.book.name as string,
			chapter: ver.chapter as string,
			number: ver.number as string,
			text: ver.text as string,
		},
		title: query.titulo || `Bom ${type === "dia" ? "Dia" : "Tarde"}`,
	};
}

export default withOGImage<"query", IQuery>({
	template: {
		react: async (query) => {
			const data = await getData(query);

			return getTemplate(data);
		},
	},
	height: 592,
	width: 592,
	type: "png",
	dev: {
		inspectHtml: false,
	},
});
