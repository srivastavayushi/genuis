import { create } from "zustand";

interface useProMoalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Gives global state controls for opening and closing the modal from
// wherever we need
export const userProModal = create<useProMoalStore>(
  (set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
  })
);
