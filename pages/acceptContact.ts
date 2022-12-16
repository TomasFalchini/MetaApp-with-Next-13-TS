import type { NextApiRequest, NextApiResponse } from "next";
import { Contact } from "../types/types";
import { ContactDB } from "../database/schemas";

type Data = {
  upload: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(404).json({ upload: false });

  const { contactid, contactreqid, accepted } = req.body;

  if (accepted) {
    ContactDB.findOneAndUpdate();
  } else {
    ContactDB.findOneAndDelete();
  }

  //el accepted va a estar en el front por lo que si el server me devuelve un true significa que puedo mostrar el estado de lo que ocurrio con ese accepted
  return res.status(200).json({ upload: true });
}
