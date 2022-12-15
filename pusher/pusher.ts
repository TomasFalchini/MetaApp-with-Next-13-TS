import Pusher from "pusher";
import pusherJs from "pusher-js";

export const pusherServer = new Pusher({
  appId: "1525152",
  key: "964745c4e9b051620459",
  secret: "657ea566963b6262ca20",
  cluster: "sa1",
  useTLS: true,
});

export const pusherClient = new pusherJs("964745c4e9b051620459", {
  cluster: "sa1",
  forceTLS: true,
});
