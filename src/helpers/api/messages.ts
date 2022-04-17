import fetch from "./customFetch";

//helpers
import errorBoundary from "../errorBoundary";


const messages = {
  getAllChats: async () => {
    try {
      const result = await fetch({
        url: "/chats",
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },
  getSingleChat: async (chatId: number) => {
    try {
      const result = await fetch({
        url: `/chats/${chatId}`,
        method: "GET",
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  },

  createChat: async (newMemberId: number | string) => {
    try {
      const result = await fetch({
        url: "/chats",
        method: "POST",
        data: { newMemberId },
      });

      return result;
    } catch (err: unknown) {
      errorBoundary(err);
    }
  }
};

export default messages;
