import { RxDashboard } from "react-icons/rx";
import { FiUser, FiTruck } from "react-icons/fi";
import { SlCreditCard } from "react-icons/sl";
import { LiaStoreAltSolid } from "react-icons/lia";
import { ISidebar } from "../../../typings";

export const sidebarItems: ISidebar[] = [
  {
    key: 1,
    title: "APPS",
    items: [
      {
        id: 101,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 102,
        icon: FiUser,
        name: "User",
        path: "/Users",
      },
      {
        id: 103,
        icon: LiaStoreAltSolid,
        name: "Products",
        path: "/Products",
      },
      {
        id: 104,
        icon: SlCreditCard,
        name: "Orders",
        path: "/",
      },
      {
        id: 105,
        icon: FiTruck,
        name: "Delivery",
        path: "/",
      },
      {
        id: 106,
        icon: LiaStoreAltSolid,
        name: "Products",
        path: "/",
      },
      {
        id: 107,
        icon: SlCreditCard,
        name: "Orders",
        path: "/",
      },
      {
        id: 108,
        icon: FiTruck,
        name: "Delivery",
        path: "/",
      },
    ],
  },

  {
    key: 2,
    title: "OTHERS",
    items: [
      {
        id: 109,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 110,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 111,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 112,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 113,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 114,
        icon: RxDashboard,
        name: "Dashboard LAST ",
        path: "/",
      },
    ],
  },
];
