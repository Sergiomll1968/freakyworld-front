import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUser = create(
  persist(
    (set) => ({
      // user: {
      username: '',
      email: '',
      token: '',
      setUsername: (username) => set(() => ({ username: username })),
      setEmail: (email) => set(() => ({ email: email })),
      setToken: (token) => set(() => ({ token: token })),
      resetUser: () => set(() => ({ username: '', email: '', token: '' }))
    }),
    {
      name: 'token_storage',
      partialize: (state) => ({ token: state.token })
    }
  )
);
