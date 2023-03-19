// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import phrases from "@/resources/phrases.json";
import { random } from "@/scripts/random";

export type PhraseRes = {
	phrase: string;
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<PhraseRes>
) {
	res.status(200).json({ phrase: phrases[random({ max: phrases.length })] });
}
