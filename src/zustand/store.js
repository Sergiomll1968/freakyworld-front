import { create } from "zustand";


export const useUser = create((set) => ({
  user: {
    username: null,
    email: "",
    token: "",
  },
  setUser: (userData) => set(() => ({ user: userData })),
}));
