import type { NextApiRequest, NextApiResponse } from "next";
import { ContactDB, UserDB } from "../../../database/schemas";
import { Contact } from "../../../types/types";

type Data = {
  contacts: Contact[] | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") return res.status(404).json({ contacts: null });
  const { userid } = req.query;
  const user1 = new UserDB({
    name: 'Ian Fleming',
    image: 'sadasdsad',
    uid: 'asdsadasd',
    lastSingIn: new Date(),
    email: "tomasfalchini@gmail.com",
});

  const contact1 = new ContactDB({
    user: user1._id,
    contactId: 'sdsadasd',
    accepted: true
  })

  user1.contact = contact1._id

  await user1.save()
  await contact1.save()


  const contacts = await UserDB.find({ uid: userid }).populate('contact').exec()
  let contactsRes: Contact[] = 
  contacts.map((el) => {
    const c = el.toObject()
    return {
      user: c,
      contactId: c.contact.contactId,
      accepted: c.contact.accepted
    }
  })

  res.status(200).json({ contacts: contactsRes });
}
