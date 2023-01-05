import { NextApiRequest, NextApiResponse } from "next";
import { UserDB } from "../../../../database/schemas";
import { UserType } from "../../../../types/types";

type Data = {
  user: UserType | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") return res.status(404).json({ user: null });

  const { useremail } = req.query;

  const user = await UserDB.findOne({ email: useremail }).exec();

  if (!user) {
    return res.status(404).json({ user: null });
  }

  res.status(200).json({ user: user.toObject() });
}
