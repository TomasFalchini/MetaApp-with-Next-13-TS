import type { NextApiRequest, NextApiResponse } from "next";
import { UserType } from "../../types/types";

/* type Data = {
  upload: boolean;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") return res.status(404).json({ upload: false });

  const { message } = req.body;
  const newMessage: Message = {
    ...message,
    timestamp: Date.now(),
  };

  const p = new MessageDB(newMessage);
  await p.save();

  pusherServer.trigger("messages-chanel", "new-message-added", newMessage);

  res.status(200).json({ upload: true });
}
 */
