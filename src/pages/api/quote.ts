// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import quotes from "@/resources/quotes.json";
import { random } from "@/scripts/random";

export type PhraseRes = {
	quote: {
        text: string;
        author: string;
    };
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PhraseRes>
) {
	res.status(200).json({ quote: quotes[random({ max: quotes.length })] });
}
