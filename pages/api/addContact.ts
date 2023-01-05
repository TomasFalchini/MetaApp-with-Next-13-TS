import type { NextApiRequest, NextApiResponse } from "next";
import { ContactDB } from "../../database/schemas";
import ContactMongooseImpl from "../../infrastructure/persistance/Contact/ContactMongooseImpl";
import ContactService from "../../Services/Contacts/ContactsService";

type Data = {
  upload: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(404).json({ upload: false });

  const { contactId } = req.body;

  const contactService = new ContactService(new ContactMongooseImpl());

  await contactService.addContact(contactId);

  res.status(200).json({ upload: true });
}
