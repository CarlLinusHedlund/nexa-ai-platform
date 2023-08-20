import { create } from "zustand";

type Store = {
  count: number,
}

type Actions = {
  increment: () => void;
  reset: () => void;
}

export const useStore = create<Store & Actions>((set) => ({
  count: 0,
  increment: () => set((state: any) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));