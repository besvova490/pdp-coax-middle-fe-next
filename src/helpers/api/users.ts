import fetch from "./customFetch";


const users = {
  getUsers: async () => {
    try {
      const result = await fetch({
        url: "/users",
        method: "GET",
      });

      return result;
    } catch (err: any) {
      if (err.data) {
        throw err.data;
      }
      throw err;
    }
  }
};

export default users;
