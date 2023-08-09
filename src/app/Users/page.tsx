"use client";

import { userColumns } from "./users-column";
import { DataTable } from "../../components/react-table/main-table";
import UserfakeData from "@/utils/table-data/MOCK_USERS_DATA .json";
import PageWrapper from "@/components/Page-Wrapper/Page-Wrapper";
import AddNewUserModal from "./Add-New-User";
import addUserModalStore from "@/lib/zustand/UserPage-store/AddNew-Modal-store";
import { Button } from "@/components/ui/button";
import { useQuery } from "react-query";
import { getUser } from "./APIs/api";
import Loader from "@/components/loader/Spinner";
import EditUserModal from "./Edit-User-Modal";

export default function UsersPage() {
  const { toggleShowUserForm, showAddUserForm } = addUserModalStore();
  const {
    isLoading,
    isError,
    data: users,
    error,
    isSuccess,
  }: any = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return (
    <>
      <AddNewUserModal />
      <EditUserModal />

      <PageWrapper>
        <div className="relative ">
          <div className="flex justify-end ">
            <Button
              onClick={() => toggleShowUserForm(!showAddUserForm)}
              // className="bg-blue-600 hover:bg-blue-700"
            >
              Add New
            </Button>
          </div>
          {isLoading ? (
            <div className="relative w-full h-[78vh] flex items-center justify-center flex-col space-y-2">
              <Loader />
              <p className="text-gray-400 ">Loading...</p>
            </div>
          ) : (
            <DataTable columns={userColumns} data={users?.data} />
          )}
        </div>
      </PageWrapper>
    </>
  );
}
