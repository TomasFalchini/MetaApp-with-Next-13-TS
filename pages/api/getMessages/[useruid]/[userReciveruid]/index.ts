import type { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../../../types/types";
import { MessageDB } from "../../../../../database/schemas";

type Data = {
  message: Message[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | boolean>
) {
  if (req.method !== "GET") return res.status(404).send(false);

  const { useruid, userReciveruid } = req.query;

  const messagesRes = await MessageDB.find({ "user.uid": useruid }).exec();

  if (messagesRes.length === 0) return res.status(301).send(false);
  const allMessages = messagesRes.filter((el) => {
    const mess = el.toObject();
    if (mess.userRecive.uid === userReciveruid)
      return {
        content: mess.content,
        timestamp: mess.timestamp,
        user: mess.user,
        uid: mess.uid,
        userRecive: mess.userRecive,
      } as Message;
  });

  res.status(200).json({
    message: allMessages.sort(
      (a, b) => Number(b.timestamp) - Number(a.timestamp)
    ),
  });
}
