import { create } from "zustand";
import { IUserEditState } from "../../../../typings";

const InitialState = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  address: "",
};

const editUserStore = create<IUserEditState>((set) => ({
  userEditData: InitialState,
  showEditUserModal: false,
  editUserId: "",

  setEditData: (state) => set({ userEditData: state }),
  setShowEditModal: (state) => set({ showEditUserModal: state }),
  setEditUserId: (state) => set({ editUserId: state }),
}));

export default editUserStore;
