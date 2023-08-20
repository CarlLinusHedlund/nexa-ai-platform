import { create } from "zustand";

interface AnimationState {
  animationComplete: boolean;
  setAnimationComplete: (complete: boolean) => void;
}

export const useAnimationStore = create<AnimationState>((set) => ({
  animationComplete: false,
  setAnimationComplete: (complete) => set({ animationComplete: complete }),
}));