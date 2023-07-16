// "use client";

import { userColumns } from "./users-column";
import { DataTable } from "../../components/react-table/main-table";
import PageWrapper from "@/components/Page-Wrapper/Page-Wrapper";
import UserfakeData from "@/utils/table-data/MOCK_USERS_DATA .json";

// ? Fetch data from your API here.
// ? @desc the data from here will pass on DatTable component
// ? @desc The data that cames from this function will be the TBody of the DataTable component
async function getData() {
  const Data = UserfakeData.map((d) => {
    return d;
  });

  return Data;
}

export default async function UsersPage() {
  const data = await getData();

  return (
    <>
      <PageWrapper>
        <DataTable columns={userColumns} data={data} />
      </PageWrapper>
    </>
  );
}
