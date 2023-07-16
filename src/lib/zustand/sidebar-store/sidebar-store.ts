import { create } from "zustand";
import { ISidebarState } from "../../../../typings";

const useSidebarStore = create<ISidebarState>((set) => ({
  isExpand: true,

  toggleSidebar: (state) => set({ isExpand: state }),
  expand: () => set({ isExpand: true }),
}));

export default useSidebarStore;
