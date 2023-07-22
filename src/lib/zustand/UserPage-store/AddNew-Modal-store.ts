import { create } from "zustand";
import { IUserFormState } from "../../../../typings";

const addUserModalStore = create<IUserFormState>((set) => ({
  showAddUserForm: false,

  toggleShowUserForm: (state) => set({ showAddUserForm: state }),
}));

export default addUserModalStore;
