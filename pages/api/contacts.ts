import type { NextApiRequest, NextApiResponse } from "next";
import { ContactDB } from "../../database/schemas";
import { Contact } from "../../types/types";

type Data = {
  contacts: Contact[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") return res.status(404).json({ contacts: null });

  const { userId } = req.body;

  const contacts: Contact[] = await ContactDB.find({}).exec();

  res.status(200).json({ contacts });
}
