import { IconType } from "react-icons";

export interface ILogin {
  email: string;
  password: string;
  role: string;
}

// ? @ desc sidebar main
export interface ISidebar {
  key: number;
  title: string;
  items: ISidebarItems[];
}
// ? @desc sidebar nested Data
export interface ISidebarItems {
  id: number;
  icon: IconType;
  name: string;
  path: string;
}

export interface ISidebarState {
  isExpand: boolean;
  toggleSidebar: (state: boolean) => void;
  expand: () => void;
}

// ? REACT TABLE INTERFACE PROPS
export type IUser = {
  _id?: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
};

export interface INewUser {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
  password: string;
}

export interface IProducts {
  id: number;
  prod_name: string;
  stock: any;
  prod_import: string;
  prod_code: string;
}

export interface IUserFormState {
  showAddUserForm: boolean;
  toggleShowUserForm: (state: boolean) => void;
}
export interface IUserEdit {
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  address: string;
}
export interface IUserEditState {
  userEditData: IUserEdit;
  showEditUserModal: boolean;
  editUserId: any;

  setEditData: (state: IUserEdit) => void;
  setShowEditModal: (state: boolean) => void;
  setEditUserId: (state: any) => void;
}
