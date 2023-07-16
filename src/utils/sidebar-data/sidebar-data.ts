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
        id: 1,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 2,
        icon: FiUser,
        name: "User",
        path: "/Users",
      },
      {
        id: 3,
        icon: LiaStoreAltSolid,
        name: "Products",
        path: "/Products",
      },
      {
        id: 4,
        icon: SlCreditCard,
        name: "Orders",
        path: "/",
      },
      {
        id: 5,
        icon: FiTruck,
        name: "Delivery",
        path: "/",
      },
      {
        id: 6,
        icon: LiaStoreAltSolid,
        name: "Products",
        path: "/",
      },
      {
        id: 7,
        icon: SlCreditCard,
        name: "Orders",
        path: "/",
      },
      {
        id: 8,
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
        id: 9,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 10,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 11,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 12,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 13,
        icon: RxDashboard,
        name: "Dashboard",
        path: "/",
      },
      {
        id: 14,
        icon: RxDashboard,
        name: "Dashboard LAST ",
        path: "/",
      },
    ],
  },
];
