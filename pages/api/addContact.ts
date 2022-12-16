import type { NextApiRequest, NextApiResponse } from "next";
import { ContactDB } from "../../database/schemas";

type Data = {
  upload: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(404).json({ upload: false });

  const { contactId } = req.body;
  const newContact = {
    contactId,
    accepted: false,
  };

  //ver como hacer la relacion entre el contacto agregado y el usuario q lo agrego (a traves de la db users bla bla)
  const p = new ContactDB(newContact);
  await p.save();

  res.status(200).json({ upload: true });
}
